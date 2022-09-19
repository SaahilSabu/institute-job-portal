import React from "react";
import Nav from "../components/Nav";
import Header from "./../components/Header";
import Slider from "./../components/Slider";
import Footer from "./../components/Footer";
import Positions from "./../components/Positions";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const { data } = await axios.get("/api/admin/getalljobs");
        setJobs(data.jobs);
      } catch (error) {
        console.log(error);
      }
    };
    getJobs();
  }, []);
  return (
    <div className="flex flex-col h-screen justify-between">
      <div>
        <Nav />
        <Header title="Careers" />
        <div className="relative">
          <Slider />
          <div className="flex absolute bottom-0 left-0 right-0 flex-col ml-auto mr-auto center justify-center  bg-white w-11/12 p-2 sm:w-3/5 sm:p-4 ">
            <h1 className="text-2xl py-1">Open positions at IIITM</h1>
            <h2 className="text-xl py-1">{jobs.length} Open positions</h2>
          </div>
        </div>
        {jobs.map((job) => {
          return <Positions key={job._id} job={job} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
