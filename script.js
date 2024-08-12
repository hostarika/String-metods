// string
// number
// boolean

let ism = prompt("ism kiriting");

let harf = prompt("harf kiriting");

if (ism.toLocaleLowerCase().includes(harf)) {
    alert(`${ism} ismida ${harf} harifi bor`)
} else{
    alert(`${ism} ismida ${harf} harifi yoq`)
}