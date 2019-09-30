function calculate(){
    const r = document.getElementById("radius").value;
    const a = calculateRadius(r);
    document.getElementById("area").innerHTML = String(a.toFixed(2));
}

function calculateRadius(radius){
    const area = Math.PI * (Number(radius) * Number(radius))
    return area;
}

document.getElementById("calculate-button").addEventListener("click", calculate);