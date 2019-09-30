function calculate(){
    const firstNum = document.getElementById("first").value;
    const secondNum = document.getElementById("second").value;
    const thirdNum = document.getElementById("third").value;

    const avg = (Number(firstNum) + Number(secondNum) + Number(thirdNum)) / 3;

    document.getElementById("average").innerHTML = String(avg.toFixed(2));
}

document.getElementById("calculate-button").addEventListener("click", calculate);