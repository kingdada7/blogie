import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import BlogList from "../components/BlogList";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import SpaceBackground from "../components/SpaceBackground";

function Home() {
  return (
    <>
      <SpaceBackground />
      <Navbar />
      <Header />
      <BlogList />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default Home;
