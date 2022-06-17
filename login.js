var  username, usernameError, email, emailError, password, passwordError, confirm_password,
        confirm_passwordError, submit, passwordEye, confirmEye
    username=document.querySelector("#username")
    usernameError=document.querySelector("#usernameError")
    email=document.querySelector("#email")
    emailError=document.querySelector("#emailError")
    password=document.querySelector("#password")
    passwordError=document.querySelector("#passwordError")
    confirm_password=document.querySelector("#confirm_password")
    confirm_passwordError=document.querySelector("#confirm_passwordError")
    submit=document.querySelector("#submit")
    passwordEye=document.querySelector("#passwordEye")
    confirmEye=document.querySelector("#confirmEye")
    congrats=document.querySelector(".body")


function ValidateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function valid_username(username) {
    if (username === '') {
        usernameError.innerHTML = "Please provide a username"
    } else if (username.length <= 3) {
        usernameError.innerHTML ="username must be greater than 3 characters"
    } else {
        usernameError.innerHTML =""
        return username
    }
}

function valid_email(email) {
    if (email === '') {
        emailError.innerHTML = "Email field must be blank"
    } else if (ValidateEmail(email) === false) {
        emailError.innerHTML ="Please provide a valid email"
    } else {
        emailError.innerHTML =""
        return email
    }
}

function valid_password(password) {
    if (password === '') {
        passwordError.innerHTML = "Please provide a password"
    } else if (password.length <= 7) {
        passwordError.innerHTML ="username must be greater than 8 characters"
    } else {
        passwordError.innerHTML =""
        return password
    }
}

function valid_confirm_password(confirm) {
    if (confirm !== password.value) {
        confirm_passwordError.innerHTML = "password did not matched"
    } else {
        confirm_passwordError.innerHTML =""
        return confirm
    }
}

function html_element(value) {
    const html = `
        <div class="congrats" >
        <div class="congrat">
            <div class="message">
                <h3>Congratulations</h3>
                <p>Your registration was successful</p>
                <p>Username: ${value.username}</p>
                <p>Email: ${value.email}</p>
                <p>password: ${value.password}</p>
            </div>
        </div>
        </div>
    `
    return html
}

submit.addEventListener('click', function (event) {
    event.preventDefault()
    let u, e, p, c, value
        u=username.value
        e=email.value
        p=password.value
        c=confirm_password.value
    valid_username(u)
    valid_email(e)
    valid_password(p)
    valid_confirm_password(c)

    value = {
        username: u,
        email: e,
        password: p,
    }

    if (u && e && p && c) {
        if (u.length >= 4 && ValidateEmail(e) && p.length >= 8 && p===c) {
            congrats.insertAdjacentHTML('afterbegin', html_element(value))
        }
    }
})


passwordEye.addEventListener('click', function (event) {
    if (password.type === 'password') {
        password.type = 'text'
    } else if (password.type === 'text'){ 
        password.type = 'password'
    }
})

confirmEye.addEventListener('click', function (event) {
    if (confirm_password.type === 'password') {
        confirm_password.type = 'text'
    } else if (confirm_password.type === 'text'){ 
        confirm_password.type = 'password'
    }
})

