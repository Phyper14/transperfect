import React, { useState } from "react";
import style from "./ColorPicker.module.scss";
import {
	Container,
	ContainerContent,
	ContainerHeader,
} from "../../styles/GlobalStyle";
import { useAppDispatch, useAppSelector } from "../../reducer/hooks/hooks";
import colorsSlice from "../../reducer/colors";
import { PalletItem } from "./PalletItem";

interface Props {
	children?: React.ReactNode;
}

function ColorPicker({ children }: Props) {
	const dispatch = useAppDispatch();
	const currentColor = useAppSelector(
		(state) => state.colorStorage.primaryColor
	);
	const colors = useAppSelector((state) => state.colorStorage.colors);

	const [hexColor, setHexColor] = useState<string>(currentColor);
	const [error, setError] = useState<boolean>(false);

	const handleHexInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		const mask = /^#([0-9a-fA-F]{6})$/;
		if (mask.test(value)) {
			setError(false);
		} else {
			setError(true);
		}
		setHexColor(value);
	};

	const handleChangePrimaryColor = () => {
		if (!error) {
			dispatch(colorsSlice.actions.setPrimaryColor(hexColor));
			dispatch(colorsSlice.actions.addColor(hexColor));
		}
	};

	const handlePallet = (selectColor: string) => {
		dispatch(colorsSlice.actions.setPrimaryColor(selectColor));
	};
	return (
		<Container className={style.card}>
			<ContainerHeader>
				<h2>{children}</h2>
			</ContainerHeader>
			<ContainerContent>
				<div className={style.hexContainer}>
					<div className={style.hexInput}>
						<label htmlFor="hex">HEX</label>
						<input
							id="hex"
							type="text"
							value={hexColor}
							onChange={(e) => handleHexInput(e)}
							onBlur={() => handleChangePrimaryColor()}
							onKeyDown={(e) =>
								e.key === "Enter" && handleChangePrimaryColor()
							}
							maxLength={7}
						/>
					</div>
					{error && (
						<span className="error-message">
							Please enter a valid color code in hexadecimal
							format.
						</span>
					)}
				</div>
				<input
					id="inputColor"
					type="color"
					className={style.swatch}
					value={hexColor}
					onChange={(e) => {
						handleHexInput(e);
					}}
					onBlur={() => handleChangePrimaryColor()}
				/>
				<div className={style.palletContainer}>
					{colors.map((color) => (
						<PalletItem selectColor={handlePallet} color={color} />
					))}
				</div>
			</ContainerContent>
		</Container>
	);
}

export default ColorPicker;
