localStorage.setItem("ad", "Rehim")
localStorage.setItem("soyad", "Yox")
localStorage.setItem("password","eli")

let body = document.querySelector("body")
let p = document.createElement("p")
let ad = localStorage.getItem("ad");
let soyad = localStorage.getItem("soyad");
let password = localStorage.getItem("password")

p.innerHTML =` ${ad}  ${soyad}  ${password}`


console.log(ad + " " + soyad + " " + password);
console.log(p);

body.append(p)
