import useLocalStorage from "../hooks/useLocalStorage";
import { Data } from "./CHECK_LIST_ITEMS";
import {
	AccordionSection,
	Container,
	Wrap,
	Dropdown,
	Ul,
} from "./Accordion.styled";
import img from "../assets/svg/Ellipse.svg";
import img2 from "../assets/svg/Path.svg";

const Accordion = () => {
	const [clicked, setClicked] = useLocalStorage("clicked", false);
	const [checked, setChecked] = useLocalStorage("checked", []);

	const toggle = (index) => {
		if (clicked === index) {
			return setClicked(null);
		}
		setClicked(index);
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
				{Data.map((item, index) => {
					const key = `${item}-${index}`;
					return (
						<>
							<Wrap key={key} onClick={() => toggle(index)}>
								<p>{item.number}</p>
								<h5>{item.title}</h5>
								<span></span>
							</Wrap>
							{clicked === index ? (
								<Dropdown>
									<Ul>
										{item.contents.map((item, index) => {
											const key = `${item}-${index}`;
											const isChecked = checked.includes(index);
											return isChecked ? (
												<li
													key={key}
													checked={isChecked}
													onClick={() => handleCheckboxToggle(index, isChecked)}
												>
													<img src={img2} alt="" />
													<span>{item.title}</span>
												</li>
											) : (
												<li
													key={key}
													checked={isChecked}
													onClick={() => handleCheckboxToggle(index, isChecked)}
												>
													<img src={img} alt="" />
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
