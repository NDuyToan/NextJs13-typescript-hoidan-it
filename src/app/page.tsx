"use client";

import stylesApp from "@/styles/app.module.css";
import stylesFace from "@/styles/face.module.css";
import Link from "next/link";
import AppTable from "@/components/app.table";
import BlogsPage from "./blogs/page";

export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
      }}
      className="home"
    >
      <h2>Home page</h2>
    </div>
  );
}
