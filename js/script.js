let $history=document.getElementsByClassName("history")[0];
let $result=document.getElementsByClassName("result")[0];
function insert(number){
    let $result=document.getElementsByClassName("result")[0];
    console.log(number);
    console.log($result.value);
    if($result.value==0.00){
        $result.value="";
    }
    $result.value +=number;

}
let operat;
function operation(value){
    operat=value;
    let x=!$history.textContent.slice(-1);
    console.log(x);
    if ($result.value == 0) {
        $result.value = "";
    } else 
    if (x !== "+" && x !== "*" &&x !== "-"&& x !== "%"&& x !== "÷" ) {
        if($history.value==0.00){
            $history.value="";
        } 
        $history.value += $result.value;
        $history.value += value;
        $result.value = "";
      }
}
function percent(){
    $result.value=Number($result.value)/100;
    $history.value="";
}
function plus_and_min(){
    $history.value="";
    $result.value=(-1)*Number($result.value);
}
function clean(){
    $history.value="0.00";
    $result.value="0.00";
}
function answer(){
    $history.value+=$result.value;
    console.log(eval($history.value));
    $result.value=Number(eval($history.value));
    $history.value="";
}