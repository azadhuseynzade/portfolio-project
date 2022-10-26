import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import DigitalSide from "./components/DigitalSide";
import ModernStudio from "./components/ModernStudio";
export default function Home() {
  return (
    <div>
      <ModernStudio />
      <DigitalSide />
    </div>
  );
}
