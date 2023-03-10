//import { useState } from 'react';
import '../styles/list.css';

export default function List(props) {
	
	const listItems = props.items.map((item) => 
		<tr key={item.name+item.unit}>
			<td> {item.name} </td>
			<td> {item.qty + ' ' + item.unit} </td>
			<td> {item.category} </td>
			<td>
				<button onClick={props.action(item)}>Editar</button>
			</td>
		</tr>
	);

	return (
		<table>
			<thead>
				<tr>
					<th colSpan="4">Lista de artículos</th>
				</tr>
			</thead>
			<tbody>
				{listItems}
			</tbody>
		</table>
	);
}