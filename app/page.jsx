import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import RebuildButton from "@/components/RebuildButton";

export const revalidate = 60; // 5 hours

export default async function Home() {
  const buildTime = new Date().toLocaleString();
  console.log(`Page built at: ${buildTime}`);

  return (
    <>
      <Navbar />
      <Hero />
      <Testimonials />
      <div
        style={{
          display: "flex",
          marginBottom: "40px",
          gap: "5px",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          fontSize:'14px'
        }}
      >
        <span>Page built at: {buildTime}</span>
        <RebuildButton initialBuildTime={buildTime} />
      </div>
    </>
  );
}
