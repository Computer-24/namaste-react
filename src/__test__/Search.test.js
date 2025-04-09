import "@testing-library/jest-dom"
import {fireEvent, render, screen} from "@testing-library/react";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/resListMock.json"
import {BrowserRouter} from "react-router-dom";
import {act} from "react";
import "@testing-library/jest-dom"


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
})

it("should render Body Component with Search button", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )
    })
    const resCardsInitial = screen.getAllByTestId("restaurantCard")
    expect(resCardsInitial.length).toBe(8)
    const inputBox = screen.getByPlaceholderText("Search Restaurants")
    fireEvent.change(inputBox, {target: {value: "burger"}})
    const searchButton = screen.getByRole("button", {name: "Search"});
    fireEvent.click(searchButton)
    const resCards = screen.getAllByTestId("restaurantCard")
    expect(resCards.length).toBe(1)
})

it("should render Body Component with Top Rated Restaurants", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )
    })
    const topRatedButton = screen.getByRole("button", {name: "Top Restaurants"});
    fireEvent.click(topRatedButton)
    const resCards = screen.getAllByTestId("restaurantCard")
    expect(resCards.length).toBe(7)
})