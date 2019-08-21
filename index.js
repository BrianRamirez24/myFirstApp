

function validarEdad(){
    
   let nombre = document.getElementById("txtNombre").value;
   let veg  = document.getElementById("veg");
   let noveg = document.getElementById("noveg");
   let edad = parseInt(document.getElementById("edad").value);
   let controlVegetariano;
  

        if(nombre == ''){
            alert("debe ingresar un nombre");
            document.getElementById("txtNombre").focus();
        }
        
        else if(isNaN(edad)){
            alert("debe ingresar su edad");
            document.getElementById("edad").focus();
        }
        
        else if(veg.checked == false && noveg.checked == false){
           
            alert("debe seleccionar si es o no vegetariano");
          
        }
        
        else {

            if(veg.checked){
                controlVegetariano = true;
            }
            else {
                controlVegetariano = false;
            }
    
                for(let i=1; i<=edad; i++ ){
                    
                    if(i == edad) {
                        
                        if(parseInt(edad)>17 && controlVegetariano){
                            alert("hola soy " +nombre +" soy mayor de edad  y soy vegetariano");
                        }
                        else if(parseInt(edad)>17 && controlVegetariano == false) {
                        alert("hola soy " +nombre +" soy mayor de edad  y no soy vegetariano");
                        }
                        else if(parseInt(edad)<=17 && controlVegetariano) {                     
                        alert("hola soy " +nombre +" soy menor de edad  y soy vegetariano");
                        }
                        else if(parseInt(edad)<=17 && controlVegetariano == false){
                        alert("hola soy " +nombre +" soy menor de edad  y no soy vegetariano");
                        }

                    }
                 
                }

        }
        
        
}

function generarAleatorios(){
    
    return Math.floor(10 * Math.random());
}

function numerosAleatorios(){
    
    let aleatorio1 = generarAleatorios();
    let aleatorio2 = generarAleatorios();
    let aleatorio3 = generarAleatorios();
    
    alert("la suma de 2 numeros aleatorios es: " + 
           sumarDosNumeros(aleatorio1, 
                           aleatorio2));

    alert("la suma de 3 numeros aleatorios es: " + 
           sumarTresNumeros(aleatorio1, 
                            aleatorio2, 
                            aleatorio3));
    
    
    alert("la resta de 2 numeros aleatorios es: " + 
           restarNumeros(aleatorio1, 
                         aleatorio2));

    alert("la multiplicacion de 2 numeros aleatorios es: " + 
           multiplicarDosNumeros(aleatorio1, 
                                  aleatorio2));
                            

    alert("la multiplicacion de 3 numeros aleatorios es: " + 
            multiplicarTresNumeros(aleatorio1, 
                                   aleatorio2,
                                   aleatorio3));

    alert("la division de 2 numeros aleatorios es: " + 
             dividirNumeros(aleatorio1, 
                            aleatorio2));
                            
}


function sumarDosNumeros(a, b){
    return a+b;
}
function sumarTresNumeros(a,b,c){
    return a+b+c;
}
function restarNumeros(a, b){
    return a-b;
}
function multiplicarDosNumeros(a,b){
    return a*b;
}
function multiplicarTresNumeros(a,b,c){
    return a*b*c;
}
function dividirNumeros(a,b){
    while(b==0){
        b = generarAleatorios();
    }
    return a/b;
}