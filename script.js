function goTo(page) {
    window.location.href = page;
}

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email && password) {
        window.location.href = "dashboard.html";
    } else {
        alert("أدخل البيانات");
    }
}

function register() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    if(name && email && pass && confirm) {
        if(pass === confirm) {
            alert("تم إنشاء الحساب");
            window.location.href = "login.html";
        } else {
            alert("كلمة المرور غير متطابقة");
        }
    } else {
        alert("أكمل البيانات");
    }
}

function logout() {
    window.location.href = "index.html";
}
