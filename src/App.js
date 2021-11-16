import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accordion from "./components/Accordion";

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Accordion />} />
			</Routes>
		</Router>
	);
}

export default App;
