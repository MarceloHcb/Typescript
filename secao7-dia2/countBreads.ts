function countBreads(breads: string[]): number {
    return breads.length;
  }
  
  const myBreads = ['Pão de Sal', 'Pão de Centeio', 'Pão de banana'];
  
  console.log(countBreads(myBreads));

  function countBreads2(breads: string[]): number {
    return breads.length;
  }
  
  type CommonBread = {
    name: string,
    allergens: string[]
  };
  
  const paoDeSal: CommonBread = {
    name: 'Pão de sal',
    allergens: ['Gluten'],
  };
  
  const paoDoce: CommonBread = {
    name: 'Pão doce',
    allergens: ['Gluten'],
  };
  
  const myBreads2 = [paoDeSal, paoDoce];
  
  // Erro de tipagem! "Argument of type 'CommonBread[]' is not assignable to parameter of type 'string[]'. Type 'CommonBread' is not assignable to type 'string'"
  console.log(countBreads2(myBreads2));