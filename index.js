// Your code here
function saturdayFun (activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork (activity = 'go to the office') {
    if (activity != 'go to the office') {
        return `This Monday, I will ${activity}.`;
        }
    else if (activity = 'go to the office') {
        return `This Monday, I will ${activity}.`;
    }
}

function wrapAdjective (emphatic = "*") {
    return function (result = 'special')  {
        return `You are ${emphatic}${result}${emphatic}!`;
    };
};
