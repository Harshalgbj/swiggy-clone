// import React from "react";
// import ReactDOM from "react-dom/client";

// // const parent = React.createElement(
// //   "div",
// //   { id: "parent" },
// //   React.createElement("div", { id: "child" }, [
// //     React.createElement("h1", {}, "i am h1 tag"),
// //     React.createElement("h2", {}, "i am h2 tag.changes"),
// //   ])
// // );

// // const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(parent);

// // ---------------------------------------------------------
// // using React
// // const heading = React.createElement("h1", {}, "namaste React");

// // JXS   ----> its not HTML in JS
// // (this code is converted before it reaches JS Engine) --done by PARCEL && BABEL
// // const jskHeading = <h1 className="head">nameste JSX</h1>;
// // root.render(jskHeading);

// //--------------------------------------------
// // React Element

// // const heading = (
// //   <h1 className="head" tabIndex="5">
// //     Hello React Harshal
// //   </h1>
// // );
// // root.render(heading);

// // React component
// // types --- class based  (this is Old)
// //           functional based   (this is new )

// // functional based
// // React component   or its Component composition
// const elem = <span>in title putting</span>;

// const Title = () => (
//   <h1 className="head" tabIndex="5">
//     {elem}
//     Hello React its JXS
//   </h1>
// );

// const number = 10000;

// const HeadingComponent = () => (
//   <div id="container">
//     <h2> {100 + 200} </h2>
//     <Title />
//     {Title()}
//     <Title></Title>
//     <h1 className="head">this is Functional component</h1>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);
