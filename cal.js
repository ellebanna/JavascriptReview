Addition = (x,y) => {
    return x + y;
}
Subtraction = (x,y) => {
    return x - y;
}
Multiplication = (x,y) => {
    return x * y;
}
Division = (x,y) => {
    return x / y;
}
Modulo = (x,y) => {
    return x % y;
}
// This code shows  how to use SWITCH
calculate = (operation, fnum, snum) => {
    var answer;
    switch (operation){
        case "Addition" : answer = Addition(fnum , snum);
                        break;
        case "Subtraction" : answer = Subtraction(fnum , snum);
                        break ;
        case "Multiplication" : answer = Multiplication(fnum , snum);
                        break;
        case "Division" : answer = Division(fnum , snum);
                        break;
        case "Modulo" : answer = Modulo(fnum , snum);
                        break;
        default: answer = "Invalid";
                        break;                                      
    }
    console.log(answer);
}
calculate("Addition",123,456);
calculate("Subtraction",123,456);
calculate("Multiplication",123,456);
calculate("Division",123,456);
calculate("Modulo",123,456);


// this code is an Object Definition
// pet is an variable
// type is a property
// "dog is a property vAlue"
var pet = {
    type: "dog", 
    name: "waku", 
    color: "brown"
};
console.log(pet.color);
console.log(pet.name);
console.log(pet.type);