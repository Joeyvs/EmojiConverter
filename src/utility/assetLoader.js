import * as fs from 'fs';

// For now we will just run this method every single time we run the project. Possibly cache this in a local db later?
export function loadJsonAsset() {
    try {
        const data = fs.readFileSync('./assets/abilities.json', 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error("Error reading or parsing JSON file:", err);
        return null;
    }
}