import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import HomeMain from "../components/HomeMain";
import styles from "../styles/Home.module.css";

export default function Home() {
  
  return (
    <div className="    bg-[#ebeaef]">
      <div className=" max-w-7xl mx-auto px5">
        <Header />
        <HomeMain/>
      </div>
    </div>
  );
}

