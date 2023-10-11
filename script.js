
  
 

function CriaCalculadora() {
    this.inputDisplay = document.getElementById("display");
    this.inicia = () =>{
        this.getClick()
        
    }

    this.getClick = () => {
        document.addEventListener("click",event =>{
        const tag = event.target;
       if (tag.classList.contains("btn-number")) {
        (insereNumero = () => {
            
            
            let numAdd = tag.innerText;
            this.inputDisplay.value += numAdd
            console.log("Numero Adicionado")
        })();
       }
       if(tag.classList.contains("btn-clear")){
        this.inputDisplay.value = ""
       }
       if (tag.classList.contains("btn-del")) {
        this.inputDisplay.value = this.inputDisplay.value.slice(0,-1)
       }
        if(tag.classList.contains("btn-equal") ){
            try {
                const resul = eval(this.inputDisplay.value);
                if (resul !== undefined && !isNaN(resul)) {
                  this.inputDisplay.value = resul;
                } else {
                  alert("Expressão Inválida");
                }
              } catch (e) {
                alert("Expressão Inválida");
              }
        }
    })
        

    
};
};


calculadora = new CriaCalculadora
calculadora.inicia()