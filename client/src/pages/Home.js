import React from "react";
import Nav from "../components/Nav";
import Header from "./../components/Header";
import Slider from "./../components/Slider";
import Footer from "./../components/Footer";
import Positions from "./../components/Positions";

const Home = () => {
  const id = localStorage.getItem("id");
  console.log(id);

  return (
      <div className="flex flex-col h-screen justify-between">
        <div>
          <Nav />
          <Header title="Careers" />
          <div className="relative">
            <Slider />
            <div className="flex absolute bottom-0 left-0 right-0 flex-col ml-auto mr-auto center justify-center  bg-white w-11/12 p-2 sm:w-3/5 sm:p-4 ">
              <h1 className="text-2xl py-1">Open positions at IIITM</h1>
              <h2 className="text-xl py-1">5 Open positions</h2>
            </div>
          </div>
          <Positions />
        </div>
      <Footer />
    </div>
  );
};

export default Home;
