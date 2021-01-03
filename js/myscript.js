const showPass = document.querySelector('i.overflow')
showPass.addEventListener('click', () => {
    showPass.classList.contains('fa-eye-slash') ?
        showPass.classList.replace('fa-eye-slash', 'fa-eye') :
        showPass.classList.replace('fa-eye', 'fa-eye-slash')

    const pass = document.forms[0]['password']

    pass.type == "password" ? pass.type = "text" : pass.type = "password"
})

const form = document.forms[0];
form.onsubmit = () => {

    let email = document.forms[0]['email'].value;
    let password = document.forms[0]['password'].value;

    let cekEmail, cekPass
    if (email == "") {
        document.querySelector('.error-email').innerHTML = "Email tidak boleh kosong!"
        cekEmail = false
    } else {
        let regexEmail = /^\w+@\w+\.\w+/g
        if (!regexEmail.test(email)) {
            document.querySelector('.error-email').innerHTML = "Email tidak valid"
            cekEmail = false
        }
    }


    if (password == "") {
        document.querySelector('.error-password').innerHTML = "password tidak boleh kosong!"
        cekPass = false
    } else {
        document.querySelector('.error-password').innerHTML = ""
    }


    if ((cekEmail && cekPass) == false)
        return false
}
