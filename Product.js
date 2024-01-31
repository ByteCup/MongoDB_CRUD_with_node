import mongoose from 'mongoose'

mongoose.connect('mongodb://127.0.0.1:27017/productsDB')

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: Number
})

const Product = mongoose.model('Product', productSchema)

export default Product;
