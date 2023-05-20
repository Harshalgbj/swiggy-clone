import React from "react";
import { Outlet } from "react-router-dom";
import Profiles from "./ProfileClass";
import Profile from "./Profile";
const About = () => {
  return (
    <div>
      <h3 className="p-5 m-5 text-center font-serif font-light text-2xl">
        We build innovative products & solutions that deliver unparalleled
        convenience to urban consumers. The best part? Every bit of your work at
        Swiggy will help elevate the lives of our users across India.
      </h3>
      <h3 className="p-5 m-5 text-center font-serif font-light text-2xl">
        Our mission is to elevate the quality of life for the urban consumer
        with unparalleled convenience. Convenience is what makes us tick. It's
        what makes us get out of bed and say, "Let's do this."
      </h3>
    </div>
  );
};

export default About;
