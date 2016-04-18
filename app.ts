class HelloWorld{
    
    constructor(public message: string){
    }
}

var hello = new HelloWorld('Howdy from ts');
console.log(hello.message);


//let is like var but only for within code block
//var is available all throughout the code
//let myString: string = 'this is a string';

function ReturnNumber(thenumber:number): number {
    return 42;
}

var xx: string = 'mysting';
var theNumber: boolean = true;

//

enum Category {
    None = 0,    
    First = 1,
    Second = 2,
    Third = 3,
}
var favCat: Category = Category.Second;
console.log(favCat); //5
var catString: string = Category[favCat];
console.log(catString);
//
var strArray: string[] = ['one', 'two', 'three'];
var strArray: Array<string> = ['one', 'two', 'three'];
var anyArray: any[] = [42, 'one', true];

//
//functions
function CreateCust(name: string, id: number): string{
    return name + id;
}

strArray.forEach(()=>console.log('Done'));
strArray.forEach( i =>console.log('Done with ' + i));

//function types
var x: number;
x = 5;

var IdGenerator: (chars: string, nums: number) => string;
IdGenerator = (name: string, id: number) => {return name + ' ' + id};

var myID: string = IdGenerator('dan', 30);
console.log(myID);
//
//optional and default parameters
//optional must appear after required parameters
function Create(name: string, age?: number){}
function GetBook(title: string = 'Typescript In-depth'){}

//rest parameters
function GetBooksReadForCust(name: string, ...bookIds: number[]){}
var books = GetBooksReadForCust('Don', 2, 5);
//or
var books = GetBooksReadForCust('Don', 2, 5, 12, 42);

//function overloads
function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];

function GetTitles(bookProperty: any): string[]{
    
    var foundTitles: string[] = [];
    
    if(typeof bookProperty == 'string'){
          foundTitles.push("string entry");
          foundTitles.push("string entry2");          
    }
    else if (typeof bookProperty == 'boolean'){
          foundTitles.push("boolean entry");
    }
    return foundTitles;
}

var x1: string[] = GetTitles('mystring');
var b1: string[] = GetTitles(true);

console.log('string: ' + x1);
console.log('bool: ' + b1);
x1.forEach(index => console.log('here it is: ' + index));
//
//interfaces
//duck typing
interface Book{
    id: number;
    pages?: number;
    
    markDamaged: (reason: string) => void;
}

function PrintBook(book: Book): void{
    console.log(book.id, book.markDamaged);
}

//not defining type so you would be able to pass to a method 
// that expects a Book type
//var duckBook = {
//    id: 4,
//    markDamaged: "flaw"
//}
//PrintBook(duckBook);
// i think option strict is causing error above


//
//see the difference in using an interface for the property markDamaged
//
//define interface for function  (changed to IBook to avoid compiler errors)
interface IBook{
    theId: number;
    markDamaged: IDamageLogger;
}

interface IDamageLogger{
    (reason: string): void;
}

//so you don't have to use other syntax (on the interface)
//export{IBook, IDamageLogger};    
// and at the top of the other module you can use this syntax:
//import{Book, DamageLogger} from './interfaces';


var myBook: Book = {
    id: 5,
    markDamaged: (reason: string) => console.log('Damaged: ' + reason)
};
//
interface IMotor{
    start: () => void;
}
class ChevyMotor implements IMotor{
    start(){
        console.log('Started chevy motor.')
    }
}
var myMotor: IMotor = new ChevyMotor();
myMotor.start();
//

//classes
//
class Library{
    constructor(public name: string){}
    static description: string = 'This is my lib.'
}
var lib = new Library("Pdx");
var name = lib.name;
var desc = Library.description;
console.log(name + ':' + desc);

// new way to concat strings
//console.log(`${this.prop} was published in ${this.year}.`);

//access modifiers

//must use this in front of all class props

//public by default but you can add public if you want
class ReferenceItem{
    
    private _publisher: string;
    static department = 'Research';  //always the same across any instance of the class
    
    //constructor(public title: string, private year: number){
    constructor(public title: string, private year: number){    //protected don't work!!
        console.log('constructor for ReferenceItem run.');
    }
    printItem(): void{console.log(this.title + ' was published in ' + this.year);}
    
    get publisher(): string{
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher: string){
        this._publisher = newPublisher;
    }
    
    //abstract printCitation(): void;  //abstract modifier not working
    
}

// var myPub = new ReferenceItem('MS Press', 1972);
// myPub.printItem();
// myPub.publisher = 'Random publisher';  //exercise the setter
// console.log(myPub.publisher);   //exercise the getter
// can't access the private year property

class Encyclopedia extends ReferenceItem {
    //edition: number;  //this line not needed now since it is in the constructor, it is a public prop
    // that gets automatically set with the value of the constructor...cleaner
    
    constructor(newTitle: string, newYear: number, public edition: number){
    super(newTitle, newYear);
    }

    //override methods inherited from a parent class
    // want it to do everything from parent class plus some
    printItem(): void{
        super.printItem();  //this will run the superclass version first then run the next line
                            // it is not necessary to do this, only doing it because we want to do both.
        console.log('Edition: ' + this.edition + ' ');}   //+ this.year won't work
     
     
    printCitation(): void {
        console.log('printed from abstract implementation');
    } 
}

var refBook = new Encyclopedia("my ref", 1972, 1);
refBook.printItem();

//can only instantiate a subclass of an abstract class
// but it is not working (combiling) mabye try compile to ES6??
//var refBookAbstract: ReferenceItem = new Encyclopedia('one',1972, 1);

//abstract classes
//abstract class myAbstractClass{      
//}

//
//class expressions   hmm don't likeit
//

//
//modules and namespaces
//


namespace  MyNameSpace{
    
    export function MyFunction(name: string){
        
    }
    
    
    //nested
    export namespace Cards{
        export function MyCardFunction(name: string){
            
        }
    }
    
    
}
MyNameSpace.MyFunction('my funct');
MyNameSpace.Cards.MyCardFunction('my name');

//

//triiple slash reference
///<reference path="membership.ts" />
