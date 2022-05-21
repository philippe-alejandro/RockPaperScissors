function computerPlay (){
    const optArray= ['rock','paper','scissors'];
    let min = 0; 
    let max = 3;
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + min;

    return optArray[rand];
};

console.log(computerPlay());