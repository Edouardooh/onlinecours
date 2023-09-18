var menu = document.getElementById("menu");
var listenerFonctions = {
    closeCours: ()=>{
        menu.style.display = "none";
        var openCoursIcon = document.getElementById("open")
        openCoursIcon.style.display="block";
        manageContainerWidth();
    },
    openCours: (event)=>{
        menu.style.display = "block";
        event.target.style.display = "none";
        manageContainerWidth();
    }

}


var stupListeners = ()=>{
    var closeCoursIcon = document.getElementById("close");
    var openCoursIcon = document.getElementById("open");
    closeCoursIcon ? closeCoursIcon.onclick = listenerFonctions.closeCours : null;
    openCoursIcon ? openCoursIcon.onclick = listenerFonctions.openCours : null;
}