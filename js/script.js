

function getInput(){
    century = parseInt(document.getElementById("century").value);
    year = parseInt(document.getElementById("year").value);
    month = parseInt(document.getElementById("month").value);
    date = parseInt(document.getElementById("date").value);

}

function calculateDay(){
    getInput();
    day= (((century/4)-2*century-1) + ((5*year/4)) + ((26*(month+1)/10)) + date ) % 7;
    console.log(day);

}




