class vacaToro{
    mensajeFelicidades(){
        return "Felicidades Adivinaste El codigo";
    }
    buscarTernera1(codigoSecreto,codigoIngresado){            
        const codVec1 = this.separarCodigo(codigoSecreto);
        const codVec2 = this.separarCodigo(codigoIngresado);
        let output="";
        for(var i = 0;i<codVec1.length;i++){
            if(codVec1.includes(codVec2[i]-1) || codVec1.includes(codVec2[i]+1)){
                output += "#";                
            }
        }
        return output;
    }
    buscarVacaToro(codigoSecreto,codigoIngresado){    
        let coonf = false;
        const codVec1 = this.separarCodigo(codigoSecreto);
        const codVec2 = this.separarCodigo(codigoIngresado);
        let output="";
        for(var i = 0;i<codVec1.length;i++){
            if(codVec1[i]==codVec2[i]){
                output += "!";
                coonf=true;
            }
            else{                
                if(codVec1.includes(codVec2[i])){
                    output += "*";
                    coonf=true;
                }else{
                    if(codVec1.includes(codVec2[i]-1) || codVec1.includes(codVec2[i]+1)){
                        output += "#";   
                        coonf=true;             
                    }
                }                                   
            }    
        }    
        if(coonf==false){
            output = "Codigo imcompatible";
        }                
        return output;
    }
   
    compararCodigo(codigoSecreto, codigoIngresado){
        let output = this.validarCodigo(codigoIngresado)
        if(codigoSecreto == codigoIngresado){
            output = this.mensajeFelicidades();
        }
        if(output != "Codigo Vacio" && codigoSecreto!=codigoIngresado){
            output = this.buscarVacaToro(codigoSecreto,codigoIngresado);            
        }
        return output;
    }

    separarCodigo(codigoSecreto){
        let numString = String(codigoSecreto);
        const array = []    
        for(var i = 0;i<numString.length;i++){
            let valInsert = +numString.charAt(i);
            array.push(valInsert);        
        }
        return array;
    }
     
    validarCodigo(codigo){
        if(codigo==""){
            return "Codigo Vacio";    
        }
        return codigo;
    }
}
export default vacaToro;