function func(evt){
    evt.preventDefault();
    let pass1 = document.getElementById("pass1");
    let pass2 = document.getElementById("pass2");
    if (pass1.value != pass2.value){
        alert("Passwords dont match! Please, try again!");
        pass1.value = '';
        pass2.value = '';
    }
    else{
        alert("Your registration completed successfully! You are going to be returned to Skillet Band page right now!");
        window.location.href = "https://romankoshovyi.github.io/DesignLayout/";
    }
}