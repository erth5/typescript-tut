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
