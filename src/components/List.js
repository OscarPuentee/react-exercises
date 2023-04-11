//import { useState } from 'react';
import '../styles/list.css';

export default function List({items, editIngredient}) {
	const itemsList = items.map((item) => {
		if (item.qty === 0) {
			return null;
		} else {
			return (
				<tr key={item.id}>
					<td> {item.name} </td>
					<td> {item.qty + ' ' + item.unit} </td>
					<td> {item.category} </td>
					<td>
						<button onClick={() => editIngredient(item)}>Editar</button>
					</td>
				</tr>
			);
		}
	});

	const unavailableItems = items.map((item) => {
		if (item.qty !== 0) {
			return null;
		} else {
			return (
				<tr key={item.id}>
					<td> {item.name} </td>
					<td> {item.qty + ' ' + item.unit} </td>
					<td> {item.category} </td>
					<td>
						<button onClick={() => editIngredient(item)}>Editar</button>
					</td>
				</tr>
			);
		}
	});

	return (
		<div className="tablesContainer">
			<table>
				<thead>
					<tr>
						<th colSpan="4">Lista de artículos</th>
					</tr>
				</thead>
				<tbody>
					{itemsList}
				</tbody>
			</table>
			{ unavailableItems.length > 0 &&
				<table>
					<thead>
						<tr>
							<th colSpan="4">No disponibles</th>
						</tr>
					</thead>
					<tbody>
						{unavailableItems}
					</tbody>
				</table>
			}
		</div>
	);
}