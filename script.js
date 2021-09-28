function validation() {
    let form = document.getElementById("form");
    let email = document.getElementById("email").value;
    let text = document.getElementById("text");
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    

    if (email.match(pattern)) {
        form.classList.add("valid")
        form.classList.remove("invalid")
    }
    else {
        form.classList.remove("valid")
        form.classList.add("invalid")
        text.innerHTML = "Oops! Please check your email"
        
    }

    if (email == "") {
        form.classList.remove("valid")
        form.classList.add("invalid")
        text.innerHTML = "Oops! Please add your email"
    }
}

document.getElementById("form").addEventeListener('submit', function(e){
    e.preventDefault();
    alert('Form is submited')
})
