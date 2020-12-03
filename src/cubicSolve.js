function cubicSolve(a, b, c, d){
    //finder de reelle rødder af tredjegradsligningen ax^3+bx^2+cx+d =0 
    b /= a;
    c /= a;
    d /= a;
  
    let discrim, q, r, dum1, s, t, term1, r13;
  
    q = (3.0*c - (b*b))/9.0;
    r = -(27.0*d) + b*(9.0*c - 2.0*(b*b));
    r /= 54.0;
  
    discrim = q*q*q + r*r;
        
    term1 = (b/3.0);
  
    if (discrim > 0) { // one root real, two are complex
     s = r + Math.sqrt(discrim);
     s = ((s < 0) ? -Math.pow(-s, (1.0/3.0)) : Math.pow(s, (1.0/3.0)));
     t = r - Math.sqrt(discrim);
     t = ((t < 0) ? -Math.pow(-t, (1.0/3.0)) : Math.pow(t, (1.0/3.0)));
     let roots = [-term1 + s + t];   
     return roots;
    } // End if (discrim > 0)
  
    // The remaining options are all real
    
    let roots = [0,0,0];
    
    if (discrim == 0){ // All roots real, at least two are equal.
     r13 = ((r < 0) ? -Math.pow(-r,(1.0/3.0)) : Math.pow(r,(1.0/3.0)));
     roots[0] = -term1 + 2.0*r13;
     roots[2] = roots[1] = -(r13 + term1);
     return roots;
    } // End if (discrim == 0)
  
    // Only option left is that all roots are real and unequal (to get here, q < 0)
    q = -q;
    dum1 = q*q*q;
    dum1 = Math.acos(r/Math.sqrt(dum1));
    r13 = 2.0*Math.sqrt(q);
    
    roots[0] = -term1 + r13*Math.cos(dum1/3.0);
    roots[1] = -term1 + r13*Math.cos((dum1 + 2.0*Math.PI)/3.0);
    roots[2] = -term1 + r13*Math.cos((dum1 + 4.0*Math.PI)/3.0);
    
    return roots;
}

function quadraticSolve(a,b,c){
    console.log("quadratic!");
    disk = b**2 - 4*a*c;

    if (disk < 0){
        throw "Imaginær diskriminant i andengradsligning!"
    }
    else{
        let roots = [0, 0];
        shared_part = -b/(2*a)
        disk_part = (disk**0.5)/(2*a)

        roots[0] = shared_part - disk_part;
        roots[1] = shared_part + disk_part;
        
        return roots;
    }
}   


export function wanted_root(a, b, c, d){
    //finder den relle rod, som ligger mellem 0 og 1.
    if (a === 0){
        if (b === 0){
            if (c===0){
                console.log ("a and b and c all zero!");
                return 0;  // this shouldn't happen
            }
            else {
                console.log("linear!");
                return -d/c
            }
        }
        else {
            let roots = quadraticSolve(b,c,d);
        }
    }
    else {
        let roots = cubicSolve(a, b, c, d);
    }       
    let num_roots = roots.length;
    for (let n = 0; n < num_roots +1; n++) {
        if (roots[n] >= 0  // > -0.000001
            &&roots[n] <= 1 // < 1.000001
        ){
        return roots[n];
        }
    }
}

/*tests
console.log(cubicSolve(10,2,3,1));
console.log(wanted_root(10,2,3,1));
*/
