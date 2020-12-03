import {wanted_root} from './cubicSolve.js';

export function get_coeffs(a1, b1, c1, d1, x){
    /*
    a1, b1, c1, d1 er x-koordinaterne til de 4 punkter. 
    a1 vil i praksis altid være 0, så funktionen kan forsimples.
    vi skal også have, at a1<b1<c1<d1
    x er en værdi på x-aksen i intervallet [0,d1] 
    
    Funktionen beregner de 4 coefficienter til 3 gradsligningen x(t) - x =0
    
    */

    //let coeffs = [-a1 + 3*b1-3*c1 + d1, 3*a1-6*b1+3*c1, -3*a1+3*b1, a1-x]
    // since a1=0 this simplifies to:
    let coeffs = [3*b1 - 3*c1 + d1, -6*b1 + 3*c1, 3*b1, -x]
    
    //console.log("coeffs:", coeffs)
    return coeffs;
}


export function y_af_t(a2, b2, c2, d2, t){
    // beregner y(t)
    //let y = a2*(1 - t)**3 + 3 * b2* (1-t)**2 * t  + 3*c2*(1 - t) * t**2 + t**3 * d2;
    // as d2=0 and a2=0 this simplifies to
    let y =  3 * b2* (1-t)**2 * t  + 3*c2*(1 - t) * t**2;
    
    return y
}

export function t_af_x(a1, b1, c1, d1, x){
    //beregner t(x)
    if (x === 0){
        return 0} 
    if (x === d1){
        return 1
    }
    else {
    let coeffs = get_coeffs(a1, b1, c1, d1, x) 
    let t = wanted_root(coeffs[0], coeffs[1], coeffs[2], coeffs[3])  
    return t
    };
}

export function y_af_x(a1, a2, b1, b2, c1, c2, d1, d2, x){
    //beregner y(x)
    //x er en værdi mellem 0 og d1
    let t = t_af_x(a1,b1,c1,d1,x);
    let y = y_af_t(a2, b2, c2, d2, t);
    return y
}

