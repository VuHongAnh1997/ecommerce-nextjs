import axios, { AxiosError, AxiosInstance } from "axios";
import { useRouter } from "next/router";

interface Auth {
  token: string;
  refreshToken: string;
}

const getAuth = () => {
  const storedData = localStorage.getItem("auth");
  const parsedData = storedData ? JSON.parse(storedData) : null;

  const auth = parsedData as unknown as Auth;
  return auth;
};

const createAxiosInstance = (): AxiosInstance => {
  const instance = axios.create();

  // Add request interceptor
  instance.interceptors.request.use(
    (config) => {
      // Add any headers, authentication, or modifications to the request config
      // before sending the request

      const auth = getAuth();

      // Set the token in the headers if it exists
      if (auth) {
        config.headers.Authorization = `Bearer ${auth.token}`;
      }

      return config;
    },
    (error: AxiosError) => {
      // Handle request error
      return Promise.reject(error);
    }
  );

  // Add response interceptor
  instance.interceptors.response.use(
    (response) => {
      // Process successful responses
      return response;
    },
    (error: AxiosError) => {
      // Handle response error
      if (error.response?.status === 401) {
        // Redirect to the login page or perform any other action
        const auth = getAuth();
        if (auth.token) {
          axios.post<Auth>("/api/auth/refreshtoken", {
            refreshToken: auth.refreshToken,
          });
        } else {
          const router = useRouter();
          router.push("/auth/login");
        }
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export default createAxiosInstance();
