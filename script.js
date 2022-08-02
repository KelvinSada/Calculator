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
  switch(e.target.innerText){
        case "AC":
            screenDisplay.innerText ='';
         break
         case "%":
            screenDisplay.innerText = eval(screenDisplay.innerText/100)
            if (screenDisplay.innerText.length > 10){
                screenDisplay.innerText = (screenDisplay.innerText.slice(0,10)+"..");
                 }
            break
            case "+/-":
            screenDisplay.innerText = eval(screenDisplay.innerText*-1);
            break
        case "=":
            try{
                screenDisplay.innerText = eval(screenDisplay.innerText)
                if (screenDisplay.innerText.length > 9 && screenDisplay.innerText.includes(".")){
                    screenDisplay.innerText = (screenDisplay.innerText.slice(0,9));
                }
                 else if (screenDisplay.innerText.length > 9){
                screenDisplay.innerText = (screenDisplay.innerText.slice(0,8)+"..");
                 }
                }
            catch{
                screenDisplay.innerText ="Error!"
            }
        break
        default:
            screenDisplay.innerText+=e.target.innerText;                                      //to get only the textContent in the div,its better than this.innerHTML becasue it wont show you children div only text content
            if (screenDisplay.innerText.length >= 9){
                if(screenDisplay.innerText.includes("+") || screenDisplay.innerText.includes("-") || screenDisplay.innerText.includes("*")|| screenDisplay.innerText.includes("/")){
                    screenDisplay.innerText = (screenDisplay.innerText.slice(0,11));
                 }
                 else{
                    screenDisplay.innerText = (screenDisplay.innerText.slice(0,8));
                 }
              }
     }    
      
})
})
// if(screenDisplay.innerText.length > 10){
//     screenDisplay.innerText = screenDisplay.innerText.slice(-1,screenDisplay.innerText.length);
// }
















