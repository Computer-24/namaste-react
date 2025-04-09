import "@testing-library/jest-dom"
import {fireEvent, render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import {act} from "react";
import "@testing-library/jest-dom"
import RestaurantMenu from "../components/RestaurantMenu";
import MOCK_DATA from "../mocks/menuMock.json";
import {Provider} from "react-redux";
import appStore from "../utils/store/appStore";
import Header from "../components/Header";
import Cart from "../components/Cart";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
})
it("should render Restaurant Menu Component", async () => {
    await act(async () => {
        render(
            <Provider store={appStore}>
                <BrowserRouter>
                    <Header/>
                    <RestaurantMenu/>
                    <Cart/>
                </BrowserRouter>
            </Provider>
        )
    })
    const accordionHeader = screen.getByText("Main Course (28)")
    fireEvent.click(accordionHeader)
    const footItems = screen.getAllByTestId("foodItem")
    expect(footItems.length).toBe(28)
    const addButtonList = screen.getAllByRole("button", {name: "Add+"})
    fireEvent.click(addButtonList[0])

    const cartItemsInHeader = screen.getByText("Cart 1")
    expect(cartItemsInHeader).toBeInTheDocument();
    const cartItems = screen.getAllByTestId("cartItem")
    expect(cartItems.length).toBe(1)
    fireEvent.click(screen.getByRole("button", {name: "Clear cart"}))
    expect(screen.queryByTestId("cartItem")).toBeNull()
})