import Image from "next/image";
import styles from "./page.module.css";
import Hero from '@/components/Hero'
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";

export async function generateStaticParams() {
  console.log(`Page built at: ${new Date().toLocaleString()}`);
  return {
    props: {},
    revalidate: 18000, // 5 hours
  };
}

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Testimonials/>
    </>
  );
}
