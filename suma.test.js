const { sumar } = require("./index.js");

describe("sumar", () =>{
    it("comprobar suma", () =>{
        const num1 = 3;
        const num2 = 2;

        const reslutado = sumar(num1,num2);

        expect(resultado).toEqual(5);
    })
})