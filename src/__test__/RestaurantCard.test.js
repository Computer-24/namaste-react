import "@testing-library/jest-dom"
import {render, screen} from "@testing-library/react";
import {RestaurantComponent, withPromotedLabel} from "../components/RestaurantComponent";
import MOCK_DATA from "../mocks/resCardMock.json"
import {BrowserRouter} from "react-router-dom";

it('should render Restaurant Component with props Data', () => {
    render(
        <BrowserRouter>
            <RestaurantComponent resData={MOCK_DATA} />
        </BrowserRouter>
    )
    const name = screen.getByText("Cafe Irani Chaii");
    expect(name).toBeInTheDocument();
});

it('should render Restaurant Component with promoted label', () => {
    const RestaurantCardPromoted = withPromotedLabel(RestaurantComponent)

    render(
        <BrowserRouter>
            <RestaurantCardPromoted resData={MOCK_DATA} />
        </BrowserRouter>
    )
    const label = screen.getByText("Promoted")
    expect(label).toBeInTheDocument();
});