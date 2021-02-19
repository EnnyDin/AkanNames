

function getInput(){
    century = parseInt(document.getElementById("century").value);
    year = parseInt(document.getElementById("year").value);
    month = parseInt(document.getElementById("month").value);
    date = parseInt(document.getElementById("date").value);

}

function calculateDay(){
    getInput();
    day = (((century/4) -2*century-1) + ((5*year/4)) + ((26*(month+1)/10)) + date ) % 7
    console.log(day);

}
function output(){
    day = calculateDay();
    checkGender();
    console.log("The function runs")
}



let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];