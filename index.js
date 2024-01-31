import { get } from "mongoose"
import Product from "./Product.js"

async function addProduct(product) {
  const newProduct = await Product.create(product)
  console.log('Product created')
}

async function getProduct(filter) {
  const result = await Product.find(filter)
  console.log(result)
}

async function updateProduct(filter, updatedData) {
  await Product.updateOne(filter, updatedData)
  console.log("Product updated")
}

async function deleteProduct(filter) {
  await Product.deleteOne(filter)
  console.log('Product deleted')
}
// await addProduct({
//   name: 'Notebook',
//   price: 3
// })
// await updateProduct({name: 'Notebook'}, {price: 9})
await deleteProduct({name: 'Notebook'})

await getProduct()