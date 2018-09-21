module.exports = function solveEquation(equation) {
  // '-20 * x^2 - 108797540 * x - 130011773690520
    //-20 , x^2 - 108797540 , x - 130011773690520
    //a = -20 , bTemp= , - 108797540 cTemp = , - 130011773690520
    //b =
    //
    //

    let a=0, b=0, c=0, bTemp = [], cTemp=[], d =0, x1=0,x2=0;
    let temp=equation.split('*');
    a=temp[0];
    bTemp=temp[1].split('x^2');
    cTemp=c=temp[2].split('x');
    b=bTemp[1].split(' ').join('');
    c=cTemp[1].split(' ').join('');

    d = b*b -4*a*c;
    if (d===0){ x1 = -b/2*a;}
    if (d>0){
    x1 = Math.round((-b + Math.sqrt(d))/(2*a));
    x2 = Math.round((-b - Math.sqrt(d))/(2*a));
    if(x1 < x2) return [x1, x2];
    else return [x2, x1]; }
}
