 const products = [{name: 'laptops', price: 300, stock: 10, inStock: true},
    {name: 'phone', price: 100, stock: 20, inStock: true},
    {name: 'smartWatches', price: 80, stock: 0, inStock: false}
];
//filter
const availableProducts = products.filter((products)=>{
return products.inStock
})  
// map
const productDetails = products.map(product=> ({ 
name: product.name,
price: product.price
}));
//reduce
const totalValue = products.reduce((total, product)=> {
    return total + product
})
console.log(totalValue)
