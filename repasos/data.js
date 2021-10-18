const faker = require('faker');

class Data {
  constructor(){
    this.products = new Array();
  }
  createProduct(count){
    for (var i = 0; i < count; i++) {
      this.products.push({
        id: i + 1,
        nombre: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        description: faker.commerce.productDescription(),
        image: faker.image.imageUrl()
      })
    }
  }
}

module.exports = Data;
