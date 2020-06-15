import React from 'react'
import ReactDOM from 'react-dom'
import ItemDetails from './../ItemDetails'
import { cleanup } from "@testing-library/react";

afterEach(cleanup);

it("render ItemDetails without crashing", ()=>{
    const div = document.createElement("div")
    ReactDOM.render(<ItemDetails/>, div)
})