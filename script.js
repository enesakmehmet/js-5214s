function myFunction() {
    var x = document.getElementById("new-topnav");
    console.log(x.classList)
    if (x.className === "topnav") {
        x.classList.add = ("responsive");
        console.log(x.classList)
    } else {
        x.className = "topnav";
    }
}

myFunction()
