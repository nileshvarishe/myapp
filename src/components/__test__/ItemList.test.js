import React from 'react'
import ReactDOM from 'react-dom'
import ItemList from './../ItemList'
import { cleanup } from "@testing-library/react";

afterEach(cleanup);

it("render ItemList without crashing", ()=>{
    const div = document.createElement("div")
    ReactDOM.render(<ItemList/>, div)
})