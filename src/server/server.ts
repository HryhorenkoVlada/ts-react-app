import { createServer, Model, Factory } from "miragejs"
import { faker } from '@faker-js/faker';

export const createMirageServer = ({ environment = 'test' }) => {
  createServer({
    environment,
    models: {
      product: Model
    },
    factories: {
      product: Factory.extend({
        name: faker.commerce.product(),
        price: faker.commerce.price(),
        product_material: faker.commerce.productMaterial(),
        manufacturer: faker.commerce.department(),
        year: faker.date.past().getFullYear(),
        seller: faker.company.name(),
        labels: [faker.commerce.productAdjective(), faker.commerce.productAdjective(), faker.commerce.productAdjective()] as string[],
        description: faker.commerce.productDescription(),
        color: faker.color.human(),
        image: faker.image.technics()
      }),
    },
    seeds(server) {
      server.createList('product', 10)


    },

    routes() {
      this.namespace = 'api'

      this.get('/products', (schema: any) => {
        return schema.products.all()
      })

      this.get('/products/:id', (schema: any, request) => {
        let id = request.params.id

        return schema.products.find(id)
      })
    },

  })
}


