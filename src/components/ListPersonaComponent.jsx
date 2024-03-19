import { useEffect } from "react";
import { useState } from "react";
import DataTable from "react-data-table-component";
import {
	deletePersonaService,
	listPersonas,
} from "../services/PersonaServices";
import { useNavigate } from "react-router-dom";

const ListPersonaComponent = () => {
	const [personas, setPersonas] = useState([]);
	const navigator = useNavigate();

	const columns = [
		{
			name: "Id",
			selector: (row) => row.id,
		},
		{
			name: "First Name",
			selector: (row) => row.firstName,
		},
		{
			name: "Last Name",
			selector: (row) => row.lastName,
		},
		{
			name: "Actions",
			cell: (row) => (
				<>
					<button
						className="btn btn-info m-2"
						onClick={() => updatePersona(row.id)}
					>
						Update
					</button>
					<button
						className="btn btn-danger"
						onClick={() => deletePersona(row.id)}
					>
						Delete
					</button>
				</>
			),
		},
	];

	useEffect(() => {
		getAllPersonas();
	}, []);

	function getAllPersonas() {
		listPersonas()
			.then((response) => {
				setPersonas(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	function updatePersona(id) {
		navigator(`/edit-persona/${id}`);
	}

	function deletePersona(id) {
		deletePersonaService(id)
			.then(() => getAllPersonas())
			.catch((error) => console.log(error));
	}

	return (
		<>
			<div className="container m-4">
				<h2 className="text-center">Persona List</h2>
				<DataTable
					columns={columns}
					data={personas}
					direction="auto"
					fixedHeaderScrollHeight="300px"
					highlightOnHover
					pagination
					responsive
					striped
					subHeaderAlign="right"
					subHeaderWrap
				/>
			</div>
		</>
	);
};

export default ListPersonaComponent;
