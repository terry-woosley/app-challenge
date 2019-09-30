function calculate(){
    const r = document.getElementById("radius").value;
    const a = calculateRadius(r);
    document.getElementById("area").innerHTML = String(a.toFixed(1));
}

function calculateRadius(radius){
    if(Number(radius) < 0 || isNaN(Number(radius))){
        radius = 0;
    }
    const area = Math.PI * (Number(radius) * Number(radius))
    return area;
}

document.getElementById("calculate-button").addEventListener("click", calculate);