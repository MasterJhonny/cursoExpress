const faker = require('faker');

class UsersService {
  constructor(){
    this.users = new Array();
    this.generate();
  }
  generate(){
    const count = 150;
    for (let i = 0; i < count; i++) {
      this.users.push(
        {
          id: faker.datatype.uuid(),
          nombre: faker.name.firstName(),
          address: faker.address.cityName(),
          avatar: faker.image.avatar()
        }
      )
    }
  }

  create (data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.users.push(newUser);
    return newUser;
  }

  find(){
    return this.users;
  }

  findOne(id){
    return this.users.find(item => item.id === id);
  }

  update(id, changes) {
    const index = this.users.findIndex(item => item.id === id);
    console.log(this.users[index]);
    if(index === -1) throw new Error('Ups, Not Found');
    const updateUser = {
      ...this.users[index],
      ...changes
    }
    this.users[index] = updateUser;
    return updateUser;
  }

  delete(id){
    const index = this.users.findIndex(item => item.id === id);
    if(index === -1) throw new Error('Ups, Not Found');
    this.users.splice(index, 1);
    return {
      delete: true
    }
  }
}



module.exports = UsersService;
