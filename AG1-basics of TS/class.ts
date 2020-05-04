interface userinterface
{
    name:string;
    email:string;
    age:number;
    register();
    payinvoice();
}
class user implements userinterface
{
    name:string;
    email:string;
    age:number;

    constructor(name:string,email:string,age:number)
    {

        this.name=name;
        this.email=email;
        this.age=age;

        console.log("user created "+this.name);
    }

    register()
    {
        console.log(this.name+" is registered now");
    }
    payinvoice()
    {
        console.log(this.name+" paid invoice");
    }

}
class member extends user{
    id:number;

    constructor(id:number,name:string,email:string,age:number)
    {
 super(name,email,age);
 this.id=id;
    }
    payinvoice()
    {
        super.payinvoice();
    }
    
}

let mike:user=new member(1,"smith","smith@gmail.com",12);
mike.payinvoice();
//let userobj=new user('prachi','prachi@gmail.com',20);
//userobj.register();
//console.log(userobj.age);
