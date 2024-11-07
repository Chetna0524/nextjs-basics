"use server";

import { revalidatePath } from "next/cache";

export const getProducts = async () => {
	const res = await fetch(
		"https://6729bb756d5fa4901b6e1f1d.mockapi.io/products",
		{
			next: { revalidate: 30 },
		}
	);

	return res.json();
};

export const addProduct = async (formData: FormData) => {
	console.log("formdata", formData);
	const product = formData.get("product");
	const price = formData.get("price");

	try {
		const res = await fetch(
			"https://6729bb756d5fa4901b6e1f1d.mockapi.io/products",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ product, price }),
			}
		);
		revalidatePath("/");
		console.log("res", res);
	} catch (error) {
		console.log(error);
	}
};
