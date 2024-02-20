function calculateMoney(ticketSaleNum){
    let moneyLeft = (ticketSaleNum*120) - (500 + (8*50));
    if(ticketSaleNum >= 0){
        if(moneyLeft > 0){
            return moneyLeft;
        }
        else{
            return '!!! You have * '+moneyLeft+' * Taka Debt.';
        }
    }
    else{
        return 'Invalid Number';
    }
}

function checkName(yourName){
    let nameUpperCase = yourName.toUpperCase();
    let nameLength = nameUpperCase.length;
    let lastCharacter = nameUpperCase.charAt(nameLength-1);

    if(lastCharacter === 'A' || lastCharacter === 'Y' || lastCharacter === 'I' || lastCharacter === 'E' || lastCharacter === 'O' || lastCharacter === 'U' || lastCharacter === 'W'){
        return 'Good Name.';
    }
    else{
        return 'Bad Name.';
    }
}

function deleteInvalids(arrayCheck){
    let filteredArray = [];
    let arrayLength = arrayCheck.length;
    if(Array.isArray(arrayCheck) === true){
        for(i=0;i<=arrayLength;i++){
            if(typeof(arrayCheck[i]) === 'number'){
                filteredArray.push(arrayCheck[i]);
            }
        }
        filteredArray.pop(NaN);
        return filteredArray;
    }
    else{
        return 'Invalid Array';
    }
}

function password(details){
    let password1stPart = details.siteName;
    let password2ndPart = details.name;
    let password3rdPart = details.birthYear;

    if(password1stPart === undefined || password2ndPart === undefined || password3rdPart === undefined){
        return 'invalid';
    }
    else{
        let site1stLetterCap = password1stPart.charAt(0).toUpperCase();
        let siteRemainingLetters = password1stPart.slice(1);
        let password1stPart1stLetterCap = site1stLetterCap+siteRemainingLetters;
        if(password3rdPart.toString().length != 4){
            return 'invalid';
        }
        else{
            return password1stPart1stLetterCap+'#'+password2ndPart+'@'+password3rdPart;
        }
    }
}

function monthlySavings(earningArray,livingCost){
    if(Array.isArray(earningArray) === true){
        let earning1,earning2,earning3;
        if(earningArray[0] >= 3000){
            earning1 = earningArray[0] - (earningArray[0]*.20);
        }
        else{
            earning1 = earningArray[0];
        }
        if(earningArray[1] >= 3000){
            earning2 = earningArray[1] - (earningArray[1]*.20);
        }
        else{
            earning2 = earningArray[1];
        }
        if(earningArray[2] >= 3000){
            earning3 = earningArray[2] - (earningArray[2]*.20);
        }
        else{
            earning3 = earningArray[2];
        }
        let yourSavings = (earning1+earning2+earning3) - livingCost;
        if(yourSavings >= 0){
            return yourSavings;
        }
        else{
            return 'earn more';
        }
    }
    else{
        return 'invalid input';
    }
}