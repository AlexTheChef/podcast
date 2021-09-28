function validation(event) {
    event.preventDefault()

    let form = document.getElementById("form");
    let email = document.getElementById("email").value;
    let text = document.getElementById("text");
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    

    if (email.match(pattern)) {
       
        text.innerHTML = ""
    }
    else {
       
        text.innerHTML = "Oops! Please check your email"
        
    }

    if (email == "") {
       
        text.innerHTML = "Oops! Please add your email"
    }

    return false
}

