const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send('Hello from express')
})

app.get('/about', (req,res) => {
    res.send('this is the about page')
})


app.get('/products', (req,res)=> {
    res.json([
        {id: 1, name: 'laptop', price:1299},
        {id: 2, name: 'Mouse', price:69},

    ])
})

app.get('/products/:id', (req,res)=> {
    const id =  Number(req.params.id)
    const products = [
        {id:1 , name: 'laptop', price:1299},
        {id:2 , name:'mouse',price:50}
    ]

    const requestedProduct = products.find((product)=> product.id === id )
    res.json(requestedProduct)
})


app.get('/message', (req,res)=> {
    res.json({message: "Hello from your express back-end "})
})

app.listen(3000, () => {
    console.log('The server is running')
})  