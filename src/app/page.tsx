import Image from "next/image";

import stylesApp from "@/styles/app.module.css";
import stylesFace from "@/styles/face.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
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
    </main>
  );
}
