"use client";

import axiosInstance from "@/utils/axiosInstance";

export default function Home() {
  const testApi = async () => {
    const res = await axiosInstance.get("/api/test/hello");
    alert(res.data);
  };

  return (
    <main>
      <div>Welcome my store</div>
      <button onClick={testApi}>New Collections</button>
    </main>
  );
}
