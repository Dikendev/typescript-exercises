//E-commerce System - Product and ShoppingCart

class Product {
	constructor(public id: number, public name: string, public price: number) {}
}

interface CartItem {
	product: Product;
	quantity: number;
}

class ShoppingCart {
	private items: CartItem[] = [];

	addItem(product: Product, quantity: number): void {
		this.items.push({ product, quantity });
	}

	getTotal(): number {
		return this.items.reduce(
			(total, item) => total + item.product.price * item.quantity,
			0
		);
	}
}

const notebook = new Product(1, "Notebook", 100);
const phone = new Product(2, "Iphone", 3000);

const cart = new ShoppingCart();
cart.addItem(notebook, 2);
cart.addItem(phone, 3);

console.log("Total", cart.getTotal());
