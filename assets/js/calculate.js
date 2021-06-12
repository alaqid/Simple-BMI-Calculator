function myFunction() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var result;    

    result =(weight/(height*height)).toFixed(2);
    
if (height != "" && weight != ""){

    if (result >= 0 && result < 18.5){
        result += "<br>You are Underweight";  
        display.innerHTML = "Your BMI is " + result;      
    }
    else if (result >= 18.5 && result <= 24.99){
        result += "<br>You are Normal";
        display.innerHTML = "Your BMI is " + result;
    }   
    else if ( result >= 25 && result <= 29.99) {
        result += "<br>You are Overweight";
        display.innerHTML = "Your BMI is " + result;
    }
    else if ( result >= 30 && result <= 34.99) {
        result += "<br>You are Obese";
        display.innerHTML = "Your BMI is " + result;
    } else if (result >= 35){
        result += "<br>You are Extremely Obese";
        display.innerHTML = "Your BMI is " + result;
    } else{
        alert("Error. Please Enter Valid Weight and/or Height");        
    }
} 
else {
    alert("Error. Please Enter A Value");
}

    
}
