/*----------------- INICIO DE FUNCIONES DECLARADAS -----------------*/
    function binToDec(numero,ind,rel){
        if(numero.length === ind+1){
            result += Number.parseInt(numero[ind])+2*rel;
        }else{
            binToDec(numero, ind+1, Number.parseInt(numero[ind])+2*rel);
        }
    }
    
    function validarFormulario1(formularioDeConversion){    
        if(!/\b[01]+\b/.test(formularioDeConversion.value) && formularioDeConversion.value !== ""){
            conversionResult1Text.textContent = "Error, solo pude ingresar numeros del 0 al 1";
            conversionResult1Text.classList.add('text-danger');
        }else if(formularioDeConversion.value === ""){
            conversionResult1Text.classList.add('text-danger');
            conversionResult1Text.textContent = "Error, ingresa un numero binario";
        }else if(Number.isInteger(Number.parseInt(formularioDeConversion.value)) && /\b[01]+\b/.test(formularioDeConversion.value)){ //expresion regular usado /\b[01]+\b/  https://stackoverflow.com/questions/55093033/regex-to-describe-binary-numbers
            binToDec(formularioDeConversion.value, 0, 0);
            conversionResult1Text.classList.remove('text-danger');
            conversionResult1Text.textContent = `${formularioDeConversion.value} en decimal es: ${result}`;
            result = "";
        }
    }
/*----------------- FIN DE FUNCIONES DECLARADAS -----------------*/

/*----------------- INICIO DE VARIABLES -----------------*/
    const input1 = document.querySelector("#input-1");
    const button1 = document.querySelector("#button-1");
    const conversionResult1 = document.querySelector(".conversion-result-1");
    const conversionResult1Text = document.querySelector("#resultado1");
/*----------------- FIN DE VARIABLES -----------------*/

/*----------------- INICIO DE ADD EVENT LISTENERS -----------------*/
    button1.addEventListener("click", ()=>{
        validarFormulario1(input1);
    })
/*----------------- FIN DE ADD EVENT LISTENERS -----------------*/