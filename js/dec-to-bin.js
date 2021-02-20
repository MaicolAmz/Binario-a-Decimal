/*----------------- INICIO DE FUNCIONES DECLARADAS -----------------*/
    function decToBin(numero){
        if(Math.floor(numero/2)===0){
            result += numero%2;
        }else{
            decToBin(Math.floor(numero/2));
            result += numero%2;
        }
    }

    function validarFormulario2(formularioDeConversion){
        if(formularioDeConversion.value === ""){
            conversionResult2Text.classList.add('text-danger');
            conversionResult2Text.textContent = "Error, ingresa un número binario.";
        } else if(Number.isInteger(Number.parseInt(formularioDeConversion.value))){
            decToBin(Number.parseInt(formularioDeConversion.value));
            conversionResult2Text.classList.remove('text-danger');
            conversionResult2Text.textContent = `${formularioDeConversion.value} en binario es: ${result}`;
            result = "";
        } else if ( !Number.isInteger(formularioDeConversion.value) ){
            conversionResult2Text.classList.add('text-danger');
            conversionResult2Text.textContent = "Error, ingresa un número binario válido.";
        }
    }
/*----------------- FIN DE FUNCIONES DECLARADAS -----------------*/

/*----------------- INICIO DE VARIABLES -----------------*/
    const input2 = document.querySelector("#input-2");
    const button2 = document.querySelector("#button-2");
    const conversionResult2 = document.querySelector(".conversion-result-2");
    const conversionResult2Text = document.querySelector("#resultado2");
    let result = "";
/*----------------- FIN DE VARIABLES -----------------*/

/*----------------- INICIO DE ADD EVENT LISTENERS -----------------*/
    button2.addEventListener("click", ()=>{
        validarFormulario2(input2);
    })
/*----------------- FIN DE ADD EVENT LISTENERS -----------------*/