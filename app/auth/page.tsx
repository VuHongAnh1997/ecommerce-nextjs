import Link from "next/link";

const Auth = () => {
  return (
    <div className="p-3">
      <Link href="/auth/login" className="m-2">
        Đăng nhập
      </Link>
      <Link href="/logout" className="m-2">
        Đăng ký
      </Link>
    </div>
  );
};

export default Auth;
