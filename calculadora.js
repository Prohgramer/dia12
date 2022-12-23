const btns= document.getElementById("container");
const pantalla= document.querySelector(".f1t1");

btns.addEventListener("click",(e)=>{
    e.stopPropagation();
    if(e.target.dataset.numero ){
            document.f1.f1t1.value += e.target.dataset.numero;
        
    }else if(e.target.dataset.operacion){
        let str=document.f1.f1t1.value
        let ultima_letra=str.slice(-1)
        if(ultima_letra=="+" || ultima_letra=="-" || ultima_letra=="/" || ultima_letra=="*" || ultima_letra==".") {
            console.log("Debes ingresar un numero despues de una operacion")
        }else{
            document.f1.f1t1.value += e.target.dataset.operacion;
        }
    }else if(e.target.dataset.igual){
        igual();
    }else if(e.target.dataset.limpiar=="clear"){
        eliminar();
    }else if(e.target.dataset.del){
        del()
    }
});

function igual(){
    let numero=(eval(document.f1.f1t1.value))
    document.f1.f1t1.value="";
    document.f1.f1t1.value=numero;
}

function eliminar(){
    document.f1.f1t1.value="";
}
function del(){
    let str=document.f1.f1t1.value;
    str=str.substring(0, str.length - 1);
    document.f1.f1t1.value=str;
}