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
import ExploreFuture from "./components/ExploreFuture";
import TeamOfDesigners from "./components/TeamOfDesigners";
import FounderWords from "./components/FounderWords";
import ClientsComments from "./components/ClientsComments";
import PricingPlans from "./components/PricingPlans";
import FrequentlyAsked from "./components/FrequentlyAsked";
import OurAwards from "./components/OurAwards";
import LatestBlog from "./components/LatestBlog";
import NewsLetter from "./components/NewsLetter";
import Map from "./components/Map";
import Address from "./components/Address";
import DreamProject from "./components/DreamProject";

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
      <ExploreFuture />
      <TeamOfDesigners />
      <FounderWords />
      <ClientsComments />
      <PricingPlans />
      <FrequentlyAsked />
      <OurAwards />
      <LatestBlog />
      <NewsLetter />
      <Map />
      <Address />
      <DreamProject />
    </div>
  );
}
