import { render } from "@testing-library/react";
import { Header } from "../header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import dummyLogo from "../../mocks/dummyLogo";

test("logo should load on rendering header", () => {
  //load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  // console.log(header);
  //check if logo is loaded
  const logo = header.getAllByTestId("logo");
  // console.log(logo);

  expect(logo[0].src).toBe(
    "https://img.freepik.com/premium-vector/chef-food-restaurant-logo_7085-179.jpg"
  );
});

test("Cart render", () => {
  //load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  // console.log(header);
  //check if logo is loaded
  const cart = header.getByTestId("cart");
  // console.log(cart);

  expect(cart.innerHTML).toBe("Cart-0 items");
});
