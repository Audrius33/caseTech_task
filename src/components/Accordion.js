import useLocalStorage from "../hooks/useLocalStorage";
import { data } from "./CHECK_LIST_ITEMS";
import {
	AccordionSection,
	Container,
	Wrap,
	Dropdown,
	Ul,
} from "./Accordion.styled";
import Path from "../assets/svg/Path.svg";
import Radio from "../assets/svg/Radio.svg";

const Accordion = () => {
	const [clicked, setClicked] = useLocalStorage("clicked", null);
	const [checked, setChecked] = useLocalStorage("checked", []);

	const toggle = (index) => {
		clicked === index ? setClicked(null) : setClicked(index);
	};

	const handleCheckboxToggle = (index, isChecked) => {
		if (isChecked) {
			return setChecked((prevState) =>
				prevState.filter((itemIndex) => itemIndex !== index)
			);
		}

		return setChecked((prevState) => [...prevState, index]);
	};

	return (
		<AccordionSection>
			<Container>
				<h1>CCT Lab Process</h1>
				{data.map((item, index) => {
					const number = index + 1;
					return (
						<>
							<Wrap item={item} key={index} onClick={() => toggle(number)}>
								<p>{item.title_number}</p>
								<h5>{item.title}</h5>
								<span></span>
							</Wrap>
							{clicked === number ? (
								<Dropdown>
									<Ul>
										{item.contents.map((item, index) => {
											const matrix = `${number}-${index}`;
											const isChecked = checked.includes(matrix);
											return isChecked ? (
												<li
													key={index}
													checked={isChecked}
													onClick={() =>
														handleCheckboxToggle(matrix, isChecked)
													}
												>
													<img src={Path} alt="" />
													<span>{item.title}</span>
												</li>
											) : (
												<li
													key={index}
													checked={isChecked}
													onClick={() =>
														handleCheckboxToggle(matrix, isChecked)
													}
												>
													<img src={Radio} alt="" />
													<span>{item.title}</span>
												</li>
											);
										})}
									</Ul>
								</Dropdown>
							) : null}
						</>
					);
				})}
			</Container>
		</AccordionSection>
	);
};

export default Accordion;
