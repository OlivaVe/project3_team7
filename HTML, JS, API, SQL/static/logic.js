
// Create the trace

d3.json('http://127.0.0.1:5000/api').then(d=>{
    let trace1 = {
        x: d.response.labels,
        y: d.response.values,
        type: 'bar',
        name: 'Men'
    };

    let trace2 = {
        x: d.response1.labels1,
        y: d.response1.values1,
        type: 'bar',
        marker: { color: 'purple' },
        name: 'Women'
    };
    // escolaridad unisex
    let trace4 = {
        y: d.response3.labels3,
        x: d.response3.values3,
        type: 'bar',
        orientation: 'h',
        marker: { color: 'orange' }       
    }; 

    // age men
    let trace3 = {
        x: d.response4.labels4,
        y: d.response4.values4,
        type: 'line',
        name: 'Age Men'
    };
   // age woman    
    let trace5 = {
    x: d.response5.labels5,
    y: d.response5.values5,
    type: 'line',
    line: { color: 'purple' },
    name: 'Age Women'
    };   
    let layout_income = {
        title: 'Average Income for Men and Woman by Zodiac Sign',
        
      };
    let layout = {
        title: 'Scholarization level when divorced',
      };
    let layout_age = {
        title: 'Divorces by Age Man and Woman',
        
      };
    let data = [trace1,trace2];
    let data3 = [trace3,trace5];
    let data4 = [trace4];
    
    Plotly.newPlot('plot1', data, layout_income);
    // Plotly.newPlot('plot2', data2);
    Plotly.newPlot('plot3', data3, layout_age);
    Plotly.newPlot('plot4', data4, layout);

    
});
// --------------------------------------------------------------------------------------------------------------

// // Create a map object.
let myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
  });
  
  // Add a tile layer.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
//   // Define a markerSize() function that will give each city a different radius based on its population.
//   function markerSize(population) {
//     return Math.sqrt(population) * 50;
//   }
  
//   // Each city object contains the city's name, location, and population.
//   // Population Data Source: U.S. 2020 Decennial Census
//   let states = [
//     {
//       name: "Aguascalientes",
//       location: [21.8800, -102.2906],
//       count: 1
//     },
//     {
//       name: "Baja California",
//       location: [30.8406, -115.2838],
//       count: 3
//     },
//     {
//       name: "Baja California Sur",
//       location: [25.5941, -111.9400],
//       count: 0
//     },
//     {
//       name: "Campeche",
//       location: [19.8454, -90.5230],
//       count: 1
//     },
//     {
//       name: "Chiapas",
//       location: [16.7569, -93.1292],
//       count: 3
//     },
//     {
//       name: "Chihuahua",
//       location: [28.6353, -106.0889],
//       count: 0
//     },
//     {
//       name: "Coahuila",
//       location: [27.0587, -101.7068],
//       count: 2
//     },
//     {
//       name: "Colima",
//       location: [19.2433, -103.7247],
//       count: 0
//     },
//     {
//       name: "Durango",
//       location: [24.0277, -104.6532],
//       count: 0
//     },
//     {
//       name: "Guanajuato",
//       location: [21.0188, -101.2590],
//       count: 1
//     },
//     {
//       name: "Guerrero",
//       location: [17.4392, -99.5451],
//       count: 3
//     },
//     {
//       name: "Hidalgo",
//       location: [20.6596, -99.0806],
//       count: 4
//     },
//     {
//       name: "Jalisco",
//       location: [20.6596, -103.3496],
//       count: 3
//     },
//     {
//       name: "México",
//       location: [19.4326, -99.1332],
//       count: 2
//     },
//     {
//       name: "Michoacán",
//       location: [19.5665, -101.7068],
//       count: 3
//     },
//     {
//       name: "Morelos",
//       location: [18.6813, -99.1013],
//       count: 7
//     },
//     {
//       name: "Nayarit",
//       location: [21.7514, -104.8455],
//       count: 2
//     },
//     {
//       name: "Nuevo León",
//       location: [25.6866, -100.3161],
//       count: 2
//     },
//     {
//       name: "Oaxaca",
//       location: [16.7655, -96.3314],
//       count: 7
//     },
//     {
//       name: "Puebla",
//       location: [19.0414, -98.2063],
//       count: 11
//     },
//     {
//       name: "Querétaro",
//       location: [20.5888, -100.3899],
//       count: 1
//     },
//     {
//       name: "Quintana Roo",
//       location: [19.1817, -88.4790],
//       count: 3
//     },
//     {
//       name: "San Luis Potosí",
//       location: [22.1565, -100.9855],
//       count: 1
//     },
//     {
//       name: "Sinaloa",
//       location: [25.1721, -107.4795],
//       count: 2
//     },
//     {
//       name: "Sonora",
//       location: [29.2972, -110.3306],
//       count: 2
//     },
//     {
//       name: "Tabasco",
//       location: [17.8409, -92.6189],
//       count: 5
//     },
//     {
//       name: "Tamaulipas",
//       location: [24.2669, -98.8363],
//       count: 5
//     },
//     {
//       name: "Tlaxcala",
//       location: [19.3139, -98.2414],
//       count: 1
//     },
//     {
//       name: "Veracruz",
//       location: [19.1738, -96.1342],
//       count: 3364
//     },
//     {
//       name: "Yucatán",
//       location: [20.7096, -89.0943],
//       count: 1
//     },
//     {
//       name: "Zacatecas",
//       location: [22.7709, -102.5832],
//       count: 0
//     },
//     {
//       name: "Ciudad de México (Mexico City)",
//       location: [19.4326, -99.1332],
//       count: 64
//     }
//   ];
  
  
  
  
  
  
//   // Loop through the cities array, and create one marker for each city object.
//   for (let i = 0 ; i < states.length ; i++ ){
//     let state = states[i]
  
//     L.circle(
//       state.location,
//       {
//       color:'red',
//       fillColor:'purple',
//       fillOpacity:0.5,
//       radius:state.count
//     })
//   .bindPopup(`<h4>${state.name}</h4><hr><p>Population: ${state.count.toLocaleString()}</p>`)  
//   .addTo(myMap)
  
  
  
//   }