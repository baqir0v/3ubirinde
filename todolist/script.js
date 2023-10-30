// let body = document.querySelector("body");
// let button = document.getElementById("button");


// button.addEventListener("click", function (e) {
//     e.preventDefault();

//     let input1 = document.getElementById("name");
//     let input2 = document.getElementById("email");
//     let input3 = document.getElementById("pwd");

//     let namevalue = input1.value;
//     let emailvalue = input2.value;
//     let pwdvalue = input3.value;


//     localStorage.setItem("name", namevalue);
//     localStorage.setItem("email", emailvalue);
//     localStorage.setItem("password", pwdvalue);

//     // let newRow = document.createElement("tr");
//     // let userName = document.createElement("td");
//     // let eMail = document.createElement("td");
//     // let password = document.createElement("td");
//     // let table = document.querySelector("table");
//     // let checkbox1 = document.createElement("input");
//     // checkbox1.type = "checkbox";
//     // let checkbox2 = document.createElement("input");
//     // checkbox2.type = "checkbox";
//     // let checkbox3 = document.createElement("input");
//     // checkbox3.type = "checkbox";



//     // checkbox1.addEventListener("click", function () {
//     //     userName.classList.toggle("line-through");
//     // });
//     // checkbox2.addEventListener("click", function () {
//     //     eMail.classList.toggle("line-through");
//     // });
//     // checkbox3.addEventListener("click", function () {
//     //     password.classList.toggle("line-through");
//     // });

//     // table.append(newRow);
//     // newRow.append(userName);
//     // newRow.append(eMail);
//     // newRow.append(password);
//     // userName.append(checkbox1);
//     // eMail.append(checkbox2);
//     // password.append(checkbox3);

//     window.addEventListener("load", function () {
//         input1.textContent = localStorage.getItem("name");
//         input2.textContent = localStorage.getItem("email");
//         input3.textContent = localStorage.getItem("password");

//         if (input1.textContent) {
//             namevalue = input1.textContent
//         }
//     })

//     // if (localStorage.getItem("name")) {
//     //     input1.value = localStorage.getItem("name");
//     // }

//     // if (localStorage.getItem("email")) {
//     //     input2.value = localStorage.getItem("email");
//     // }

//     // if (localStorage.getItem("password")) {
//     //     input3.value = localStorage.getItem("password");
//     // }

//     // input1.value = "";
//     // input2.value = "";
//     // input3.value = "";
// });






let input1 = document.getElementById("name");
let input2 = document.getElementById("email");
let input3 = document.getElementById("pwd");
let button = document.getElementById("saveButton");
window.addEventListener("load", function () {
    if (localStorage.getItem("user")) {
        let Data = JSON.parse(localStorage.getItem("user"));

        input1.value = Data.name;
        input2.value = Data.email;
        input3.value = Data.password;
    }
});

button.addEventListener("click", function (e) {
    e.preventDefault();

    let namevalue = input1.value;
    let emailvalue = input2.value;
    let pwdvalue = input3.value;

    let Data = {
        name: namevalue,
        email: emailvalue,
        password: pwdvalue
    };

    let str = JSON.stringify(Data);
    localStorage.setItem("user", str);

    input1.value = "";
    input2.value = "";
    input3.value = "";
});
