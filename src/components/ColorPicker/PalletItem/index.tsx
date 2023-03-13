import React from "react";
import styled from "styled-components";

interface Props {
	color: string;
	selectColor: (selectColor: string) => void;
}
export const PalletItem = ({ color, selectColor }: Props) => {
	const PalletSpan = styled.span`
		height: 30px;
		width: 30px;
		background-color: ${color};
		border: 1px transparent;
		border-radius: 50%;
		border: 0.8px solid;
		box-shadow: 2px 1px 2px 1px lightgrey;
		cursor: pointer;
	`;
	return <PalletSpan onClick={() => selectColor(color)} />;
};
