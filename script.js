

function validata(hight , weight)
{
   let x = parseInt(hight)
   let y = parseInt (weight)
   let z = x*x
    let result = (y/z) * 10000 ;
    result = result.toFixed(2);
    if ( result < 18.5 ) {
        document.getElementById('result').innerHTML = result;
        document.getElementById('note').innerHTML = "Low Weight";
    } else if (result > 18.5 && result < 24.9) {
        document.getElementById('result').innerHTML = result;
        document.getElementById('note').innerHTML = "Perfect Weight";
    } else if (result > 25 && result < 29.9) {
        document.getElementById('result').innerHTML = result;
        document.getElementById('note').innerHTML = "Hiegh Weight";
    } else if ( 30 < result) {
        document.getElementById('result').innerHTML = result;
        document.getElementById('note').innerHTML = "OverHiegh Weight";
    } else {
        document.getElementById('result').innerHTML = result;
        document.getElementById('note').innerHTML = "Not Defind";
    }
    return
}