var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var user = /** @class */ (function () {
    function user(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("user created " + this.name);
    }
    user.prototype.register = function () {
        console.log(this.name + " is registered now");
    };
    user.prototype.payinvoice = function () {
        console.log(this.name + " paid invoice");
    };
    return user;
}());
var member = /** @class */ (function (_super) {
    __extends(member, _super);
    function member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    member.prototype.payinvoice = function () {
        _super.prototype.payinvoice.call(this);
    };
    return member;
}(user));
var mike = new member(1, "smith", "smith@gmail.com", 12);
mike.payinvoice();
//let userobj=new user('prachi','prachi@gmail.com',20);
//userobj.register();
//console.log(userobj.age);
