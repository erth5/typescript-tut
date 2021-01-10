function fkt (zahl:number):Boolean{
    return zahl > 42
}

function fv (zahl:number):void{
    console.log(zahl)
}

// null                 Hat Wert, Wert ist Null
// undefined            Es gibt kein Wert
var mss:string = 'hello string'
var mgg:any = null          //any ist standard, configured auto

var luise:number[] = [43,563,6734]
console.log(luise[2])

var uno:number|string = 42
console.log(typeof uno)
uno = "hello union"
console.log(typeof uno)
// uno = true               erzeugt Fehler

