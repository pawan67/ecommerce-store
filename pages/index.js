import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeMain from "../components/HomeMain";
import styles from "../styles/Home.module.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
import { useUserContext } from "../context/userContext";
// ..
export default function Home() {
  const { page, setPage } = useUserContext();

  useEffect(() => {
    AOS.init();
    setPage("home");
  }, []);
  return (
    <>
      <Head>
        <link rel="icon" href="/images/logo.png" />
        <title>Ecommercee - Online shopping website</title>
      </Head>
      <div className=" w-screen    bg-[#ebeaef]">
        <div className=" max-w-7xl mx-auto px-3 sm:px-5">
          <Header />
          <HomeMain />
        </div>
        <Footer />
      </div>
    </>
  );
}
