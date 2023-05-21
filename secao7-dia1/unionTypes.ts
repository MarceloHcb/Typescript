function printId1(id: number | string) {
    console.log(`Your ID is: ${id}`);
  }
  
  printId1(101);
  printId1("202");

  function printId2(id: number | string) {
    console.log(id.toUpperCase());
  }
  
  printId2(101);

  function printId3(id: number | string) {
    if (typeof id === "string") {
      return console.log(id.toUpperCase());
    }
    return console.log(id);
  }
  
  printId3(101);

  //Type Aliases

  type PersonalInfo = {
    name: string;
    birthYear: number;
  };

  function printPersonalInfo(data: PersonalInfo) {
    console.log(`${data.name} was born in ${data.birthYear}.`);
  }
  
  printPersonalInfo({ name: 'Rogerinho', birthYear: 1978});

  type PersonalInfo2 = {
    name: string;
    birthYear: number | string;
  };

  type ID = number | string;

  const person = {
    fistName: 'Frodo',
    lastName: 'Baggins',
    age: 52,
  }
  
  console.log(typeof person.fistName); // "string"

  // const person = {
//   fistName: 'Frodo',
//   lastName: 'Baggins',
//   age: 52,
// }

function getFullName(firstName: string, lastName: string): string {
  return firstName + ' ' + lastName;
}

console.log(getFullName(person.fistName, person.lastName)); // "Frodo Baggings"