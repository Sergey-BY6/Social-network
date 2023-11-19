import React from 'react'
import {create} from "react-test-renderer"
import {Paginator} from "./Paginator"


describe("Paginator component tests", () => {
    test("pages coun is 11 bub shoul be shoved only 10", () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1} currentPage={10} onPageChanged={() => {}}/>)
        const root = component.root
        let spans = root.findAllByType("span")
        expect(spans.length).toBe(10)
    })
    test("if pages count more then 10 buttun NEXT should be present", () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1} currentPage={10} onPageChanged={() => {}}/>)
        const root = component.root
        let button = root.findAllByType("button")
        expect(button.length).toBe(1)
    })
})