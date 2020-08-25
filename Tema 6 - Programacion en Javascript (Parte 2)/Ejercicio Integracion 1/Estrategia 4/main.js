/*
 1º Enfoque
 Construir la base en HTML, y dejar la puerta abierta para completar posteriormente la parte dinámica 
 que es la que cambia.

 2º Enfoque
 Es que el HTML no tenga nada, y que JS se encargue completamente de construir el código HTML procesando
 la información, y que posteriormente, al terminar, inserte ese fragmento de HTML dentro del <body>

 3º Enfoque (Antiguo)
 El HTML es el resultado del procesamiento del lado del servidor. <-- OBSOLETO

 4º Enfoque (Avanzado, no lo vamos a ver todavía)
 No se escribe HTML, ni en index.html, ni en JS. Directamente se programa la interfaz gráfica, mediante código JS

 */

/* Resolución tomando la estrategia de datos 4 y el enfoque 2 */

let AnualWeatherTable = {
	January: {
		MaxTempAbs: 39.3,
		MaxTempMed: 26.3,
		MediaTemp: 20.3,
		MinTempMed: 14.3,
		MinTempAbs: 4.7,
		TotalPrecipitation: 100.1,
		PrecipitationDays: 9,
		SunHours: 288.3,
		RelativeHumidity: 76,
	},
	February: {
		MaxTempAbs: 38.1,
		MaxTempMed: 25.8,
		MediaTemp: 19.9,
		MinTempMed: 14.1,
		MinTempAbs: 1.2,
		TotalPrecipitation: 72.8,
		PrecipitationDays: 8,
		SunHours: 234.5,
		RelativeHumidity: 77,
	},
	March: {
		MaxTempAbs: 36.3,
		MaxTempMed: 23.7,
		MediaTemp: 18.0,
		MinTempMed: 12.5,
		MinTempAbs: 1.9,
		TotalPrecipitation: 107.0,
		PrecipitationDays: 9,
		SunHours: 232.5,
		RelativeHumidity: 79,
	},
	April: {
		MaxTempAbs: 32.5,
		MaxTempMed: 20.5,
		MediaTemp: 14.6,
		MinTempMed: 9.1,
		MinTempAbs: -1,
		TotalPrecipitation: 73.3,
		PrecipitationDays: 9,
		SunHours: 195.0,
		RelativeHumidity: 81,
	},
	May: {
		MaxTempAbs: 27.4,
		MaxTempMed: 16.8,
		MediaTemp: 11.3,
		MinTempMed: 6.4,
		MinTempAbs: -3,
		TotalPrecipitation: 73.3,
		PrecipitationDays: 9,
		SunHours: 195.0,
		RelativeHumidity: 83,
	},
	June: {
		MaxTempAbs: 22.2,
		MaxTempMed: 13.8,
		MediaTemp: 8.5,
		MinTempMed: 4.1,
		MinTempAbs: -5.5,
		TotalPrecipitation: 54.9,
		PrecipitationDays: 9,
		SunHours: 120.2,
		RelativeHumidity: 84,
	},
	July: {
		MaxTempAbs: 27.7,
		MaxTempMed: 13.1,
		MediaTemp: 8.1,
		MinTempMed: 3.8,
		MinTempAbs: -9.3,
		TotalPrecipitation: 58.9,
		PrecipitationDays: 9,
		SunHours: 127.1,
		RelativeHumidity: 81,
	},
	August: {
		MaxTempAbs: 24.7,
		MaxTempMed: 14.4,
		MediaTemp: 8.9,
		MinTempMed: 4.0,
		MinTempAbs: -6.4,
		TotalPrecipitation: 64.0,
		PrecipitationDays: 8,
		SunHours: 164.3,
		RelativeHumidity: 81,
	},
	September: {
		MaxTempAbs: 28.8,
		MaxTempMed: 16.0,
		MediaTemp: 10.5,
		MinTempMed: 5.3,
		MinTempAbs: -5.5,
		TotalPrecipitation: 56.4,
		PrecipitationDays: 7,
		SunHours: 174.0,
		RelativeHumidity: 80,
	},
	October: {
		MaxTempAbs: 34.4,
		MaxTempMed: 18.5,
		MediaTemp: 13.1,
		MinTempMed: 7.6,
		MinTempAbs: -3.0,
		TotalPrecipitation: 83.4,
		PrecipitationDays: 10,
		SunHours: 210.8,
		RelativeHumidity: 77,
	},
	November: {
		MaxTempAbs: 35.7,
		MaxTempMed: 21.7,
		MediaTemp: 15.9,
		MinTempMed: 10.1,
		MinTempAbs: -2.0,
		TotalPrecipitation: 75.3,
		PrecipitationDays: 10,
		SunHours: 222.0,
		RelativeHumidity: 77,
	},
	December: {
		MaxTempAbs: 39.4,
		MaxTempMed: 24.4,
		MediaTemp: 18.5,
		MinTempMed: 12.7,
		MinTempAbs: -0.2,
		TotalPrecipitation: 104.0,
		PrecipitationDays: 10,
		SunHours: 269.7,
		RelativeHumidity: 76,
	}
};

function TableToHTML(table) {
	let html = "";

	html += '<h1>Parámetros climáticos</h1>';

	html += `<table>`;

	//Codigo

	let months = Object.keys(table);

	html += '<tr>';
	html += '<td>Meses </td>';
	for (index = 0; index < months.length; index++) {
		html += '<td>' + months[index] + '</td>';
	}
	html += '<tr>';

	html += '<td>Temperatura Máx Abs (ºC) </td>';
	for (month of months) {
		html += '<td>' + table[month].MaxTempAbs + '</td>';
	}
	html += '</tr>';

	html += '<tr>';
	html += '<td>Temperatura Maxima Media (ºC) </td>';
	for (month of months) {
		html += '<td>' + table[month].MaxTempMed + '</td>';
	}
	html += '</tr>';

	html += '<td>Temperatura Media (ºC) </td>';
	for (month of months) {
		html += '<td>' + table[month].MediaTemp + '</td>';
	}
	html += '</tr>';

	html += '<td>Temperatura Minima Media (ºC) </td>';
	for (month of months) {
		html += '<td>' + table[month].MinTempMed + '</td>';
	}
	html += '</tr>';

	html += '<td>Temperatura Minima Abs (ºC) </td>';
	for (month of months) {
		html += '<td>' + table[month].MinTempAbs + '</td>';
	}
	html += '</tr>';

	html += '<td>Precipitacion Total (mm) </td>';
	for (month of months) {
		html += '<td>' + table[month].TotalPrecipitation + '</td>';
	}
	html += '</tr>';

	html += '<td>Dias de Precipitaciones (>= 0.1 mm) </td>';
	for (month of months) {
		html += '<td>' + table[month].PrecipitationDays + '</td>';
	}
	html += '</tr>';

	html += '<td>Horas de Sol </td>';
	for (month of months) {
		html += '<td>' + table[month].SunHours + '</td>';
	}
	html += '</tr>';

	html += '<tr>';
	html += '<td>Humedad Relativa (%) </td>';
	for (month of months) {
		html += '<td>' + table[month].RelativeHumidity + '</td>';
	}
	html += '</tr>';

	html += '</table>';

	//API_DOM
	return html;
}

document.getElementById('ui').innerHTML = TableToHTML(AnualWeatherTable);