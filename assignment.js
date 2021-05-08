// kilometerToMeter


function kilometerToMeter(kilometer){
    if (kilometer < 0) {
        return "Value can't be negative.";
    }
    else{
        let meter = kilometer*1000;
    return meter;
    }
}
//budgetCalculator
// per watch = 50, per phone = 100, per laptop = 500.

function budgetCalculator(watch = 0,phone = 0,laptop = 0){
    if (watch < 0 || phone < 0 || laptop < 0) {
        return "Correct value not given."
    }
    else {
        return watch*50 + phone*100 + laptop*500;
    }
}
//hotelCost

function hotelCost(days){
    if (days <= 0) {
        return "Incorrect value."
    }
    var firstTenDays = days*100;
    var secondTenDays = days*80;
    if (days <= 10){
        return firstTenDays;
    }else if (days > 10 && days <=20){
        return firstTenDays + (days - 10)*80;
    }else{
        return firstTenDays + secondTenDays + (days-20)*50;
    }
}

//megaFriend

function megaFriend(array){
    if (array.length <= 0){
        return "Error."
    }
    var mega = array[0];
    var megaLength = array[0].length;
    for (var i = 0; i < array.length; i++) {
        if(array[i].length > megaLength){
            megaLength = array[i].length;
            mega = array[i];
        }
    }
    return mega;
}


