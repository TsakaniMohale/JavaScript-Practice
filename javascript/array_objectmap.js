const products = [{name: 'laptops', price: 300, stock: 10, inStock: true},
    {name: 'phone', price: 100, stock: 20, inStock: true},
    {name: 'smartWatches', price: 80, stock: 0, inStock: false}
];

const productStock = products.map(product=> ({ 
    name: product.name,
    stock: product.stock
    }));

    console.log(productStock)