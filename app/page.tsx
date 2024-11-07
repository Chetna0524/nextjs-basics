import { AddProduct } from "./components/AddProduct";
import ProductList from "./components/ProductList";

export default async function Home() {
	return (
		<>
			<div className="container mx-auto">
				<div className="form-box my-5">
					<AddProduct />
					<ProductList />
				</div>
			</div>
		</>
	);
}
