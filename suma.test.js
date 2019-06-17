const { sumar } = require("./index.js");

describe("sumar", () =>{
    it("comprobar suma", () =>{

        expect(sumar(3,2)).toEqual(5);
    })
})