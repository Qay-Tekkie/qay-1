function numberRange(num){
    let range = []
    
    let i = 1;
    while (i <= num){
        if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
            range.push("yu-gi-oh")
        }
        else if (i % 2 === 0 && i % 3 === 0){
            range.push("yo-gi")
        }
        else if (i % 2 === 0 && i % 5 === 0){
            range.push("yo-oh")
        }
        else if (i % 3 === 0 && i % 5 === 0){
            range.push("gi-oh")
        }
        else if (i % 2 === 0){
            range.push("yo")
        }
        else if (i % 3 === 0){
            range.push("gi")
        }
        else if (i % 5 === 0){
            range.push("oh")
        }
        else {
            range.push(i)
        }
        i++;
    }
    console.log(range)
}
numberRange(100);

numberRange(30);
