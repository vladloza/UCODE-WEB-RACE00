const KEY_VALUE = "KEY_VALUE"
let $history = document.getElementsByClassName("history")[0];
let $result = document.getElementsByClassName("result")[0];

function insert(number) {
    let $result = document.getElementsByClassName("result")[0];
    console.log(number);
    console.log($result.value);
        if ($result.value == "") {
            $result.value = "";
        }
        $result.value += number;

}
function dot(){
    let $result=document.getElementsByClassName("result")[0];
    let example = $result.value.split(' ');
    console.log(example);
    if($result.value!=""&&$result.value.indexOf(".")==-1)
    {
        $result.value += ".";
    }
}
function sqrt(){
    let $result = document.getElementsByClassName("result")[0];
    $result.value=Math.sqrt($result.value).toFixed(5);
    $history.value="";
}
function operation(value) {
    let x = !$history.value.slice(-1);
    console.log(x);
    if ($result.value == 0) {
        $result.value = "";
    } else if (x !== "+" && x !== "*" && x !== "-" && x !== "%" && x !== "÷" &&x!=="^") {
        if ($history.value == "") {
            $history.value = "";
        }
        $history.value += $result.value;
        $history.value =$history.value+' '+ value+' ';
        $result.value = "";

    }
}
function deegre(){
    let $result = document.getElementsByClassName("result")[0];
    $result.value+=' ^ ';
    
}
function factorial(){
    let $result = document.getElementsByClassName("result")[0];
    let f=1;
    for(let i =1;i<=$result.value;i++){
        f=f*i;
    }
    $result.value=f;
    // $history.value="";
}
function percent() {
    $result.value = Number($result.value) / 100;
    $history.value = "";
}

function plus_and_min() {
    $history.value = "";
    $result.value = (-1) * Number($result.value);
}

function clean() {
    $history.value = "";
    $result.value = "";
}

function answer() {
    if($result.value!=="" && $history.value!==""){
    $history.value += $result.value;
    
    let example=$history.value.split(' ');
    l(example);
    let x=example[example.length-1]===""?example[example.length-2]:example[example.length-1];
    l(x)
    if (x == "+" || x == "*" || x == "-" || x == "%" || x == "÷" ||x=="^" ||x == "/"){
        example.splice(example.length-2,1)
        console.log("example"+ example);
    }
     if(example.indexOf('^')==-1){
        $result.value = String(eval(example.join('')));
     }
     else{
        $result.value=eval(replace(example,"^",(prev,next)=>{
            return Math.pow(prev,next);
        }).join(''));
    }
    $history.value = "";
}
}

function parseNumToNSystem(n) {
    $result.value = parseInt($result.value).toString(n)
}
function saveValue() {
    localStorage.setItem(KEY_VALUE, $result.value)
}

function displaySavedValue(num) {
    $result.value = Number(localStorage.getItem(KEY_VALUE)) + num
}

function displaySavedValueSumResult(num) {
    $result.value = Number(localStorage.getItem(KEY_VALUE)) + $result.value * num
}
l(replace(["1","2","^","2","^","2"],'^',(prev,next)=>{
    // l("prev " + prev)
    // l("next " + next)
    const res = Math.pow(prev,next)
    // l("res = " + res)
    return res
}).join(''))
l("1 ".split(' '))
function replace(listStr,char,fun){
    while(true){
        const i = listStr.indexOf(char)
        // l("i = " + i)
        if(i===-1) break;
        // l("before " + listStr )
        listStr[i] = fun(listStr[i-1],listStr[i+1])
        // l("af " + listStr )
        listStr.splice(i+1,1)
        listStr.splice(i-1,1)
    }
    return listStr
}

function l(s) {
    console.log(s)
}