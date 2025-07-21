export function lookupEmoji(emojiString, abilitiesJson) {
    // Find the ability object that matches the emojiString title
    const foundAbility = abilitiesJson.find(ability => ability.Title.toLowerCase() === emojiString.toLowerCase());

    let emojiJson = {
        seperator: "",  
        selectedAbility: foundAbility || {
            Title: emojiString,
            Src: "./asset/resource/abilities/" + emojiString + ".webp",
            Emoji: "",
            EmojiId: "",
            Category: "",
        },
        notes: foundAbility ? null : emojiString // If the ability is not found, use the emojiString as notes
    }

    return emojiJson;
}