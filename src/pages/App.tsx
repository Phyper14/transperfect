import React from "react";
import styled from "styled-components";
import ColorPicker from "../components/ColorPicker";
import { useAppSelector } from "../reducer/hooks/hooks";
import "./App.scss";

function App() {
	const primaryColor = useAppSelector(
		(state) => state.colorStorage.primaryColor
	);

	const Wrapper = styled.div`
		background-color: ${String(primaryColor)};
	`;

	return (
		<Wrapper>
			<ColorPicker>Choose the Color!</ColorPicker>
		</Wrapper>
	);
}

export default App;
