console.log('hello')
let age: number = 20;

let myName: string = 'ranjesh'
let employee: boolean = true;
let num: number[] = [1, 2, 3, 4, 5, 6]

enum Size { Small = 's', Medium = 'm', Large = 'l' }
let mySize: Size= Size.Large

console.log(Size.Medium)

function calculateTax(taxYear: number,rate : number,amount= 100,time?:number): number {
    if (time)
        
        
    return (taxYear * rate *amount)
}



let myemployee:{
    readonly id: number
    name: string,
    retire: (date:Date) =>void
} = {
    id:1,
    name: 'ranjesh',
    retire: (date: Date) => {
        console.log(date)
    }
}


type  Employee={
    readonly id: number
    name: string,
    retire: (date:Date) =>void
}

let memployee: Employee = {
    id: 1,
    name: 'ranjesh',
    retire: (date: Date) => {
        console.log(date)
    }
}

function convert(weight: number | string): number {
    //narrrowing
    if (typeof weight === 'number')
        return weight;
    else {
        return parseInt(weight)
    }

}

type Draggable = {
    drag: ()=> void
}
type Resizable = {
    resize: ()=> void
}

type Uiwidget = Resizable & Draggable;

type customer = {
    birthday : Date
}

function getCustomer(id: number): customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() }
        
}

let customer = getCustomer(0);
    if (customer !== null)
    console.log(customer?.birthday?.getFullYear())


    class Account {
        
        nickname?: string; 
        //optinal property

        constructor(public id: number, public owner: string, private _balance: number) {
            this.id = id;
            this.owner = owner;
            this._balance  = _balance
        }
        deposit(amount: number): void{
            this._balance = this._balance + amount;
        }
        //getter
       get  getBalance(){
            return this._balance
        }
        //setter
        set  setBalance(value: number) {
             this._balance = value
        }
}
    
let account = new Account(1, 'ranjesh', 100)
console.log(account)


class SeatAssignment {
    [seatNumber: string] : string
}
const seat = new SeatAssignment()
seat.A1 = "ranjesh"

class Ride {
    private static _activeRide: number = 0

    start() {
        Ride._activeRide++
    }
    stop() {
        Ride._activeRide--
    }

    static get activeRide() {
        return Ride._activeRide
    }


}

class Person{
    constructor(public firstName: string, public lastName: string) {
        
    }
    getFullName() {
        return this.firstName + this.lastName
    }
}

class Student extends Person{

    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName,lastName)
    }
    takeTest() {
        
    }
}
const st = new Student(1,'ranjesh','singh')