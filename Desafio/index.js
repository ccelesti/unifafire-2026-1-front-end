console.log("teste");

document.getElementById("btnC1").addEventListener("click", function(event) {
    const target = event.target
    alert("Clicou!"); 
    if(target.style.backgroundColor == "rgba(0, 128, 0, 0.733)"){
        target.style.backgroundColor = "gainsboro"    
    } else {
      target.style.backgroundColor = "rgba(0, 128, 0, 0.733)";
    }
});

document.getElementById("btnC2").addEventListener("click", function(event) {
    const target = event.target
    alert("Clicou!"); 
    if(target.style.backgroundColor == "rgba(0, 128, 0, 0.733)"){
        target.style.backgroundColor = "gainsboro"    
    } else {
      target.style.backgroundColor = "rgba(0, 128, 0, 0.733)";
    }
});

document.getElementById("btnC3").addEventListener("click", function(event) {
  const target = event.target
  alert("Clicou!");
  if(target.style.backgroundColor == "rgba(0, 128, 0, 0.733)"){
      target.style.backgroundColor = "gainsboro"    
  } else {
    target.style.backgroundColor = "rgba(0, 128, 0, 0.733)";
  }
});

document.getElementById("btn").addEventListener("click", function(event) {
  const target = event.target
  alert("Clicou!");
});
