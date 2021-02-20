import {generatePoints} from './generatePoints.js'
import {generate_graph} from './generate_graph.js'
import {y_af_x } from './helper_function.js';

// Der er 4 punkter (a1,a2), (b1, b2), (c1, c2), (d1,d2)
// a1, a2 og d2 er altid 0
// Et krav er desuden, at 0 < b1 < c1 < d1


window.draw_graph = function draw_graph(){
        
    let b1 = parseFloat(document.getElementById('b1').value);     
    let b2 = parseFloat(document.getElementById('b2').value);  
    let c1 = parseFloat(document.getElementById('c1').value);  
    let c2 = parseFloat(document.getElementById('c2').value);  
    let d1 = parseFloat(document.getElementById('d1').value);
 
    if (b1 <= 0 || c1 <= b1 || d1 <= c1){
        alert("Husk kravet: 0 < b1 < c1 < d1")
    }

    let N = 100;
 
    let my_data = generatePoints(0,0, b1, b2, c1, c2, d1, 0, N);
    generate_graph(my_data);
}

draw_graph();

// in module mode functions don't automatically have global scooe
// so I have wo manually attach the funtion to the window object




