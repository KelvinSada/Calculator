const numbersKey = document.querySelectorAll("[data]")
// const operationsKey = document.querySelectorAll("[data-operation]")
// const clearsKey = document.querySelector("[data-clear]")
// const equalToKey = document.querySelector("[data-equals]")
const screenDisplay = document.querySelector("[data-screen]")

function removeLast (string){
    string =string.slice(0,-1);
}

numbersKey.forEach(n =>{n.addEventListener("click", (e) =>{
//    for (i=screenDisplay.length;i>=10;i--){
//     screenDisplay.innerText = screenDisplay.innerText.length(i);
//    }
    
      if (screenDisplay.innerText.length >= 10){
        screenDisplay.innerText = (screenDisplay.innerText.slice(0,9));
      }
     switch(e.target.innerText){
        case "AC":
            screenDisplay.innerText ='';
         break
         case "%":
            screenDisplay.innerText = eval(screenDisplay.innerText/100)
             if (screenDisplay.innerText.length > 10){
                screenDisplay.innerText = (screenDisplay.innerText.slice(0,9)+"..");
                 }
            break
            case "+/-":
            screenDisplay.innerText = eval(screenDisplay.innerText*-1);
            break
        case "=":
            try{
                screenDisplay.innerText = eval(screenDisplay.innerText)
                if (screenDisplay.innerText.length > 10){
                screenDisplay.innerText = (screenDisplay.innerText.slice(0,9)+"..");
                 }
                }
            catch{
                screenDisplay.innerText ="Error!"
            }
        break
        default:
            screenDisplay.innerText+=e.target.innerText;
     }  

})
})
// if(screenDisplay.innerText.length > 10){
//     screenDisplay.innerText = screenDisplay.innerText.slice(-1,screenDisplay.innerText.length);
// }
















