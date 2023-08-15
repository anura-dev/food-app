import { fireEvent, render, screen } from "@testing-library/react"
import MOCK_DATA from "../mocks/mockResMenu.json"
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import RestaurantMenu from "../RestaurantMenu";
import Cart from "../Cart";
import Header from "../Header";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA)
})
)

it("should load restaurant menu component", async () => {
    await act(async () => render (
        <BrowserRouter>
        <Provider store = {appStore}>
            <RestaurantMenu/>
            <Header/>
            <Cart/>
        </Provider>
        </BrowserRouter>
        ));

 const accordianHeader = screen.getByText("Recommended (20)");  // check the text of an accordian
 fireEvent.click(accordianHeader);  // click accordian header
 
 expect(screen.getAllByTestId("foodItems").length).toBe(20);  /// test the total recommended items to be 20

 expect(screen.getByText("Cart 🛒 (0)")).toBeInTheDocument();  // test the text of Cart in Header to be 0 before add any food items  

 const addBtns = screen.getAllByRole("button", {name: "Add +"});  
 fireEvent.click(addBtns[0]);   // click on Add + btn of 1st item

 expect(screen.getByText("Cart 🛒 (1)")).toBeInTheDocument();  // test the text of Cart in Header to be 1 after add any food items

 fireEvent.click(addBtns[1]);  // click on Add + btn of 2nd item

 expect(screen.getByText("Cart 🛒 (2)")).toBeInTheDocument();  // test the text of Cart in Header to be 2 after add any food items

 expect(screen.getAllByTestId("foodItems").length).toBe(22);  // 20( from RestaurantMenu component) + 2 (from Cart component after adding 2 items)

 fireEvent.click(screen.getByRole("button",{name: "Clear Cart"}));

 expect(screen.getAllByTestId("foodItems").length).toBe(20);  //20 (from Restaurant Menu Component) + 0 (after clicking clear cart) 
 expect(screen.getByText("Cart is empty. Add items to the cart!!"));

 expect(screen.getByText("Cart 🛒 (0)")).toBeInTheDocument();

});