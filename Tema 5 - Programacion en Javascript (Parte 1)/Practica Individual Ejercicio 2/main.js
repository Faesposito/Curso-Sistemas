// Ejercicio 2

let AnualWeatherTable = [{
    Month: "January",
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
  {
    Month: "February",
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
  {
    Month: "March",
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
  {
    Month: "April",
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
  {
    Month: "May",
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
  {
    Month: "June",
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
  {
    Month: "July",
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
  {
    Month: "August",
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
  {
    Month: "September",
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
  {
    Month: "October",
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
  {
    Month: "November",
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
  {
    Month: "December",
    MaxTempAbs: 39.4,
    MaxTempMed: 24.4,
    MediaTemp: 18.5,
    MinTempMed: 12.7,
    MinTempAbs: -0.2,
    TotalPrecipitation: 104.0,
    PrecipitationDays: 10,
    SunHours: 269.7,
    RelativeHumidity: 76,
  },
];

function AverageMaxTemperature(WeatherTable) {
  let averageMaxTemp = 0;
  let counter = WeatherTable.length;

  for (let index = 0; index < WeatherTable.length; index++) {
    averageMaxTemp = averageMaxTemp + WeatherTable[index].MaxTempAbs;
  }

  return averageMaxTemp / counter;
}

function AverageMinTemperature(WeatherTable) {
  let averageMinTemp = 0;
  let counter = WeatherTable.length;

  for (let index = 0; index < WeatherTable.length; index++) {
    averageMinTemp = averageMinTemp + WeatherTable[index].MinTempAbs;
  }

  return averageMinTemp / counter;
}

function AverageRelativeHumidity(WeatherTable) {
  let averageRelativeHumidity = 0;
  let counter = WeatherTable.length;

  for (let index = 0; index < WeatherTable.length; index++) {
    averageRelativeHumidity =
      averageRelativeHumidity + WeatherTable[index].RelativeHumidity;
  }

  return averageRelativeHumidity / counter;
}

function ShowAveragesTemperaturesAndHumidity(WeatherTable) {
  console.log(
    "El promedio de Temperatura Maxima es: ",
    AverageMaxTemperature(WeatherTable)
  );
  console.log(
    "El promedio de Temperatura Minima es: ",
    AverageMinTemperature(WeatherTable)
  );
  console.log(
    "El promedio de Humedad Relativa es: ",
    AverageRelativeHumidity(WeatherTable)
  );
}

ShowAveragesTemperaturesAndHumidity(AnualWeatherTable);