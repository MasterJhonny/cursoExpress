const faker = require('faker');
const boom = require('@hapi/boom');

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
          name: faker.name.firstName(),
          address: faker.address.cityName(),
          avatar: faker.image.avatar()
        }
      )
    }
  }

  async create (data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.users.push(newUser);
    return newUser;
  }

  find(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.users)
      }, 100)
    })
  }

  async findOne(id){
    return this.users.find(item => item.id === id);
  }

  async update(id, changes) {
    const index = this.users.findIndex(item => item.id === id);
    console.log(this.users[index]);
    if(index === -1) throw boom.notFound('No Found!');
    const updateUser = {
      ...this.users[index],
      ...changes
    }
    this.users[index] = updateUser;
    return updateUser;
  }

  async delete(id){
    const index = this.users.findIndex(item => item.id === id);
    if(index === -1) throw boom.notFound('No Found!');
    this.users.splice(index, 1);
    return {
      delete: true
    }
  }
}



module.exports = UsersService;
