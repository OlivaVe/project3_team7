// Create a map object.
let myMap = L.map("map", {
  center: [23.634501, -102.552784],
  zoom: 6
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Define a markerSize() function that will give each state a different radius based on its divorces.
function markerSize(divorces) {
  return Math.sqrt(divorces) * 10000;
}

// Divorces Data per state
let states  = [
  {
    name: "Aguascalientes",
    location: [21.8800, -102.2906],
    count: 1
  },
  {
    name: "Baja California",
    location: [30.8406, -115.2838],
    count: 3
  },
  {
    name: "Baja California Sur",
    location: [25.5941, -111.9400],
    count: 0
  },
  {
    name: "Campeche",
    location: [19.8454, -90.5230],
    count: 1
  },
  {
    name: "Chiapas",
    location: [16.7569, -93.1292],
    count: 3
  },
  {
    name: "Chihuahua",
    location: [28.6353, -106.0889],
    count: 0
  },
  {
    name: "Coahuila",
    location: [27.0587, -101.7068],
    count: 2
  },
  {
    name: "Colima",
    location: [19.2433, -103.7247],
    count: 0
  },
  {
    name: "Durango",
    location: [24.0277, -104.6532],
    count: 0
  },
  {
    name: "Guanajuato",
    location: [21.0188, -101.2590],
    count: 1
  },
  {
    name: "Guerrero",
    location: [17.4392, -99.5451],
    count: 3
  },
  {
    name: "Hidalgo",
    location: [20.6596, -99.0806],
    count: 4
  },
  {
    name: "Jalisco",
    location: [20.6596, -103.3496],
    count: 3
  },
  {
    name: "México",
    location: [19.4326, -99.1332],
    count: 2
  },
  {
    name: "Michoacán",
    location: [19.5665, -101.7068],
    count: 3
  },
  {
    name: "Morelos",
    location: [18.6813, -99.1013],
    count: 7
  },
  {
    name: "Nayarit",
    location: [21.7514, -104.8455],
    count: 2
  },
  {
    name: "Nuevo León",
    location: [25.6866, -100.3161],
    count: 2
  },
  {
    name: "Oaxaca",
    location: [16.7655, -96.3314],
    count: 7
  },
  {
    name: "Puebla",
    location: [19.0414, -98.2063],
    count: 11
  },
  {
    name: "Querétaro",
    location: [20.5888, -100.3899],
    count: 1
  },
  {
    name: "Quintana Roo",
    location: [19.1817, -88.4790],
    count: 3
  },
  {
    name: "San Luis Potosí",
    location: [22.1565, -100.9855],
    count: 1
  },
  {
    name: "Sinaloa",
    location: [25.1721, -107.4795],
    count: 2
  },
  {
    name: "Sonora",
    location: [29.2972, -110.3306],
    count: 2
  },
  {
    name: "Tabasco",
    location: [17.8409, -92.6189],
    count: 5
  },
  {
    name: "Tamaulipas",
    location: [24.2669, -98.8363],
    count: 5
  },
  {
    name: "Tlaxcala",
    location: [19.3139, -98.2414],
    count: 1
  },
  {
    name: "Veracruz",
    location: [19.1738, -96.1342],
    count: 100
  },
  {
    name: "Yucatán",
    location: [20.7096, -89.0943],
    count: 1
  },
  {
    name: "Zacatecas",
    location: [22.7709, -102.5832],
    count: 0
  },
  {
    name: "Ciudad de México (Mexico state)",
    location: [19.4326, -99.1332],
    count: 64
  }
];

// Loop through the states array, and create one marker for each state object.
for (let i = 0 ; i < states.length ; i++ ){
  let state = states[i]

  L.circle(
    state.location,
    {
    color:'green',
    fillColor:'purple',
    fillOpastate:0.5,
    radius:markerSize(state.count)
  })
.bindPopup(`<h4>${state.name}</h4><hr><p>Divorces: ${state.count.toLocaleString()}</p>`)  
.addTo(myMap)



}