

function getInput(){
    var century = parseInt(document.getElementById("century").value);
    var year = parseInt(document.getElementById("year").value);
    var month = parseInt(document.getElementById("month").value);
    var date = parseInt(document.getElementById("date").value);

    
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

    
function result(){
    var display = calculateDay();
    checkGender()
}
function calculateDay(){
    getInput();
    day= ((((century/4)-2*century-1) + ((5*year/4)) + ((26*(month+1)/10)) + date ) % 7) -1;
   
    return (Math.floor(day));
    console.log(day);
    if (day<0){
        day = day * -1;
        console.log(day)
    }
    else if (day>0){
        return day;
    }
    }

    function checkGender(){
     var male=document.getElementById("First").value
     var female=document.getElementById("Second").value

     if(male=="Male"){
     console.log(maleNames[0])
     }
     else if (female=="Female"){
     console.log(femaleNames)
     }



    }

    let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleNames = ["Akosua", "Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    
    




    



