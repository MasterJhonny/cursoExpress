const faker = require('faker');
class ProductsService {
  constructor(){
    this.products = new Array();
    this.generate();
  }

  generate() {
    const count = 100;
    for(let i = 0; i< count; i++) {
      this.products.push(
        {
          id: faker.datatype.uuid(),
          name: faker.commerce.productName(),
          price: parseInt(faker.commerce.price()),
          image: faker.image.imageUrl()
        }
      )
    }
  }

  create() {

  }

  find() {
    return this.products;
  }

  findOne(id){
    return this.products.find(item => item.id === id);
  }

  update() {

  }
  delete() {

  }
}

// const service = new ProductsService()
// console.log(service.find())
module.exports = ProductsService;
