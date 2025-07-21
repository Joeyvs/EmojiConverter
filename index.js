import { convertEmojisToJson } from './src/emojiConverter.js';
import { loadJsonAsset } from './src/utility/assetLoader.js';
import * as fs from 'fs';

console.log("Hello human!");
console.log("This is a simple Node.js application meant to make importing rotations easier.");
console.log("For now this is only meant to convert PvME rotations to JSON format for RotationMaster.")

// Provide the emoji string copied from PvME, provide a string for every phase / rotation you want.
const emojiString = ":smokecloud: + :wenarrow: :grico: → :rapid: → :bolg: :spec: + :adrenrenewal: → :dbow: :eofspec: → :wenarrow: :dbow: :eofspec: :deathsporearrows:";
const phase2 = ":wenarrow: :grico: :deathsporearrows: → :fularrow: :shadowtend: → :wenarrow: :mds: → :deathsporearrows: :incend: → :ecb: :eofspec: → :fularrow: :dbow: :eofspec: → :wenarrow: :grico: → :rapid:";
const phase3 = ":dbow: :eofspec: → :sgb: :eofspec: → :dbow: :eofspec: → :grico: + equip :roarofawakening: + :odetodeceit:";
const phase4 = ":gconc: → :ingen: + :tsunami: → :wenarrow: :piercing: :deathsporearrows: → :bolg: :spec: → :piercing: → :wenarrow: :grico: :deathsporearrows: → :piercing: → :gdeathsswift: → :fularrow: :ecb: :eofspec: → :rapid: → :wenarrow: :dbow: :eofspec: → :sgb: :eofspec: → :dbow: :eofspec: → :fularrow: :grico: → :wenarrow: :dbow: :eofspec: → Improvise";


// Add all of the strings to the list below, seperate each with a comma
const emojiStringList = [emojiString, phase2, phase3, phase4];

const abilitiesJson = loadJsonAsset();

console.log("Loaded abilities from JSON file.");

const jsonResult = convertEmojisToJson(emojiStringList, abilitiesJson);

console.log("Converted emojis to JSON format succesfully!");
console.log("Writing to output.json...");

// Write to a json file for clean importing
// You can change "output.json" to any file name you want
// The file will be written in the same directory as this script
fs.writeFileSync('output.json', JSON.stringify(jsonResult, null, 2));

console.log("Output written to output.json. You can now import this file into RotationMaster.");
console.log("Thank you for using this tool! If you have any issues, feel free to report them to Jadhex.");




// Notes:
// - Invalid ability imports seem to prevent using Alt + 1 to cycle between rotations
// - Can't start with a seperator, even though it is in the json. PvME uses quite a bit of (tc) to start a rotation for example.
// - What to do with invalid abilities like text such as "Improvise"?