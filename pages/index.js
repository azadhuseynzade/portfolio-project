import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import DigitalSide from "./components/DigitalSide";
import ModernStudio from "./components/ModernStudio";
import DesignAgency from "./components/DesignAgency";
import TotalCounts from "./components/TotalCounts";
import LookAwasome from "./components/LookAwasome";
export default function Home() {
  return (
    <div>
      <ModernStudio />
      <DigitalSide />
      <DesignAgency />
      <TotalCounts />
      <LookAwasome />
    </div>
  );
}
