var n= document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttoninnerHTML=this.innerHTML;
        makeSound(buttoninnerHTML);
        animate(buttoninnerHTML);
        
    });
}
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    animate(event.key);
});

    function makeSound(key){
        switch (key) {
            case "w":
                //alert("w pressed")
                var tom1=new Audio("tom-1.mp3");
                tom1.play();
                //alert("w Played");
                break;
            case "a":
                var tom2=new Audio("tom-2.mp3");
                tom2.play();
                break;
                case "s":
                var tom3=new Audio("tom-3.mp3");
                tom3.play();
                break;
                case "d":
                var tom4=new Audio("tom-4.mp3");
                tom4.play();
                break;
                case "j":
                var snare=new Audio("snare.mp3");
                snare.play();
                break;
                case "k":
                var crash=new Audio("crash.mp3");
                crash.play();
                break;
                case "l":
                var kick=new Audio("kick-bass.mp3");
                kick.play();
                break;
            default:
                console.log("error");
                break;
        }
    }
    function animate(key){
        var keyPressed=document.querySelector("."+key);
        keyPressed.classList.add("pressed");

        setTimeout(function(){
            keyPressed.classList.remove("pressed");
        },150);
    }
