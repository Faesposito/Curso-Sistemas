//Datos disociados

let Month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
let MaxTempAbs = [39.3, 38.1, 36.3, 32.5, 27.4, 22.2, 27.7, 24.7, 28.8, 34.4, 35.7, 39.4];
let MaxTempMed = [26.3, 25.8, 23.7, 20.5, 16.8, 13.8, 13.1, 14.4, 16.0, 18.5, 21.7, 24.4];
let MediaTemp = [20.3, 19.9, 18.0, 14.6, 11.3, 8.5, 8.1, 8.9, 10.5, 13.1, 15.9, 18.5];
let MinTempMed = [14.3, 14.1, 12.5, 9.1, 6.4, 4.1, 3.8, 4.0, 5.3, 7.6, 10.1, 12.7];
let MinTempAbs = [4.7, 1.2, 1.9, -1, -3, -5.5, -9.3, -6.4, -5.5, -3.0, -2.0, -0.2];
let TotalPrecipitation = [100.1, 72.8, 107.0, 73.3, 73.3, 54.9, 58.9, 64.0, 56.4, 83.4, 75.3, 104.0];
let PrecipitationDays = [9, 8, 9, 9, 9, 9, 9, 8, 7, 10, 10, 10];
let SunHours = [288.3, 234.5, 232.5, 195.0, 195.0, 120.2, 127.1, 164.3, 174.0, 210.8, 222.0, 269.7];
let RelativeHumidity = [76, 77, 79, 81, 83, 84, 81, 81, 80, 80, 77, 76];

//Unificando en un solo objeto. <--- Estrategia 3
let table = {
	Month: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
	MaxTempAbs: [39.3, 38.1, 36.3, 32.5, 27.4, 22.2, 27.7, 24.7, 28.8, 34.4, 35.7, 39.4],
	MaxTempMed: [26.3, 25.8, 23.7, 20.5, 16.8, 13.8, 13.1, 14.4, 16.0, 18.5, 21.7, 24.4],
	MediaTemp: [20.3, 19.9, 18.0, 14.6, 11.3, 8.5, 8.1, 8.9, 10.5, 13.1, 15.9, 18.5],
	MinTempMed: [14.3, 14.1, 12.5, 9.1, 6.4, 4.1, 3.8, 4.0, 5.3, 7.6, 10.1, 12.7],
	MinTempAbs: [4.7, 1.2, 1.9, -1, -3, -5.5, -9.3, -6.4, -5.5, -3.0, -2.0, -0.2],
	TotalPrecipitation: [100.1, 72.8, 107.0, 73.3, 73.3, 54.9, 58.9, 64.0, 56.4, 83.4, 75.3, 104.0],
	PrecipitationDays: [9, 8, 9, 9, 9, 9, 9, 8, 7, 10, 10, 10],
	SunHours: [288.3, 234.5, 232.5, 195.0, 195.0, 120.2, 127.1, 164.3, 174.0, 210.8, 222.0, 269.7],
	RelativeHumidity: [76, 77, 79, 81, 83, 84, 81, 81, 80, 80, 77, 76]
}

function ArrayToHTMLRow(property_name, array) {
	let html = '<tr>';

	html += '<td>' + property_name + '</td>';

	for (dato of array) {
		html += '<td>' + dato + '</td>';
	}

	html += '</tr>';

	return html;
}


function TableToHTML(data_table) {
	let html = "";

	html += '<h1>Parámetros climáticos</h1>';

	html += '<table>';

	html += ArrayToHTMLRow('Mes ', data_table.Month);
	html += ArrayToHTMLRow('Temperatura Máx Abs (ºC) ', data_table.MaxTempAbs);
	html += ArrayToHTMLRow('Temperatura Min Abs (ºC) ', data_table.MinTempAbs);
	html += ArrayToHTMLRow('Temperatura Media (ºC) ', data_table.MediaTemp);
	html += ArrayToHTMLRow('Temperatura Minima Media (ºC) ', data_table.MinTempMed);
	html += ArrayToHTMLRow('Temperatura Minima Abs (ºC) ', data_table.MinTempAbs);
	html += ArrayToHTMLRow('Precipitacion Total (mm) ', data_table.TotalPrecipitation);
	html += ArrayToHTMLRow('Dias de Precipitaciones (>= 0.1 mm) ', data_table.PrecipitationDays);
	html += ArrayToHTMLRow('Horas de Sol ', data_table.SunHours);
	html += ArrayToHTMLRow('Humedad Relativa (%) ', data_table.RelativeHumidity);

	html += '</table>';

	return html;
}

document.getElementById('ui').innerHTML = TableToHTML(table);