class Parent{
    constructor(){
        this.fatherName = "hasan"
    }
}

class Child extends parent{
    constructor(name){
        super();
        this.name = name;

    }
}
const baby = new Child("mahadi")
const baby2 = new Child("madi")
console.log(baby);
