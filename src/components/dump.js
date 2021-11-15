// if (clicked === index) {
// 	return setClicked(null);
// }
// setClicked(index);

{
	/* <Ul>
										{item.contents.map((text, index) =>
											selectedPlan[index] ? (
												<li key={text} onClick={() => checkItem(index)}>
													<img src={img2} alt="" />
													{text}
												</li>
											) : (
												<li key={text} onClick={() => checkItem(index)}>
													<img src={img} alt="" />
													{text}
												</li>
											)
										)}
									</Ul> */
}

// <li key={key}>
// 	<span>{item.title}</span>
// 	<input
// 		type="checkbox"
// 		checked={isChecked}
// 		onChange={() =>
// 			handleCheckboxToggle(index, isChecked)
// 		}
// 	/>
// </li>

// const [selectedPlan, setSelectedPlan] = useState([
// 	{ id: 0, selected: false },
// 	{ id: 1, selected: false },
// 	{ id: 2, selected: false },
// ]);

// function checkItem(index) {
// 	let select = [...selectedPlan];
// 	select.map((item) => {
// 		if (index === item.id) {
// 			console.log((item.selected = !item.selected));
// 			return (item.selected = !item.selected);
// 		}
// 		return true;
// 	});
// 	console.log(select[index]);
// 	select[index] = false;
// 	setSelectedPlan(select);
// }

import { useState } from "react";
import "./App.css";

const DATA = [
	{
		name: "one",
		items: [
			{
				name: "text 1",
			},
			{
				name: "text 2",
			},
			{
				name: "text 3",
			},
		],
	},
	{
		name: "two",
		items: [
			{
				name: "text 6",
			},
			{
				name: "text 7",
			},
			{
				name: "text 8",
			},
		],
	},
	{
		name: "three",
		items: [],
	},
];

function App() {
	const [show, setShow] = useState(null);
	const [selected, setSelected] = useState([]);

	const handleToggleShow = (index) => {
		if (index === show) {
			return setShow(null);
		}

		setShow(index);
	};

	const handleCheckboxToggle = (index, isChecked) => {
		if (isChecked) {
			return setSelected(selected.filter((itemIndex) => itemIndex !== index));
		}

		return setSelected([...selected, index]);
	};

	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			{DATA.map(({ name, id, items }, index) => {
				const number = index + 1;
				return (
					<>
						<button onClick={() => handleToggleShow(number)}>
							{number}. {name}
						</button>
						{number === show && (
							<ul>
								{items.map(({ name }, index) => {
									const matrix = `${number}-${index}`;
									const isChecked = selected.includes(matrix);

									return (
										<li style={{ display: "flex" }} key={index}>
											<input
												type="checkbox"
												checked={isChecked}
												onClick={() => handleCheckboxToggle(matrix, isChecked)}
											/>
											<p>{name}</p>
										</li>
									);
								})}
							</ul>
						)}
					</>
				);
			})}
		</div>
	);
}

export default App;
