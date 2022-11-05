import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import DigitalSide from "./components/DigitalSide";
import ModernStudio from "./components/ModernStudio";
import DesignAgency from "./components/DesignAgency";
import TotalCounts from "./components/TotalCounts";
import LookAwasome from "./components/LookAwasome";
import Video from "./components/Video";
import NewLook from "./components/NewLook";
import Professional from "./components/Professional";
import MakingComplex from "./components/MakingComplex";
import HowCanHelp from "./components/HowCanHelp";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <div>
      <ModernStudio />
      <DigitalSide />
      <DesignAgency />
      <TotalCounts />
      <LookAwasome />
      <Video />
      <NewLook />
      <Professional />
      <MakingComplex />
      <HowCanHelp />
      <Portfolio />
    </div>
  );
}
