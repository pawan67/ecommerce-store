import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import HomeMain from "../components/HomeMain";
import styles from "../styles/Home.module.css";

export default function Home({data}) {
  console.log(data);
  return (
    <div className="    bg-[#ebeaef]">
      <div className=" max-w-7xl mx-auto px-5">
        <Header />
        <HomeMain data={data}/>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return { props: { data } };
}