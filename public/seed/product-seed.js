const Product = require('../../App/models/product')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/db_project')

var products = [
    new Product({
        name: 'Macbook Air',
        image: 'assets/images/shop0.jpg',
        description: 'Light performence',
        price: 1000,
        discount: 15
    }),
    new Product({
        name: 'Macbook Air 2',
        image: 'assets/images/shop1.jpg',
        description: 'Light performence light weight',
        price: 1150,
        discount: 15
    }),
    new Product({
        name: 'Macbook Retina',
        image: 'assets/images/shop2.jpg',
        description: 'Medium performence with Retina screen',
        price: 1300,
        discount: 10
    }),
    new Product({
        name: 'Macbook Retina 2',
        image: 'assets/images/shop3.jpg',
        description: 'Medium performence with Retina screen',
        price: 1250,
        discount: 10
    }),
    new Product({
        name: 'Macbook Pro Retina 13 inches',
        image: 'assets/images/shop4.jpg',
        description: 'Good performence can use for coding',
        price: 1600,
        discount: 15
    }),
    new Product({
        name: 'Macbook Pro Retina 13 inches 2',
        image: 'assets/images/shop5.jpg',
        description: 'Good performence can use for coding',
        price: 1700,
        discount: 15
    }),
    new Product({
        name: 'Macbook Pro Retina 15 inches',
        image: 'assets/images/shop6.jpg',
        description: 'Hight performence can use for coding and rendering',
        price: 2000,
        discount: 15
    }),
    new Product({
        name: 'Macbook Pro Retina 15 inches',
        image: 'assets/images/shop7.jpg',
        description: 'Hight performence can use for coding and rendering',
        price: 2200,
        discount: 15
    })
]

products.forEach(item => {
    item.save()
},()=> mongoose.disconnect())