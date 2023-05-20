// import React from "react"
import Body from "../Body";
import { render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { Restraunt_Data } from "../../mocks/dummyData";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      Promise.resolve(Restraunt_Data);
    },
  });
});

test("Shimmer results on Page ", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  //   await waitFor(() => expect(body.getByTestId("search-btn")));
  const shimmer = body.getByTestId("shimmer");
  //   expect(shimmer).toBeInTheDocument();
  expect(shimmer.children.length).toBe(2);
  console.log(shimmer);
});
