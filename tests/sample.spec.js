const {test, expect} = require('@playwright/test')


test ("My First Test", async function ({page}){
     expect(12).toBe(12)
})


test ("My secind test", async function ({page}){
     expect(100).toBe(100)
})

test ("my third test", async function ({page}){
     expect("Mukesh Otwani").toContain("Otwani")
     expect(true).toBeTruthy()
})


test ("my fourth test", async function({page}){
     expect (false).toBeFalsy()
} )