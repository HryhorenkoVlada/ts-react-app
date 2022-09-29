import { createServer, Model, Factory, Response } from "miragejs"
import { faker } from '@faker-js/faker';

export const createMirageServer = ({ environment = 'test' }) => {
  createServer({
    environment,
    models: {
      product: Model
    },
    factories: {
      product: Factory.extend({
        name(i) {
          return `${faker.commerce.product()} ${i + 1}`
        },
        price() { return faker.commerce.price() },
        product_material: faker.commerce.productMaterial(),
        manufacturer: faker.commerce.department(),
        year: faker.date.past().getFullYear(),
        seller: faker.company.name(),
        labels: [faker.commerce.productAdjective(), faker.commerce.productAdjective(), faker.commerce.productAdjective()] as string[],
        description: faker.commerce.productDescription(),
        color: faker.color.human(),
        image() { return faker.image.technics() },
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
        const foundProduct = schema.products.find(id)
        debugger
        if (foundProduct) {
          return foundProduct
        } else {
          debugger
          return new Response(500, {}, { product: null })
        }
      })

      this.post('/products', (schema: any, request) => {
        let attrs = JSON.parse(request.requestBody)

        return schema.products.create(attrs)
      })

      this.put('/products/:id', (schema: any, request) => {
        let id: string = request.params.id
        const attrs = JSON.parse(request.requestBody)

        const updatedProduct = schema.products.find(id)
        updatedProduct.update(attrs)

        return updatedProduct
      })
    },

  })
}


