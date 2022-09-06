const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

function showResults(returnNumbers){ 
    
     
    const itemLista = document.createElement('li');
    const itemTexto = document.createElement('h4');

    itemTexto.innerText = returnNumbers;

    itemLista.appendChild(itemTexto);

    const lista = document.querySelector('ul');

    lista.appendChild(itemLista);

    
}

function kata1() {
    // implemente aqui o código
    let arr = gotCitiesCSV.split(",")
    showResults(arr); 
    return arr;    
}
kata1();

function kata2() {
    // implemente aqui o código
    let arr = bestThing.split(" ")
    showResults(arr); 
    return arr;    
}
kata2();

function kata3() {
    // implemente aqui o código
    let arr = gotCitiesCSV.split(",")
    let newArr = arr.join(";")
    showResults(newArr);    
    return newArr
        
}
kata3();

function kata4() {
    // implemente aqui o código
    let newArr = lotrCitiesArray.join(",")
    showResults(newArr);     
    return newArr
          
}
kata4();

function kata5() {
    
    let result = [];
    
    for(let  i = 0; i < 5; i++){
        result.push(lotrCitiesArray[i])
    }
    showResults(result);
    return result;
}
kata5();

function kata6() {    
    
    let result = [];
    
    for(let i = lotrCitiesArray.length-1; i > 2; i--){
        result.push(lotrCitiesArray[i])
    }
    showResults(result);
    return result;
}
kata6();

function kata7() {    
    let newArr = lotrCitiesArray.slice(2,5)
    showResults(newArr);
    return newArr
}
kata7();

function kata8() {   
    lotrCitiesArray.splice(2,1)
    showResults(lotrCitiesArray);
    return lotrCitiesArray;
}
kata8();

function kata9() {   
    lotrCitiesArray.splice(5,Number.MAX_VALUE)
    showResults(lotrCitiesArray);   
    return lotrCitiesArray;
}
kata9();

function kata10() { 

    lotrCitiesArray.splice(2, 0, "Rohan"); 
    showResults(lotrCitiesArray);   
    return lotrCitiesArray;   
}
kata10();

function kata11() { 

    lotrCitiesArray.splice(5, 1, "Deadest Marshes");
    showResults(lotrCitiesArray);
    return lotrCitiesArray;   
}
kata11();

function kata12() { 

    let newStr = bestThing.slice(0, 14)
    showResults(newStr);
    return newStr
}
kata12();

function kata13() { 

    let newStr = bestThing.slice(bestThing.length-12, Number.MAX_VALUE)
    showResults(newStr);
    return newStr
}
kata13();

function kata14() { 

    let newStr = bestThing.slice(23, 38)
    showResults(newStr);
    return newStr
}
kata14();


function kata15() {

   let newArr = bestThing.substring(bestThing.length-12, Number.MAX_VALUE)
    return newArr
}
kata15();

function kata16() {

    let newArr = bestThing.substring(23, 38)
    showResults(newArr);
    return newArr
 }
 kata16();

 function kata17() {

    lotrCitiesArray.pop()
    showResults(lotrCitiesArray);
    return lotrCitiesArray;
 }
 kata17();

 function kata18() {
    
    lotrCitiesArray.push("Deadest Marshes")
    showResults(lotrCitiesArray);
    return lotrCitiesArray;
 }
 kata18();

 function kata19() {
    
    lotrCitiesArray.shift()
    showResults(lotrCitiesArray);
    return lotrCitiesArray
 }
 kata19();

 function kata20() {
    
    lotrCitiesArray.unshift("Mordor")
    showResults(lotrCitiesArray);
    return lotrCitiesArray
 }
 kata20();

 // BÔNUS

function kataBonus1(word){
    
    let newArr = bestThing.split(" ");
    if(word === "only"){
        return word
        
    }
    return newArr.findIndex(kataBonus1)
}