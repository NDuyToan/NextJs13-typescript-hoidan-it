"use client";
import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";

const Facebook = () => {
  const router = useRouter();

  const handleGotoHome = () => {
    router.push("/");
  };
  return (
    <div>
      <h2>Facebook</h2>
      <Button variant="danger" onClick={handleGotoHome}>
        Go to home
      </Button>
    </div>
  );
};
export default Facebook;
