import styled from "styled-components";

export const AccordionSection = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: column;
`;

export const Container = styled.div`
	width: 1400px;
	display: flex;
	flex-direction: column;

	h1 {
		font-family: Manrope;
		font-style: normal;
		font-weight: bold;
		font-size: 64px;
		line-height: 87px;
		margin: 0 0 0 5px;
	}
`;

export const Title = styled.div`
	display: flex;
	justify-contenct: space-between;
	align-items: center;
    text-align: center;
	cursor: pointer;
    width 1360px;
    height: 85.72px;
    margin: 10px;
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
        left: 110px;
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

export const List = styled.ul`
	list-style-type: none;
`;

export const ListItem = styled.li`
    font-family: Roboto; 
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin: 5px 0;
    color: #0E2A35  
    display: flex;
    flex-direction: column;
    align-items: flex-start;
           
    img {
        margin: 0 20px -5px 15px;
    }
`;
