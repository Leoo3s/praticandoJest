// describe("Terceiro Teste", () => {
//     const sum = (a, b) => {
//       return a + b;
//     };
  
//     it("Quando passar 2 e 2 como parametros para a função sum deve retornar quatro", () => {
//       const resultSum = sum(2 , 3)
//       expect(resultSum).toBe(5)
//     });
//   });
  
//   it("Deve comparar arrays", () =>{
//       expect([1, 3, 2]).toEqual(expect.arrayContaining([1, 2, 3]));
//   });
  
//   it("Deve retornar números pares", () => {


//     function retornePares(array){
//       return array.filter(x => x%2 == 0)
//    }

// const num = [1, 2, 3, 4, 5, 6, 7, 8]
// const par = [2, 4, 6, 8]
// const impar = [1, 3, 5, 7]
// const array = retornePares



//     expect(array(num)).toEqual(par)
//   });

//   it("Deve retornar números impares", () => {


//       function retorneImpares(array){
//         return array.filter(x => x%2 == 1)
//      }
  
//   const num = [1, 2, 3, 4, 5, 6, 7, 8]
//   const impar = [1, 3, 5, 7]
//   const array = retorneImpares
  
  
  
//       expect(array(num)).toEqual(impar)
  
//   });

  it("Seja filtrados apenas o que a propriedade age seja maior que 18", () => {
    
    function over18(valor) {
      if (valor.age >= 18) {
          return valor.name;}

    const array2 =  [{name: "John Doe", age: 22}, {name: "Doe Jhon", age: 17}]
    const output = [{name: "John Doe", age: 22}]

    expect(valor(array2)).toBe(output)

  }});

