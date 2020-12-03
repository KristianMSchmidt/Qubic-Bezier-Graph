import {y_af_x} from './helper_function.js';

export function generatePoints(a1,a2,b1,b2, c1,c2, d1,d2, N){
    //Beregning af x-og-y-værdier til tegning af graf
    //x-intervallet [0, d1] deles i N delepunkter. Til hver x-værdi beregnes den tilhørende y-værdi.
    let data = [];
    let i;
    for (i = 0; i < N + 1; i++) {
        let current_x = d1/N * i; 
        let current_y = y_af_x(a1, a2, b1, b2, c1, c2, d1, d2, current_x);
        data.push({
            x: current_x,
            y: current_y})
    }
    return data;
}
