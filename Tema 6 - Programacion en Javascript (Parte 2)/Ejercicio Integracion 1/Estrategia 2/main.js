//Estrategia 2 (Matriz)"


let table = [
	['Mes', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
	['MaxTempAbs', 39.3, 38.1, 36.3, 32.5, 27.4, 22.2, 27.7, 24.7, 28.8, 34.4, 35.7, 39.4],
	['MaxTempMed', 26.3, 25.8, 23.7, 20.5, 16.8, 13.8, 13.1, 14.4, 16.0, 18.5, 21.7, 24.4],
	['MediaTemp', 20.3, 19.9, 18.0, 14.6, 11.3, 8.5, 8.1, 8.9, 10.5, 13.1, 15.9, 18.5],
	['MinTempMed', 14.3, 14.1, 12.5, 9.1, 6.4, 4.1, 3.8, 4.0, 5.3, 7.6, 10.1, 12.7],
	['MinTempAbs', 4.7, 1.2, 1.9, -1, -3, -5.5, -9.3, -6.4, -5.5, -3.0, -2.0, -0.2],
	['TotalPrecipitation', 100.1, 72.8, 107.0, 73.3, 73.3, 54.9, 58.9, 64.0, 56.4, 83.4, 75.3, 104.0],
	['PrecipitationDays', 9, 8, 9, 9, 9, 9, 9, 8, 7, 10, 10, 10],
	['SunHours', 288.3, 234.5, 232.5, 195.0, 195.0, 120.2, 127.1, 164.3, 174.0, 210.8, 222.0, 269.7],
	['RelativeHumidity', 76, 77, 79, 81, 83, 84, 81, 81, 80, 80, 77, 76]
];

function TableToHTML(matrix) {
	let html = "";

	html += '<h1>Parámetros climáticos</h1>';

	html += '<table>';

	for (row of matrix) {
		html += '<tr>';

		for (column of row) {
			html += '<td>' + column + '</td>';
		}

		html += '</tr>';
	}

	html += '</table>';

	return html;
}

document.getElementById('ui').innerHTML = TableToHTML(table);