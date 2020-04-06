let data = [
    {principal: 2500, 
        time: 1.8},
    {principal: 1000, 
        time: 5},
    {principal: 3000, 
            time: 1},
    {principal: 2000, 
        time: 3}

]


function interestCalculator(inputData){
    let interestData = [];

    for(let i=0; i < inputData.length; i ++){
        let rate = 0;
        let principal = inputData[i].principal;
        let time = inputData[i].time;

        if (principal >= 2500 && 1 < time < 3){
            rate = 3;
        }
        else if (principal >= 2500 && time >=3){
            rate = 4;
        }  
        else if (principal < 2500 && time <= 1){
            rate = 2;
        }
        else {
            rate = 1;
        }
        let interest = (principal * rate * time) / 100;
        interestData[i] = {
            principal,
            time,
            interest
        }
        
    } 
    console.log(interestData);
    return interestData;
}

interestCalculator(data);

