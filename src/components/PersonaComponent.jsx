import { useEffect, useState } from "react";
import {
	createPersonas,
	getPersonaById,
	updatePersona,
} from "../services/PersonaServices";
import { useNavigate, useParams } from "react-router-dom";

const PersonaComponent = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	const navigator = useNavigate();
	const { id } = useParams();

	function savePersona(e) {
		e.preventDefault();
		const persona = { firstName, lastName };
		if (id) {
			updatePersona(id, persona)
				.then((response) => console.log(response.data))
				.catch((error) => console.log(error));
			navigator("/");
		} else {
			createPersonas(persona)
				.then((response) => console.log(response.data))
				.catch((error) => console.log(error));
			navigator("/");
		}
	}

	function pageTitle() {
		if (id) {
			return <h2 className="text-center">Update Persona</h2>;
		} else {
			return <h2 className="text-center">Add Persona</h2>;
		}
	}

	useEffect(() => {
		if (id) {
			getPersonaById(id)
				.then((response) => {
					setFirstName(response.data.firstName);
					setLastName(response.data.lastName);
				})
				.catch((error) => console.log(error));
		}
	}, [id]);

	return (
		<div className="container mt-2">
			<div className="row">
				<div className="card col-md-6 offset-md-3">
					{pageTitle()}
					<div className="card-body">
						<form>
							<div className="form-group mb-2">
								<label className="form-label">First name</label>
								<input
									type="text"
									name="firstName"
									value={firstName}
									className="form-control"
									onChange={(e) => setFirstName(e.target.value)}
								></input>
							</div>
							<div className="form-group mb-2">
								<label className="form-label">Last name</label>
								<input
									type="text"
									name="lastName"
									value={lastName}
									className="form-control"
									onChange={(e) => setLastName(e.target.value)}
								></input>
							</div>

							<button
								className="btn btn-primary"
								onClick={savePersona}
							>
								Add Persona
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PersonaComponent;
