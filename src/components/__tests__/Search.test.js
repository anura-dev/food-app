import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body";
import MOCk_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCk_DATA);
        }
    })
})

it("should render Body Component with Search", async ()=>{
   await act (async () => 
   render (
    <BrowserRouter>
        <Body/>
    </BrowserRouter>
   )
   );

   const searchBtn = screen.getByRole("button", {name: "Search"});

   expect(searchBtn).toBeInTheDocument();

})

it("should render Body Component with Search and input as Pizza", async ()=>{
    await act (async () => 
    render (
     <BrowserRouter>
         <Body/>
     </BrowserRouter>
    )
    );

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(20);
 
    const searchBtn = screen.getByRole("button", {name: "Search"});
 
    const searchInput = screen.getByTestId("searchInput");
 
     fireEvent.change(searchInput, {target: {value: "pizza"}});
     fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(5);
 
 })

 it("should filter top rated restaurants", async ()=>{
    await act (async () => 
    render (
     <BrowserRouter>
         <Body/>
     </BrowserRouter>
    )
    );

    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(20);

    const filterBtn = screen.getByRole("button", {name: "Top Rated Restaurants"})
    fireEvent.click(filterBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(9);
 
    
 
 })