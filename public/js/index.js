let  acceptButton = document.getElementById("accept")
let felicidades =  document.getElementById("felicidades")

acceptButton.addEventListener('click', function (event) {
    console.log(1)
    document.body.classList.add("accept-blur");
    felicidades.classList.add("unblur");
});