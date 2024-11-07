import React from "react";
import { addProduct } from "../products/actions";
import ButtonSubmit from "./ButtonSubmit";

export const AddProduct = () => {
	return (
		<>
			<h1 className="text-center font-bold text-2xl">Add Product</h1>
			<form
				action={addProduct}
				className="flex flex-col gap-4 max-w-md mx-auto mt-3"
			>
				<input
					name="product"
					type="text"
					placeholder="Name..."
					className="border rounded-md p-2 my-1"
				/>
				<input
					name="price"
					type="text"
					placeholder="Price... "
					className="border rounded-md p-2"
				/>
				<ButtonSubmit>Add</ButtonSubmit>
			</form>
		</>
	);
};
