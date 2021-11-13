import styled from "styled-components";
import img2 from "../assets/svg/Path.svg";

export const AccordionSection = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	width: 1400px;
	position: relative;
	height: 722px;
`;

export const Container = styled.div`
	position: absolute;
	width: 1360px;
	display: flex;
	flex-direction: column;
`;

export const Wrap = styled.div`
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
  
	h5 {
        font-family: Manrope; 
        font-style: normal;
        font-weight: bold;
        position: absolute;
        left: 116px;
        color: #0E2A35;
        line-height: 24.59px;
        font-size: 18px;
        
 	}
    p {
       font-family: Manrope; 
       font-style: normal;
       font-weight: bold;
       line-height: 49px;
       font-size: 36px; 
       width: 50px;
       position absolute;
       left: 30px; 
       background: linear-gradient(180deg, #00A9A7 0%, #00BA89 100%);
       color: #FFFFFF
    } 
`;

export const Dropdown = styled.div`
    display: flex;
    padding 0 0 0 20px;
            
     ul {
        list-style-type: none;
                                  
            li {
                list-style-type: none;
            font-family: Roboto; 
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            margin: 20px 0;
            color: #0E2A35  
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            img {
                margin: 0 20px 0 0;
                backgroundImage: "url(${img2})"
            }
        }
    }
`;

export const Ul = styled.ul`
	overflow: hidden;
	transition: max-height 0.5s ease;
`;
