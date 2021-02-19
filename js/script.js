

function getInput(){
    var century = (document.getElementById("century").value);
    var year = (document.getElementById("year").value);
    var month = (document.getElementById("month").value);
    var date = (document.getElementById("date").value);

    
   if (century <15  || century >20){
    alert("Please check the century");
    return false; }
    
   else if (year <=0 || year >=100){
    alert("Please check the year");
    return false; }

   else if (month <1 || month >12){
    alert("Please check the month");
    return false; }

   else if (date<1 || date>31){
    alert("Please check the date");
    return false; }

   }

function calculateDay(){
    getInput();
    day= (((century/4)-2*century-1) + ((5*year/4)) + ((26*(month+1)/10)) + date ) % 7;
    console.log(day);
    return (Math.floor(day));
   
    }
    let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleNames = ["Akosua", "Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    
    




    



