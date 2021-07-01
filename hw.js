 console.log("Hello")
 var a = window.prompt("Hello What's your name")
 var b = window.prompt("Ban sinh nam bao nhieu")


 if(isNaN(b)){console.log("invalid date of birth")}
 else{
     console.log("b la so")
 }
 if(isNaN(a)){console.log("a khong phai la so")}
 else{
    console.log("a la so")
 }
 var a = document.getElementById('test')
 var button = document.getElementById("ncc")
 var color = "black"
 button.addEventListener("click",()=> {
     if(color == "black"){
         a.style = "font-weight: bold"
     }
    
 else{
     a.style = "color : blue"
     color = "blue"
 
 }
 })