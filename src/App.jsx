import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListPersonaComponent from "./components/ListPersonaComponent";
import HeaderComponent from "./components/HeaderComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonaComponent from "./components/PersonaComponent";

function App() {
	return (
		<>
			<BrowserRouter>
				<HeaderComponent />
				<Routes>
					<Route
						path="/"
						element={<ListPersonaComponent />}
					/>
					<Route
						path="/add-persona"
						element={<PersonaComponent />}
					/>
					<Route
						path="/edit-persona/:id"
						element={<PersonaComponent />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
