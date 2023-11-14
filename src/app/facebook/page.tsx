"use client";
import { useRouter } from "next/navigation";

const Facebook = () => {
  const router = useRouter();

  const handleGotoHome = () => {
    router.push("/");
  };
  return (
    <div>
      <h2>Facebook</h2>
      <button type="button" onClick={handleGotoHome}>
        Go to home
      </button>
    </div>
  );
};
export default Facebook;
