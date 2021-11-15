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
