function phoneticEquivalent(actualNumber) {
    let phoneticNumber = "";
    for (var c of actualNumber) {
        switch (c) {
            /*
            * Checking each character
            * Finding out which character matches which number           
            */
            case '0':
                {
                    /*
                    concatinating to the phoneticNumber string
                    */
                    phoneticNumber += "Zero";
                    break;
                }
            case '1':
                {
                    phoneticNumber += "One";
                    break;
                }
            case '2':
                {
                    phoneticNumber += "Two";
                    break;
                }
            case '3':
                {
                    phoneticNumber += "Three";
                    break;
                }
            case '4':
                {
                    phoneticNumber += "Four";
                    break;
                }
            case '5':
                {
                    phoneticNumber += "Five";
                    break;
                }
            case '6':
                {
                    phoneticNumber += "Six";
                    break;
                }
            case '7':
                {
                    phoneticNumber += "Seven";
                    break;
                }
            case '8':
                {
                    phoneticNumber += "Eight";
                    break;
                }
            case '9':
                {
                    phoneticNumber += "Nine";
                    break;
                }
            default:
                {
                    phoneticNumber = "Invalid Number";
                    return phoneticNumber;
                }
        }

    }
    return phoneticNumber;
}

/*
* process.argv gives us an array
* first two arguments contain information about the file directories
* Command line arguments starts from second index
*/
(function findPhoneticNumber() {
    let resultingStr = "";

    for (let i = 2; i < process.argv.length; i++) {
        if (i == (process.argv.length - 1)) {
            resultingStr += phoneticEquivalent(process.argv[i]);
        }
        else {
            resultingStr += phoneticEquivalent(process.argv[i]);
            resultingStr += ",";
        }
    }
    if (resultingStr === "") {
        console.log("No added numbers!");
    }
    else {
        console.log(resultingStr);
    }
})()
