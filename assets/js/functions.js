var container_home = document.getElementById("container-home");
var footer = document.getElementById("footer");
var manageContainerWidth = ()=>{
    if(menu.style.display == "none"){
        container_home.style.width = "100%";
        footer.style.width = "100%";

    }
    else{
        container_home.style.width = "75%";
        footer.style.width = "75%";
    }
}
