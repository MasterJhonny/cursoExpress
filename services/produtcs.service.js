const faker = require('faker');
class ProductsService {
  constructor(){
    this.products = new Array();
    this.generate();
  }
  generate() {
    const limit = 80;
    for (let i = 0; i < limit; i++) {
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

  create (data){
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  find(){
    return this.products;
  }

  findOne(id) {
    return this.products.find(item => item.id === id);
  }

  update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1) throw new Error("Ups, Product not found");
    const updateProduct = {
      ...this.products[index],
      ...changes
    }
    this.products[index] = updateProduct;
    return updateProduct;
  }

  delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1) throw new Error("Ups, Product not found");
    this.products.splice(index, 1);
    return {
      delete: true
    }
  }
}

module.exports = ProductsService;
