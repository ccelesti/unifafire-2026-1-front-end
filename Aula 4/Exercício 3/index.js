document.getElementById("btn").addEventListener("click", function() {
    const box = document.querySelector(".box");

    if(box.style.backgroundColor === "green"){
        box.style.backgroundColor = "red";
    } else {
        box.style.backgroundColor = "green";
    }
});