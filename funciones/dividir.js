const dividir = (divisor,dividiendo) =>{
    if (divisor === 0){
     return "nose puede dividir por cero 0 !!"; 
    }
    const resultado = dividiendo / divisor;
    return resultado; 
}

module.exports= dividir;