"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HelloWorld = (function () {
    function HelloWorld(message) {
        this.message = message;
    }
    return HelloWorld;
}());
var hello = new HelloWorld('Howdy from ts');
console.log(hello.message);
//let is like var but only for within code block
//var is available all throughout the code
//let myString: string = 'this is a string';
function ReturnNumber(thenumber) {
    return 42;
}
var xx = 'mysting';
var theNumber = true;
//
var Category;
(function (Category) {
    Category[Category["None"] = 0] = "None";
    Category[Category["First"] = 1] = "First";
    Category[Category["Second"] = 2] = "Second";
    Category[Category["Third"] = 3] = "Third";
})(Category || (Category = {}));
var favCat = Category.Second;
console.log(favCat); //5
var catString = Category[favCat];
console.log(catString);
//
var strArray = ['one', 'two', 'three'];
var strArray = ['one', 'two', 'three'];
var anyArray = [42, 'one', true];
//
//functions
function CreateCust(name, id) {
    return name + id;
}
strArray.forEach(function () { return console.log('Done'); });
strArray.forEach(function (i) { return console.log('Done with ' + i); });
//function types
var x;
x = 5;
var IdGenerator;
IdGenerator = function (name, id) { return name + ' ' + id; };
var myID = IdGenerator('dan', 30);
console.log(myID);
//
//optional and default parameters
//optional must appear after required parameters
function Create(name, age) { }
function GetBook(title) {
    if (title === void 0) { title = 'Typescript In-depth'; }
}
//rest parameters
function GetBooksReadForCust(name) {
    var bookIds = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIds[_i - 1] = arguments[_i];
    }
}
var books = GetBooksReadForCust('Don', 2, 5);
//or
var books = GetBooksReadForCust('Don', 2, 5, 12, 42);
function GetTitles(bookProperty) {
    var foundTitles = [];
    if (typeof bookProperty == 'string') {
        foundTitles.push("string entry");
        foundTitles.push("string entry2");
    }
    else if (typeof bookProperty == 'boolean') {
        foundTitles.push("boolean entry");
    }
    return foundTitles;
}
var x1 = GetTitles('mystring');
var b1 = GetTitles(true);
console.log('string: ' + x1);
console.log('bool: ' + b1);
x1.forEach(function (index) { return console.log('here it is: ' + index); });
function PrintBook(book) {
    console.log(book.id, book.markDamaged);
}
exports.PrintBook = PrintBook;
//so you don't have to use other syntax (on the interface)
//export{IBook, IDamageLogger};    
// and at the top of the other module you can use this syntax:
//import{Book, DamageLogger} from './interfaces';
var myBook = {
    id: 5,
    markDamaged: function (reason) { return console.log('Damaged: ' + reason); }
};
var ChevyMotor = (function () {
    function ChevyMotor() {
    }
    ChevyMotor.prototype.start = function () {
        console.log('Started chevy motor.');
    };
    return ChevyMotor;
}());
var myMotor = new ChevyMotor();
myMotor.start();
//
//classes
//
var Library = (function () {
    function Library(name) {
        this.name = name;
    }
    Library.description = 'This is my lib.';
    return Library;
}());
var lib = new Library("Pdx");
var name = lib.name;
var desc = Library.description;
console.log(name + ':' + desc);
// new way to concat strings
//console.log(`${this.prop} was published in ${this.year}.`);
//access modifiers
//must use this in front of all class props
//public by default but you can add public if you want
var ReferenceItem = (function () {
    //constructor(public title: string, private year: number){
    function ReferenceItem(title, year) {
        this.title = title;
        this.year = year;
        console.log('constructor for ReferenceItem run.');
    }
    ReferenceItem.prototype.printItem = function () { console.log(this.title + ' was published in ' + this.year); };
    Object.defineProperty(ReferenceItem.prototype, "publisher", {
        get: function () {
            return this._publisher.toUpperCase();
        },
        set: function (newPublisher) {
            this._publisher = newPublisher;
        },
        enumerable: true,
        configurable: true
    });
    ReferenceItem.department = 'Research'; //always the same across any instance of the class
    return ReferenceItem;
}());
exports.MyStuff = ReferenceItem;
// var myPub = new ReferenceItem('MS Press', 1972);
// myPub.printItem();
// myPub.publisher = 'Random publisher';  //exercise the setter
// console.log(myPub.publisher);   //exercise the getter
// can't access the private year property
var Encyclopedia = (function (_super) {
    __extends(Encyclopedia, _super);
    //edition: number;  //this line not needed now since it is in the constructor, it is a public prop
    // that gets automatically set with the value of the constructor...cleaner
    function Encyclopedia(newTitle, newYear, edition) {
        _super.call(this, newTitle, newYear);
        this.edition = edition;
    }
    //override methods inherited from a parent class
    // want it to do everything from parent class plus some
    Encyclopedia.prototype.printItem = function () {
        _super.prototype.printItem.call(this); //this will run the superclass version first then run the next line
        // it is not necessary to do this, only doing it because we want to do both.
        console.log('Edition: ' + this.edition + ' ');
    }; //+ this.year won't work
    Encyclopedia.prototype.printCitation = function () {
        console.log('printed from abstract implementation');
    };
    return Encyclopedia;
}(ReferenceItem));
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
// namespace is now the equivalent of the internal module
// do not use it if you are building the file to be a module
// if you want it to be a module just remove the namespace
var MyNameSpace;
(function (MyNameSpace) {
    function MyFunction(name) {
    }
    MyNameSpace.MyFunction = MyFunction;
    //nested
    var Cards;
    (function (Cards) {
        function MyCardFunction(name) {
        }
        Cards.MyCardFunction = MyCardFunction;
    })(Cards = MyNameSpace.Cards || (MyNameSpace.Cards = {}));
})(MyNameSpace || (MyNameSpace = {}));
MyNameSpace.MyFunction('my funct');
MyNameSpace.Cards.MyCardFunction('my name');
//
//triiple slash reference
///<reference path="membership.ts" />
//export statement
//don't have to specifically decorate the function/class with export
//  the as will export with a name or a different name)
//importing from a module
//import{blah, blah as myjunk} from './blah'; 
//import * as mag from './blah'    //this will import everything
//if a class is surrounded by a namespace, then to use it as a module
// you will need to clean it up by removing namespace
//
//modules are the future - so don't use namespace, make eveything 
// a module.
// can have one default export
var default_1 = (function () {
    function default_1() {
    }
    return default_1;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
//import MyDefaultClass from './myclass';   //no curly brace needed
//var myClassImported = new MyDefaultClass();
//
//generic functions
//
function LogAndReturn(thing) {
    console.log(thing);
    return thing;
}
var someString = LogAndReturn('log it');
var Magazine = (function () {
    function Magazine(title) {
        this.title = title;
    }
    return Magazine;
}());
var BookNook = (function () {
    function BookNook() {
    }
    return BookNook;
}());
var newMag = new Magazine("my title");
var someMag = LogAndReturn(newMag);
//
//above example not quite correct
//
function Purge(inventory) {
    return inventory.splice(2, inventory.length);
}
exports.Purge = Purge;
var inventory = [
    { id: 1, title: 'Howdy one' },
    { id: 2, title: 'Howdy two' },
    { id: 3, title: 'Howdy three' },
    { id: 4, title: 'Howdy four' }];
var purged = Purge(inventory);
purged.forEach(function (book) { return console.log(book.title); });
var purgedNums = Purge([1, 2, 3, 4]);
console.log(purgedNums);
//# sourceMappingURL=app.js.map