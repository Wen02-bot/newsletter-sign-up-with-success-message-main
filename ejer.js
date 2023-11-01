function validateEmail() {
    var email = document.getElementById("input_email").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
        var element =document.getElementsByClassName("container");
        for (var i = 0; i < element.length; i++) {
        element[i].classList.add("hide");
        }
        var element =document.getElementsByClassName("container-success");
        for (var i = 0; i < element.length; i++) {
            element[i].classList.remove("hide");
            }
    } else {
        console.log(email + " is not a valid email address.");
        var element =document.getElementsByTagName("input");
        for (var i = 0; i < element.length; i++) {
            element[i].classList.add("error");
        }
        var elements = document.getElementsByClassName("last");
        for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("hide");
    }
}

    }
    

function dismiss() {
    var element =document.getElementsByClassName("container");
        for (var i = 0; i < element.length; i++) {
        element[i].classList.remove("hide");
        }
        var element =document.getElementsByClassName("container-success");
        for (var i = 0; i < element.length; i++) {
        element[i].classList.add("hide");
        }
        
}