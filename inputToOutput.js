export function inputToOutput(input) {
    const entries = Object.entries(input); 
    let resultString = '!!%' + input.type + '%'; 

    for (let i = 1; i < entries.length; i++) {
        let key = entries[i][0]; 
        let value = entries[i][1]; 
        let modifiedKey = ''; 
        
        for (let j = 0; j < key.length; j++) {
            let char = key[j]; 

            if (char === char.toUpperCase() && char !== char.toLowerCase()) {
                modifiedKey += '-' + char.toLowerCase(); 
            } else {
                modifiedKey += char; 
            }
        }

        let keysString = `%attribute-${modifiedKey}="${value}"%`; 
        resultString += keysString;
    }

    resultString += '!!'; 
    resultString = resultString.replace(',', '&');
    console.log(resultString);

    return resultString; 
}








