var _a;
console.log('hello');
var age = 20;
var myName = 'ranjesh';
var employee = true;
var num = [1, 2, 3, 4, 5, 6];
var Size;
(function (Size) {
    Size["Small"] = "s";
    Size["Medium"] = "m";
    Size["Large"] = "l";
})(Size || (Size = {}));
var mySize = Size.Large;
console.log(Size.Medium);
function calculateTax(taxYear, rate, amount, time) {
    if (amount === void 0) { amount = 100; }
    if (time)
        return (taxYear * rate * amount);
}
var myemployee = {
    id: 1,
    name: 'ranjesh',
    retire: function (date) {
        console.log(date);
    }
};
var memployee = {
    id: 1,
    name: 'ranjesh',
    retire: function (date) {
        console.log(date);
    }
};
function convert(weight) {
    //narrrowing
    if (typeof weight === 'number')
        return weight;
    else {
        return parseInt(weight);
    }
}
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
var customer = getCustomer(0);
if (customer !== null)
    console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
var Account = /** @class */ (function () {
    //optinal property
    function Account(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    Account.prototype.deposit = function (amount) {
        this._balance = this._balance + amount;
    };
    Object.defineProperty(Account.prototype, "getBalance", {
        //getter
        get: function () {
            return this._balance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "setBalance", {
        //setter
        set: function (value) {
            this._balance = value;
        },
        enumerable: false,
        configurable: true
    });
    return Account;
}());
var account = new Account(1, 'ranjesh', 100);
console.log(account);
var SeatAssignment = /** @class */ (function () {
    function SeatAssignment() {
    }
    return SeatAssignment;
}());
var seat = new SeatAssignment();
seat.A1 = "ranjesh";
