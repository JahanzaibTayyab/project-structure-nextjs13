import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/assets/css/page.module.css";
const inter = Inter({ subsets: ["latin"] });
import Home from "@/views/Home";
export default function App() {
  return (
    <main className={styles.main}>
      <Home />
    </main>
  );
}
