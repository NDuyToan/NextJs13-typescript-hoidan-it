"use client";

import stylesApp from "@/styles/app.module.css";
import stylesFace from "@/styles/face.module.css";
import Link from "next/link";
import AppTable from "@/components/app.table";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8000/blogs");
      const data = await res?.json();
      console.log("data", data);
    };
    fetchData();
  }, []);
  return (
    <div
      style={{
        height: "100vh",
      }}
      className="home"
    >
      <ul>
        <li className={stylesApp.red}>
          <Link href="/facebook">
            <p className={stylesFace.red}>Facebook</p>
          </Link>
        </li>
        <li>
          <Link href="/youtube">Youtube</Link>
        </li>
        <li>
          <Link href="/tiktok">Tiktok</Link>
        </li>
      </ul>
      <AppTable />
    </div>
  );
}
