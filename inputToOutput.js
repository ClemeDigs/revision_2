import { output1, output2 } from "./output.js";
console.log(output1);
console.log(output2);

export function inputToOutput(input) {
    // Parcourir les paires de clé-valeur de l'objet 'input'
    const entries = Object.entries(input); 
    let resultString = '!!%' + input.type; // Commencer la chaîne avec !!% et le type de l'objet

    // Boucler sur les paires de clés et de valeurs
    for (let i = 1; i < entries.length; i++) {
        let key = entries[i][0]; // La clé de l'entrée
        let value = entries[i][1]; // La valeur de l'entrée
        let modifiedKey = ''; // Réinitialiser modifiedKey pour chaque nouvelle clé
        
        // Boucler sur les caractères de la clé pour ajouter un '-' avant chaque majuscule
        for (let j = 0; j < key.length; j++) {
            let char = key[j]; // Caractère actuel de la clé

            // Si le caractère est une majuscule, ajouter un '-' et convertir en minuscule
            if (char === char.toUpperCase() && char !== char.toLowerCase()) {
                modifiedKey += '-' + char.toLowerCase(); 
            } else {
                modifiedKey += char; // Sinon, ajouter simplement le caractère
            }
        }

        // Construire la chaîne avec la clé modifiée et sa valeur
        let keysString = `%attribute-${modifiedKey}="${value}"%`; 
        resultString += keysString; // Ajouter à resultString
    }

    resultString += '!!'; // Ajouter la fin de chaîne
    resultString = resultString.replace(',', '&'); // Remplacer les virgules par des "&" si nécessaire
    console.log(resultString);

    return resultString; // Retourner la chaîne finale
}








