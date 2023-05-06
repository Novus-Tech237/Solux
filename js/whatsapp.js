var links = [
    "https://wa.me/2348126325226",
    "https://wa.me/237652033038",
    "https://wa.me/237694191567"
];

var oop_contact = [
    "https://wa.link/glvs0j",
    "https://wa.link/vgdb0u"
];

document.getElementById("random-link").addEventListener("click",function(event){
    event.preventDefault();
    var randomIndex = Math.floor(Math.random()*links.length);
    window.location.href = links[randomIndex];
});
document.getElementById("random-link2").addEventListener("click",function(event){
    event.preventDefault();
    var randomInd = Math.floor(Math.random()*oop_contact.length);
    window.location.href = oop_contact[randomInd];
});