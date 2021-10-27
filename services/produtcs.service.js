const faker = require('faker');
const boom = require('@hapi/boom');

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
          image: faker.image.imageUrl(),
          isBlocked: faker.datatype.boolean()
        }
      )
    }
  }

  async create (data){
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  find(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 100)
    })
  }

  async findOne(id) {
    const product = this.products.find(item => item.id === id);
    if (!product) throw boom.notFound('Product, Not Found');
    if(product.isBlocked) {
      throw boom.conflict('Product, id Blocked');
    }
    return product;
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1) throw boom.notFound('Products, Not Found');
    const updateProduct = {
      ...this.products[index],
      ...changes
    }
    this.products[index] = updateProduct;
    return updateProduct;
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1) throw boom.notFound('Products, Not Found');
    this.products.splice(index, 1);
    return {
      delete: true
    }
  }
}

module.exports = ProductsService;
