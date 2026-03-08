function toggleMenu(){
  let menu = document.querySelector("nav"); // seleciona o nav
  if(menu.style.display === "flex"){
    menu.style.display = "none";
  }else{
    menu.style.display = "flex";
  }
}