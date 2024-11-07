"use client";

import React, { ReactNode } from "react";

type ButtonProps = {
	children: ReactNode;
};

const ButtonSubmit = ({ children }: ButtonProps) => {
	return <button type="submit">{children}</button>;
};

export default ButtonSubmit;
