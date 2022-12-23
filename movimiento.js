function funcion_cuadratica_positivo(a,b,c){
    return (-b+Math.sqrt(Math.pow(b,2)-4*a*c))/2*a;
}
console.log(funcion_cuadratica_positivo(1,2,-8));

function funcion_cuadratica_negativo(a,b,c){
    return (-b-Math.sqrt(Math.pow(b,2)-4*a*c))/2*a;
}
console.log(funcion_cuadratica_negativo(1,2,-8));

function inner(id,str){
    document.getElementById(id).innerHTML=str;
}
inner("primero","hola");

function inner2(id){
    
    document.getElementById(id).innerHTML=Math.floor(Math.random()*(100-1+1)+1);;
}
inner2("segundo");

