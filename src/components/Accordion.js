import React, { useState } from "react";
import { Data } from "./LIST_ITEMS";
import styled from "styled-components";

const AccordionSection = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	width: 1400px;
	position: relative;
	height: 722px;
`;

const Container = styled.div`
	position: absolute;
	width: 1360px;
	display: flex;
	flex-direction: column;
`;

const Wrap = styled.div`
	    
	display: flex;
	justify-contenct: space-between;
	align-items: center;
    text-align: center;
	cursor: pointer;
    width 1360px;
    height: 85.72px;
    margin: 20px;
    position: relative;
    box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
    

    span {
        position: absolute;
        width: 200px;
        text-decoration: underline;
        border-bottom: 2px solid #00ADAA;
        bottom: 0%;
        }
  
	h1 {
        color: #0E2A35;
		padding: 2rem;
		font-size: 2rem;
        position relative;
 	}
`;

const Dropdown = styled.div`

    display: flex;
    padding 0 0 0 40px;
    
     ul {
         display: flex;
         flex-direction: column;
                
         li {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
           
         }
    }
	
`;

const Accordion = () => {
	const [clicked, setClicked] = useState(false);
	const [expanded, setExpanded] = useState("100px");

	const toggle = (index) => {
		if (clicked === index) {
			return setClicked(null);
		}
		setClicked(index);
	};

	return (
		<AccordionSection>
			<Container>
				{Data.map((item, index) => {
					return (
						<>
							<Wrap key={item} onClick={() => toggle(index)}>
								<h1>{item.title}</h1>
								<span></span>
							</Wrap>
							{clicked === index ? (
								<Dropdown>
									<ul>
										{item.contents.map((text) => {
											return <li key={text}>{text}</li>;
										})}
									</ul>
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
