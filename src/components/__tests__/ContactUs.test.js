import { render, screen } from "@testing-library/react"
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", ()=>{

    // beforeAll(()=>{
    //     console.log("Before All test");
    // })

    // beforeEach(()=>{
    //     console.log("Before Each test");
    // })

    // afterAll(()=>{
    //     console.log("After all tests");
    // })

    // afterEach(()=>{
    //     console.log("After each tests");
    // })

    it("Should load Contact Us Page", ()=>{
        render(<ContactUs/>);

        const heading= screen.getByRole("heading");

        //Assertion
        expect(heading).toBeInTheDocument();
    })

    test("Should load submit ", ()=>{
        render(<ContactUs/>);

        const submit = screen.getByText("Submit");

        //Assertion
        expect(submit).toBeInTheDocument();
    })

    test("Should load button ", ()=>{
        render(<ContactUs/>);

        const button = screen.getByRole("button");

        //Assertion
        expect(button).toBeInTheDocument();
    })

    test("Should have 2 input boxes", ()=>{
        render(<ContactUs/>);

        //querying
        const inputboxes = screen.getAllByRole("textbox");
        //console.log(inputboxes);

        expect(inputboxes.length).toBe(2);
        //expect(inputboxes.length).not.toBe(3);
    })

})