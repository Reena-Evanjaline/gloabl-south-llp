import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Banner from "./home/Banner";
import Management from "./home/Management";
import Testimonials from "./home/Testimonials";

import Dedicate from "./home/Dedicate";
import Footer from "./components/Footer";
import Partner from "./home/Partner";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="main-content" style={{ marginTop: "120px" }}>
      <Banner />
      <Management />
      <Testimonials />
      <Partner />
      <Dedicate />
      <Footer />
      </div>
    </>
  );
}
