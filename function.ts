// import {bonus} from "./extendet";

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

class apartment{
    width:number
    height:number
    rooms:number
    balkon:boolean

    constructor(z:number) {     // = sehr spezielle Methode, die wenn das Objekt erstellt wird greift
    this.rooms = z              // Das muss nun eingegeben werden
    }


    methoge():number{
        if (this.height && this.width){
            return this.width + this.height
        } //wird je Instanz berechnet
        else {
            return 0
        }
    }
}
var my_apartment:apartment = new apartment(3)
console.log(my_apartment.balkon)
my_apartment.balkon = true
my_apartment.rooms = 3              //Fällt durch constructor weg
my_apartment.width = 300
my_apartment.height = 200
console.log(my_apartment.methoge())

var my_house:apartment = new apartment(2)
my_apartment.width = 300
console.log(my_house.methoge())











