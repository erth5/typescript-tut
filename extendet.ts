class Extendet{
    //exports
    zusatz():void{
        console.log("Geschenk")
    }
    tun():void {
    console.log("ext tun")
    }
}
// export const pi = 3.14159 // auch möglich aber export lässt sich nicht einfach verwenden

//Vererbung
class spezial extends Extendet{
    art = "string"
    //Überschreiben von Methoden
    tun():void {
        console.log("spez tun")
    }
}
var bonus:spezial = new spezial()   //ersteres und zweiteres gleich oder oberklasse = new unterklasse
bonus.zusatz()
bonus.tun() // Hierarchie wird von unten begonnen

/*
Interface = Oberklasse, die man nicht verwenden kann, weil sie durch eine Unterklasse erst genauer spezifiziert werden soll.
Vor jedes Interface schreibt man I, eine Klasse kann mehrere Interfaces Implementieren.
 */
interface ISprache{
    //Veränderte Methode
    Satz:(length:number) => void
}
interface Wort extends ISprache{             //Das extends verwendet wird ist hier merkwürdig.
    Buchstabe:(character:string) => void
}
class Buchstabe implements Wort{
    Buchstabe(character: string): void {
        // TODO rumlachsen
    }

    Satz(length: number): void {
        //TODO envi defi
    }
}

/*
static - schreibt man vor eine variable, wenn sie im Gesamten Dokument nur einmal vorhanden sein soll
heißt keine Duplizierung bei Instanzen, Vererbung oder sonstigen

'static' modifier cannot appear on a module or namespace element - Nur in Klassen möglich

 */
class statia{
    static fresia:number = 29
}

/*  Nicht möglich
function stedia (zahl:number):void{
    static var fresi:number = 24
}
 */


// Zugriffmodifikatoren

class laufen{
    public schritt():void{                  //standard
        console.log("normalen Schritt getan")
    }
}

class tanzen{
    protected schritt():void{               //Darf nur in der selben Klasse und Unterklasse aufgerufen werden
        console.log("TanzSchritt getan")
    }
}

class hinfallen extends tanzen{
    private beine_über_Kreuz():void{        //Darf nur in der selben Klasse aufgerufen werden
        console.log(this.schritt() + " Klatsch")
    }
    public setHingefallen():void{           // set Funktion in der Beschränkungen sein könnten
        this.beine_über_Kreuz()
    }
}

var stolpern:hinfallen = new hinfallen()
stolpern.setHingefallen()

enum Richtung{ //Enumeration
    UP,
    DOWN,
    LEFT = 4,
    RIGHT,
    ACTION,
}
console.log(Richtung.ACTION)

// Festgelegter Wert
function ids(param: number): number{
    return param
}
// Generics
function idf <T> (param: T): T {
    return param
}
console.log(idf(42)) //Man kann alle möglichen Objekte einsetzten


// + Listen
function idk <T> (param: T[]): T {
    return param[0]
}
var arr:number[] = [32, 54, 6, 74]
console.log(idk(arr))


class Oberklasse{
    public blend(){
        console.log("blenda")
    }

}


// Generische Klassen -
class Container<V extends Oberklasse>{
    public element:V[]
    public getSome(param:V):V{
        return param
    }
    public Oberklassenutzen(index:number){
        this.element[index].blend()
    }
}

// @ts-ignore
var myGenClass: Container<number>;
// @ts-ignore
myGenClass = new Container<number>();
myGenClass.element                      //nicht kompatibel




//  mehrere generics
class Vert<K extends Container<any>, X >{
}
var myVert:Vert<any, number> = new Vert<any, number>()



// Symbole
var sym:Symbol = Symbol("erf")
var sym_:Symbol = Symbol("erf")

console.log("zwei gleich Zeichen: " + (sym == sym_))
console.log(sym === sym_)
// Verwendungszweck nicht ganz klar

// Schleife mit Ausgabe der Werten (nicht Index)
let someArray = [23, true, "hello mum"]
for (let i of someArray){
    console.log(i)
}

function test(){
    // nix
}
export {test as import_me}
// export * from "./function"
// es können auch zuvor importierte Daten exportiert werden,
// meist eine Datei die alle exporte, importe handelt

/* JQuery import
declare let $: JQuery:
export default $;
 */













