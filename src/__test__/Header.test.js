import Header from "../components/Header";
import {Provider} from "react-redux";
import appStore from "../utils/store/appStore";
import {fireEvent, render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import "@testing-library/jest-dom"

it('should load Header Component with Login button', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole("button", {name: "Login"})
    expect(loginButton).toBeInTheDocument();
});

it('should render Header Component with Cart Items 0', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )
    const cartItems = screen.getByText("Cart 0")
    expect(cartItems).toBeInTheDocument();
});

it('should change to Logout button on click', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole("button", {name: "Login"})
    fireEvent.click(loginButton)
    const logoutButton = screen.getByRole("button", {name: "Logout"})
    expect(logoutButton).toBeInTheDocument();
});