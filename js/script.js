const KEY_VALUE = "KEY_VALUE"
let $history = document.getElementsByClassName("history")[0];
let $result = document.getElementsByClassName("result")[0];

function insert(number, output) {
    let $result = document.getElementsByClassName(output)[0];
    console.log(number);
    console.log($result.value);
    if ($result.value == "") {
        $result.value = "";
    }
    $result.value += number;

}

function dot(output) {
    let $result = document.getElementsByClassName(output)[0];
    let example = $result.value.split(' ');
    console.log(example);
    if ($result.value != "" && $result.value.indexOf(".") == -1) {
        $result.value += ".";
    }
}

function sqrt() {
    let $result = document.getElementsByClassName("result")[0];
    $result.value = Math.sqrt($result.value).toFixed(5);
    $history.value = "";
}

function operation(value) {
    let x = !$history.value.slice(-1);
    console.log(x);
    if ($result.value == 0) {
        $result.value = "";
    } else if (x !== "+" && x !== "*" && x !== "-" && x !== "%" && x !== "÷" && x !== "^") {
        if ($history.value == "") {
            $history.value = "";
        }
        $history.value += $result.value;
        $history.value = $history.value + ' ' + value + ' ';
        $result.value = "";

    }
}

function factorial() {
    let $result = document.getElementsByClassName("result")[0];
    let f = 1;
    for (let i = 1; i <= $result.value; i++) {
        f = f * i;
    }
    $result.value = f;
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

function clean(result, history) {
    document.getElementsByClassName(result)[0].value = "";
    document.getElementsByClassName(history)[0].value = "";
}

function answer() {
    if ($history.value !== "") {
        if ($result.value !== "")
            $history.value += $result.value;
        let example = $history.value.split(' ');
        l(example);
        let x = example[example.length - 1] === "" ? example[example.length - 2] : example[example.length - 1];
        l(x)
        if (x == "+" || x == "*" || x == "-" || x == "%" || x == "÷" || x == "^" || x == "/") {
            example.splice(example.length - 2, 1)
            console.log("example" + example);
        }
        if (example.indexOf('^') == -1) {
            $result.value = String(eval(example.join('')));
        } else {
            $result.value = eval(replace(example, "^", (prev, next) => {
                return Math.pow(prev, next);
            }).join(''));
        }
        $history.value = "";
    }
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

l(replace(["1", "2", "^", "2", "^", "2"], '^', (prev, next) => {
    const res = Math.pow(prev, next)
    return res
}).join(''))

function replace(listStr, char, fun) {
    while (true) {
        const i = listStr.indexOf(char)
        if (i === -1) break;
        listStr[i] = fun(listStr[i - 1], listStr[i + 1])
        listStr.splice(i + 1, 1)
        listStr.splice(i - 1, 1)
    }
    return listStr
}

function l(s) {
    console.log(s)
}

const mapLenght = new Map()

mapLenght.set("cm", "1")
    .set("m", "100")
    .set("km", "100000")
const mapWeigth = new Map()
mapWeigth.set("g", "1")
    .set("kg", "1000")
    .set("ton", "1000000")
const mapArea = new Map()
mapArea.set("square centimeters", "1")
    .set("square meter", "10000")
    .set("square kilometers", "100000000")
    .set("hectares", "100000000")

    const mapNum = new Map()
    mapNum.set("binary", "2")
        .set("decimal", "10")
        .set("hexadecimal", "16")


function convertToDef(map, value, key) {
    return value / map.get(key)
}

function convertDefToValue(map, value, key) {
    return value * map.get(key)
}

function convert(map, from, to, value) {
    return map.get(from) / map.get(to) * value
}

function onConvert(map, selectFrom, selectTo, inputConvert, outputConvert) {
    l(map)
    let from = document.getElementById(selectFrom).value;
    let to = document.getElementById(selectTo).value;
    let input = document.getElementById(inputConvert)
    let output = document.getElementById(outputConvert)
    output.value = convert(map, from, to, input.value)
}

function parseNumToNSystem(n) {
    $result.value = parseInt($result.value).toString(n)
}

const fromNumeral = (number, type) => parseInt(number, type)

const toNumeral = (number, type) => (number >>> 0).toString(type).toUpperCase()

l(toNumeral('5', 2).toString())


function onSelect(input, output, type) {
    clean(input, output)
    for (let el of document.getElementsByClassName("hex-")) {
        el.style.display = "none"
    }
    let listEl
    switch (type) {
        case "bin":
            listEl = document.getElementsByClassName("bin")
            break
        case "dec":
            listEl = document.getElementsByClassName("dec")
            break
        case "hex":
            listEl = document.getElementsByClassName("hex")
            break
    }
    for (let el of listEl) {
        el.style.display = "none"
    }
}