import React, { useState } from "react";
import UserContext from "../utils/UserContext";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className=" border  border-black p-3 m-2">
      <h3>{title}</h3>
      {isVisible ? (
        <button
          className=" p-2 m-2 underline rounded-2xl"
          onClick={() => setIsVisible(false)}
        >
          Hide
        </button>
      ) : (
        <button
          className=" p-2 m-2 underline rounded-2xl"
          onClick={() => setIsVisible(true)}
        >
          Show
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");

  return (
    <div>
      <h1 className=" p-5 m-5 font-bold">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta ullam dolore voluptatum ad veniam, earum cumque ex sint doloremque itaque tempore eligendi! Sequi nostrum aliquam ab aperiam culpa magnam asperiores?"
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() => setVisibleSection("about")}
      />
      <Section
        title={"Contact"}
        description={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta ullam dolore voluptatum ad veniam, earum cumque ex sint doloremque itaque tempore eligendi! Sequi nostrum aliquam ab aperiam culpa magnam asperiores?"
        }
        isVisible={visibleSection === "contact"}
        setIsVisible={() => setVisibleSection("contact")}
      />
      <Section
        title={"Cart"}
        description={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta ullam dolore voluptatum ad veniam, earum cumque ex sint doloremque itaque tempore eligendi! Sequi nostrum aliquam ab aperiam culpa magnam asperiores?"
        }
        isVisible={visibleSection === "cart"}
        setIsVisible={() => setVisibleSection("cart")}
      />
      {/* <div className=" p-3">
        <h3>
          <UserContext.Consumer>
            {({ user }) => <h4 className="font-bold">{user.name}</h4>}
          </UserContext.Consumer>
        </h3>
      </div> */}
    </div>
  );
};

export default Instamart;
