function getTime(){
    const date = new Date();
    let hour = date.getHours(); 
    let min = date.getMinutes();
    let condition = "am";
    if(hour >= 12){
        condition = "pm";
        if(hour > 12){
            hour = hour - 12;
        }
    }
    if(min.toString().length === 1){
        min = "0" + min.toString();
    }

    let day = date.getDay();
    let mon = date.getMonth();
    let num = date.getDate();
    switch (day) {
        case 0: day = 'Sundaay'   
        break;
        case 1: day = 'Monday'   
        break;
        case 2: day = 'Tuesday'   
        break;
        case 3: day = 'Wednesday'   
        break;
        case 4: day = 'Thursday'   
        break;
        case 5: day = 'Friday'   
        break;
        case 6: day = 'Saturday'
        break;
        default:
            break;
    }
    switch (mon) {
        case 0: mon = 'Jan'   
        break;
        case 1: mon = 'Feb'   
        break;
        case 2: mon = 'Mar'   
        break;
        case 3: mon = 'Apr'   
        break;
        case 4: mon = 'May'   
        break;
        case 5: mon = 'Jun'   
        break;
        case 6: mon = 'Jul'   
        break;
        case 7: mon = 'Aug'   
        break;
        case 8: mon = 'Sep'   
        break;
        case 9: mon = 'Oct'   
        break;
        case 10: mon = 'Nov'   
        break;
        case 11: mon = 'Dec'   
        break;
        default:
            break;
    }
    document.querySelector('#date').innerHTML = `${day} ${mon} ${num}`
    
    document.querySelector('#hourt').innerHTML = `${hour}`
    document.querySelector('#mint').innerHTML = `${min}`
    document.querySelector('#condt').innerHTML = `<sub>${condition}</sub>`
}
setInterval(getTime, 500);

