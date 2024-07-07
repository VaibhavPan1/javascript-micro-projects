// const passwordLength = 12;
// const includeLowercase = false;
// const includeUppercase = true;
// const includeNumbers = true;
// const includeSymbols = true;

function generatePassword(){
    
    const passwordLength = Number(document.getElementById("passwordLength").value);
    const includeLowercase = document.getElementById("includeLowercase").checked;
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;
    let result = document.getElementById("result");
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbolChars = "!@#$%^&*()_+";
    const numberChars = "1234567890";
    
    let password = "";
    let allowedChars = "";


    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";
    
    if(passwordLength <= 0){
        result.textContent = "Password length must be atleast 1"
        return;
    }
    if(allowedChars.length === 0){
        result.textContent = "You must select atleast 1 characterset"
        return;
    }

    for(let i =0; i< passwordLength; i++){
        const random = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[random]
    }
    result.innerHTML = `${password}`
    return;
    // return password;

}

// const password = generatePassword(passwordLength, 
//                 includeLowercase, 
//                 includeUppercase, 
//                 includeNumbers, 
//                 includeSymbols)

// console.log(password)