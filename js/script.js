var century, year, month, date, day;

function getInput(){
    century = parseInt(document.getElementById("century").value);
    year = parseInt(document.getElementById("year").value);
    month = parseInt(document.getElementById("month").value);
    date = parseInt(document.getElementById("date").value);

    
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
    day= ((((century/4)-2*century-1) + ((5*year/4)) + ((26*(month+1)/10)) + date ) % 7)-1;
    console.log(day);
    return (Math.floor(day));

    if (day<0){
        day = day * -1;
        console.log(day)
    }
    else if (day>0){
        return day;
    }
}

function result(){
     day = calculateDay();
      checkGender();
      console.log();
}


let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    
function checkGender(){
    var Gen = document.getElementsByName("Gender");
    if(Gen[0].checked == true){
        var Gender= "male";
    }else if(Gen[1].checked == true){
        var Gender = "female";
    }else {
      console.log();
    }
      switch(Gender){
          case Gender= "male":
                switch(day){
                  case (0 || -0):
                    document.getElementById("output").innerHTML = "Your Akan name is " + maleNames[0];
                    break;
                  case (1 || -1):
                    document.getElementById("output").innerHTML = "Your Akan name is " + maleNames[1];
                    break;
                  case (2 || -2):
                    document.getElementById("output").innerHTML = "Your Akan name is " + maleNames[2];
                    break;
                  case (3 || -3):
                    document.getElementById("output").innerHTML = "Your Akan name is "+ maleNames[3];
                    break;
                  case (4 || -4):
                    document.getElementById("output").innerHTML = "Your Akan name is " + maleNames[4];
                    break;
                  case (5 || -5):
                    document.getElementById("output").innerHTML = "Your Akan name is " + maleNames[5];
                    break;
                  case (6 || -6):
                    document.getElementById("output").innerHTML = "Your Akan name is " + maleNames[6];
                    break;
            
                }
          break;
          case gender = "female":
                  switch(day){
                    case 0 || -0:
                      document.getElementById("output").innerHTML = "Your Akan name is " + femaleNames[0];
                      break;
                    
                    case 1 || -1:
                      document.getElementById("output").innerHTML = "Your Akan name is " + femaleNames[1];
                      break;
                    
                    case 2 || -2:
                      document.getElementById("output").innerHTML = "Your Akan name is " + femaleNames[2];
                      break;
                    case 3 || -3:
                      document.getElementById("output").innerHTML = "Your Akan name is " + femaleNames[3];
                      break;
                    case 4 || -4:
                      document.getElementById("output").innerHTML = "Your Akan name is " + femaleNames[4];
                      break;
                    case 5 || -5:
                      document.getElementById("output").innerHTML = "Your Akan name is " + femaleNames[5];
                      break;
                    case 6 || -6:
                      document.getElementById("output").innerHTML = "Your Akan name is " + femaleNames[6];
                      break;
  
                }
        
      }
  }
  