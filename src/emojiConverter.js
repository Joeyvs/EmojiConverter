import { lookupEmoji } from './emojiLoopup.js';

export function convertEmojisToJson(emojiStringList, abilitiesJson) {
    let emojiJson = {
        name: "Whatever you want it to be babe",
        data: [],
    };
    for(let counter = 0; counter < emojiStringList.length; counter++) {
        if (typeof emojiStringList[counter] !== 'string') {
            throw new Error("Input must be a list of strings");
        }
        emojiJson.data.push(handleEmojiString(emojiStringList[counter], counter, abilitiesJson));
    }

    return emojiJson;
}

function handleEmojiString(emojiString, id, abilitiesJson) {
    let emojiList = emojiString.split(" ");
    let emojiRotationJson = {
        id: id,
        name: `Example Name ${id}`,
        data: []
    }

    let tmpSeperator = "→";

    emojiList.forEach(element => {
        if(isSeperator(element)) {
            tmpSeperator = element;
            return;
        }
        // Strip all colons from the element before lookup
        let cleanedElement = element.replace(/:/g, '');
        let emojiData = lookupEmoji(cleanedElement, abilitiesJson);
        if (emojiData) {
            if(tmpSeperator) {
                emojiData.seperator = tmpSeperator;
                tmpSeperator = null;
            }
            emojiRotationJson.data.push(emojiData);
        }
    });

    return emojiRotationJson;
}

function isSeperator(character) {
    return character === '+' || character === '→' || character === '/' || character === 's' || character === 'r' || character === 'tc';
}