function cal(){

    let x = parseFloat(document.getElementById("num1").value);
    let y = parseFloat(document.getElementById("num2").value) ;
    let op = parseInt(document.getElementById("op").value);
    let total ;

    if(op ==1){
         total = x+y;
    }
    else if(op ==2){
        total = x-y;
    }
    else if(op == 3){
        total = x*y;
    }
    else if(op == 4){
        total = x/y;
    }
    else{
            alert("Wrong Input !!");
    }
    

    document.getElementById("total").innerHTML =total;
}