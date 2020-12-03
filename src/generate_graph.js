export function generate_graph(my_data){
    
    let canvas = document.getElementById('line-chart'); // Let's grab the canvas
    canvas.height = "30";
    canvas.width = "100";
    let ctx = canvas.getContext('2d');  //rendering context
    

    new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Bezierkurve',
                data: my_data,
                fill: false,
                borderColor: 'rgba(0, 181, 204, 1)'
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    type: 'linear',
                    position: 'bottom'
                }]
            }
        }
    },); 
}