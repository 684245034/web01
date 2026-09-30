import { ProductDAO } from './ProductDAO.ts';
import { OrderDAO } from './OrderDAO.ts';

const productDAO = new ProductDAO();
const orderDAO = new OrderDAO();

console.log('=== Adding Initial Inventory ===');

const product = productDAO.addProduct('Keyboard', 1500, 10);

console.log(
    `Added Product: ${product.getName()} (Price: $${product.getPrice()}, Stock: ${product.getStock()})`
);

console.log('\n=== Processing Order ===');

console.log(`Ordering 3 units of ${product.getName()}...`);

try {
    const order = orderDAO.createOrder(product.getName(), 3);

    console.log(
        `[SUCCESS] Order Created! Total Price: $${order.getTotalPrice()}`
    );
} catch (error) {
    console.log(`[ERROR] ${(error as Error).message}`);
}

console.log('\n=== Updated Product Status ===');

const updatedProduct = productDAO.findProductById(product.getId());

if (updatedProduct) {
    console.log(
        `Product: ${updatedProduct.getName()} | Remaining Stock: ${updatedProduct.getStock()}`
    );
}