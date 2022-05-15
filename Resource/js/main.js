$(document).ready(function(){
    
    $(".stickyMenu").waypoint(function(direction){
        if (direction == "down"){
            $("nav").addClass("sticky");
        } else{
            $("nav").removeClass("sticky");
        }
    });
   var mixer = mixitup('.container'); 
});

function openNav(){
    document.getElementById("myNav").style.width = "100%";
}
function closeNav(){
    document.getElementById("myNav").style.width = "0%";
}
