import React from "react";
import { getProducts } from "@/app/products/actions";

type Product = {
	id?: number;
	product: string;
	price: string;
};

const ProductList = async () => {
	const products: Product[] = await getProducts();

	return (
		<>
			<ul className="product-list  mt-5">
				{products.length > 0 &&
					products.map((product) => (
						<li key={product.id}>
							<h2>{product.product}</h2>
							<p>${product.price}</p>
						</li>
					))}
			</ul>
		</>
	);
};

export default ProductList;
