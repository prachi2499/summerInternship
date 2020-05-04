function getsum(num1, num2) {
    return num1 + num2;
}
//console.log(getsum(10,20));
var mysum = function (num1, num2) {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 == 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
//console.log(mysum('3',3));
function getname(fname, lname) {
    if (lname == undefined) {
        return fname;
    }
    return fname + " " + lname;
}
console.log(getname('prachi'));
