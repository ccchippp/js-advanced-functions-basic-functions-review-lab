
function saturdayFun(activity="roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}
saturdayFun();

function mondayWork(activity="go to the office") {
    return (`This Monday, I will ${activity}.`)
}
mondayWork()

function wrapAdjective(wrapper="*") {
    return function(special="special") {
        return `You are ${wrapper}${special}${wrapper}!`
    }
}

const Calculator = {
    add: function(num1, num2){
    return num1 + num2;
    },
    subtract: function(num1, num2){
        return num1 - num2;
    },
    multiply: function(num1, num2){
        return num1 * num2
    },
    divide: function(num1, num2){
        return num1 / num2
    }
}

function actionApplyer(start, array) {
    let num = start
    for (let a = 0; a < array.length; a++ ){
    num = array[a](num)
    }
    return num
}