/**
 * @param {object} input
 * @returns {string}
 */
export function inputToOutput(input) {
    /**
     * @type {Array<[string, string | number]>}
     */
    const entries = Object.entries(input); 
    /**
     * @type {string}
     */
    let resultString = '!!%' + input.type + '%'; 


    for (let i = 1; i < entries.length; i++) {
        /**
         * @type {string}
         */
        let key = entries[i][0]; 
        /**
         * @type {string | number}
         */
        let value = entries[i][1]; 
        /**
         * @type {string}
         */
        let modifiedKey = ''; 
        
        for (let j = 0; j < key.length; j++) {
            /**
             * @type {string}
             */
            let char = key[j]; 

            if (char === char.toUpperCase() && char !== char.toLowerCase()) {
                modifiedKey += '-' + char.toLowerCase(); 
            } else {
                modifiedKey += char; 
            }
        }

        /**
         * @type {string}
         */
        let keysString = `%attribute-${modifiedKey}="${value}"%`; 
        resultString += keysString;
    }

    resultString += '!!'; 
    resultString = resultString.replace(',', '&');

    return resultString; 
}