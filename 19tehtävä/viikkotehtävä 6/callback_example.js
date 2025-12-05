setTimeout(doSomething,2000);

function doSomething(){
    console.log("Demonstrating the callbacks");
}
console.log("The application is started");


//Arrow!!!!!!!!!!!
const sayHeyaArrow = () =>{
    console.log("Heya!!!!!!!");
}
sayHeyaArrow();

// ajastimella toimiva anononyymi funktio
setTimeout(function(){
    console.log("Heya anonyymi funktio tulosti tämän 2sekuntin jälkeen");
},2000);
