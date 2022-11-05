function verificaEmail(cookie, cookieOK) {
    let ok = "email="+cookieOK
    if (cookie == ok){
        getInput();
        alert("E-mail já existente! Por favor digite outro.");
    } else {
        addCookie(cookieOK)
    }
}

function getInput() {
    input = document.getElementById('email')
    input.value = "";
}

function addCookie(ok) {
    document.cookie = `email=${ok}; SameSite=None; Secure`;
}

function getCookie() {
    return document.cookie;
}

const checkCookie = async() => {
    const cookieOK = document.getElementById('email').value;
    verificaEmail(getCookie(), cookieOK)
    console.log("cookie ", getCookie());
    console.log("cookieOK ",cookieOK);
}

document.getElementById('email')
        .addEventListener('focusout', checkCookie);