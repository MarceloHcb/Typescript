type User = {
    id: number,
    name: string,
    address: string,
    addressNumber: number,
  };
  
  const UserDB = {
    findById: (userId: number) => ({
      id: userId,
      name: 'Silvana',
    }),
  };
  
  function getUser(userId: number): unknown {
    const user = UserDB.findById(userId);
    user.address = 'Rua São Camilo'  // Error: Property 'address' does not exist on type '{ id: number; name: string; }'.
    return user; // Error: Type '{ id: number; name: string; }' is missing the following properties from type 'User': address, addressNumber
  }