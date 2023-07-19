
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

