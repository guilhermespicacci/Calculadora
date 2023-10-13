
  
 

function CriaCalculadora() {
    inputDisplay = document.getElementById("display");
    this.inicia = () =>{
        this.getClick();
        this.getEnter();
    }
    this.getEnter = () =>{
      document.addEventListener("keyup", e =>{
        if (e.keyCode !== 13) return;
        else{
          this.fazConta();
        }
      })
    }
    this.getClick = () => {
        document.addEventListener("click",event =>{
        const tag = event.target;
       if (tag.classList.contains("btn-number")) {
        this.insereNumero(tag)
       }
       if(tag.classList.contains("btn-clear")){
        this.limpaInput() 
       }
       if (tag.classList.contains("btn-del")) {
        this.apagaUm()
       }
        if(tag.classList.contains("btn-equal") ){
           this.fazConta() 
        }
    })
        

    this.insereNumero = (el) => {    
      let numAdd = el.innerText;
      inputDisplay.value += numAdd
      console.log("Numero Adicionado")
  };
  this.limpaInput = () => {
    inputDisplay.value = ""
  }
  this.apagaUm = ()=>{
    inputDisplay.value = this.inputDisplay.value.slice(0,-1)
  }
  this.fazConta = () =>{ try {
    const resul = eval(inputDisplay.value);
    if (resul !== undefined && !isNaN(resul)) {
      inputDisplay.value = resul;
    } else {
      alert("Expressão Inválida");
    }
  } catch (e) {
    alert("Expressão Inválida");
  }}
 } 
};



calculadora = new CriaCalculadora
calculadora.inicia()