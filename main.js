function validateForm(){
    var text = document.getElementById("name");
    
    if(!text.value.includes('@')){
        text.style.borderColor = "red";
        document.getElementById("error").innerHTML = "Please provide a valid Email!";
        document.getElementById("error-image").style.display = "inline";
    }
    else {
        document.getElementById("error").innerHTML = "Congrats!";
    }
}
