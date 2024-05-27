

let img=document.getElementById("flower")
let yesButton=document.getElementById("yes")
let noButton=document.getElementById("no")
let flower=document.getElementsByClassName('flower')[0]
console.log(flower)

function vanish(){
    yesButton.style.display="none"
    noButton.style.display="none"
    document.getElementById("headLine").style.display="none"
    document.getElementById("button-container").style.display="none"


    flower.style.display="block"

    img.style.display="block"
    console.log("none")


}

function change(){
    let x=Math.random()*window.innerWidth
    let y=Math.random()*window.innerHeight

    console.log(x,"=",  window.innerWidth,y,"=",window.innerHeight)
    noButton.style.position="absolute"
    noButton.style.left=x +"px";
    noButton.style.top=y +"px";
    console.log("CHANGES BUTTON LOCATION")
}



// javascript for flower Animation


