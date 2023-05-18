var links = [
    "https://wa.me/2348126325226",
    "https://wa.me/237652033038",
    "https://wa.me/237694191567"
];

document.querySelector(".year").textContent = new Date().getFullYear()

document.getElementById("random-link").addEventListener("click",function(event){
    event.preventDefault();
    var randomIndex = Math.floor(Math.random()*links.length);
    window.location.href = links[randomIndex];
});


