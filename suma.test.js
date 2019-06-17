const { sumar } = require("./index.js");

describe("sumar", () =>{
    it("comprobar suma", () =>{
    

        const resultado = sumar(num1,num2);

        expect(sumar(3,2)).toEqual(5);
    })
})