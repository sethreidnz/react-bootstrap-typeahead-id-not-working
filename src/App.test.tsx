import { render } from "@testing-library/react"
import App from "./App";

describe("<App />", () => {
    test("should be able to access the input component by label", () => {
        // arrange

        // act
        const component = render(<App />)

        // assert
        expect(component.getByLabelText("Input")).toBeInTheDocument()
    });

    test("should be able to access the Typeahead component by label", () => {
        // arrange

        // act
        const component = render(<App />)

        // assert
        expect(component.getByLabelText("Typeahead")).toBeInTheDocument()
    });

    test("should be able to access the AsyncTypeahead component by label", () => {
        // arrange

        // act
        const component = render(<App />)

        // assert
        expect(component.getByLabelText("Async Typeahead")).toBeInTheDocument()
    });
})