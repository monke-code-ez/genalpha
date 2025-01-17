/**
 * @fileoverview This script handles the Gen Alpha to Standard English translation functionality.
 */

/**
 * Dictionaries mapping Gen Alpha slang to Standard English and vice versa.
 */
const genAlphaToEnglishDictionary = {
    "rizz": "charm",
    "slay": "do well",
    "cap": "lie",
    "no cap": "no lie",
    "bet": "okay",
    "skibidi": "meaningless",
    "gyat": "damn",
    "simp": "doing too much",
    "sus": "suspicious",
    "mid": "average/not good",
    "bussin": "really good",
    "era": "phase",
    "glow up": "improvement",
    "brain rot": "too much time online",
    "skibidi ohio rizz": "it is weird",
    "rizzler": "charismatic",
    "finna": "going to",
    "drip": "stylish",
    "stan": "fan",
    "lit": "exciting",
    "yeet": "throw",
    "extra": "over the top",
    "salty": "bitter",
    "snatched": "looking good",
    "flex": "brag",
    "tea": "gossip",
    "vibe": "feeling",
    "shade": "insult",
    "drag": "criticize",
    "fire": "excellent",
    "fam": "family",
    "goat": "greatest of all time",
    "lowkey": "somewhat",
    "highkey": "definitely",
    "savage": "bold",
    "ghost": "ignore",
    "squad": "group of friends",
    "bounce": "leave",
    "mood": "relatable",
    "thirsty": "desperate",
    "woke": "socially aware",
    "big yikes": "very embarrassing",
    "clap back": "retort",
    "hits different": "feels unique",
    "on fleek": "perfectly styled",
    "swole": "muscular",
    "cancelled": "rejected by the public",
    "shook": "shocked",
    "slaps": "sounds good",
    "receipts": "proof",
    "sus": "suspicious",
    "fit": "outfit",
    "boomer": "older person",
    "stan": "fan",
    "basic": "mainstream",
    "iconic": "legendary",
    "ship": "support a relationship",
    "glow": "positive transformation",
    "hot-take": "controversial opinion",
    "main character": "center of attention",
    "viral": "popular online",
    "spill": "share information",
    "legit": "genuine",
    "yo":"hi",
    "wsp":"what's up",
    "w":"good",
    "l":"bad",
    "aura":"swagger",
    "negative-aura":" not cool",
    "plus-aura":"impressive",
    "aura-points":"dignity",
    "iykyk":"if you know you know",
    "homie":"bro",
    "blud": "bro",
    "sigma":"coolest",
    "fanum tax":"food tax"
};

const englishToGenAlphaDictionary = {
    "charm": "rizz",
    "do well": "slay",
    "lie": "cap",
    "no lie": "no cap",
    "okay": "bet",
    "meaningless": "skibidi",
    "damn": "gyat",
    "doing too much": "simp",
    "suspicious": "sus",
    "average/not good": "mid",
    "really good": "bussin",
    "phase": "era",
    "improvement": "glow up",
    "too much time online": "brain rot",
    "it is weird": "skibidi ohio rizz",
    "charismatic": "rizzler",
    "going to": "finna",
    "stylish": "drip",
    "fan": "stan",
    "exciting": "lit",
    "throw": "yeet",
    "over the top": "extra",
    "bitter": "salty",
    "looking good": "snatched",
    "brag": "flex",
    "gossip": "tea",
    "feeling": "vibe",
    "insult": "shade",
    "criticize": "drag",
    "excellent": "fire",
    "family": "fam",
    "greatest of all time": "goat",
    "somewhat": "lowkey",
    "definitely": "highkey",
    "bold": "savage",
    "ignore": "ghost",
    "group of friends": "squad",
    "leave": "bounce",
    "relatable": "mood",
    "desperate": "thirsty",
    "socially aware": "woke",
    "very embarrassing": "big yikes",
    "retort": "clap back",
    "feels unique": "hits different",
    "perfectly styled": "on fleek",
    "muscular": "swole",
    "rejected by the public": "cancelled",
    "shocked": "shook",
    "sounds good": "slaps",
    "proof": "receipts",
    "outfit": "fit",
    "older person": "boomer",
    "mainstream": "basic",
    "legendary": "iconic",
    "support a relationship": "ship",
    "positive transformation": "glow",
    "controversial opinion": "hot take",
    "center of attention": "main character",
    "popular online": "viral",
    "share information": "spill",
    "genuine": "legit"
   
};

/**
 * Translates Gen Alpha slang to Standard English.
 * @function translateGenAlpha
 * @description Gets input from the Gen Alpha input field, translates it based on predefined dictionary, and displays the result in the output textarea.
 */
function translateGenAlpha() {
    const genAlphaInput = document.getElementById('genAlphaInput').value.trim().toLowerCase(); // Get input & trim
    const standardEnglishOutput = document.getElementById('standardEnglishOutput'); // Get output element
    let translation = "";

    if (genAlphaInput === "") {
        standardEnglishOutput.value = ""; // Clear output if input is empty
        return;
    }

    // Split input into words, translate each, and join them back
    const words = genAlphaInput.split(/\s+/);
    const translatedWords = words.map(word => {
        return genAlphaToEnglishDictionary[word] || word; // Translate or keep original
    });
    translation = translatedWords.join(" ");

    standardEnglishOutput.value = translation; // Set the output
}

/**
 * Translates Standard English to Gen Alpha slang.
 * @function translateEnglishToGenAlpha
 * @description Gets input from the Standard English input field, translates it based on predefined dictionary, and displays the result in the output textarea.
 */
function translateEnglishToGenAlpha() {
    const englishInput = document.getElementById('englishInput').value.trim().toLowerCase(); // Get input & trim
    const genAlphaOutput = document.getElementById('genAlphaOutput'); // Get output element
    let translation = "";

    if (englishInput === "") {
        genAlphaOutput.value = ""; // Clear output if input is empty
        return;
    }

    // Split input into words, translate each, and join them back
    const words = englishInput.split(/\s+/);
    const translatedWords = words.map(word => {
        return englishToGenAlphaDictionary[word] || word; // Translate or keep original
    });
    translation = translatedWords.join(" ");

    genAlphaOutput.value = translation; // Set the output
}

document.addEventListener('DOMContentLoaded', () => {
    const genAlphaToEnglishButton = document.getElementById('genAlphaToEnglishButton');
    const englishToGenAlphaButton = document.getElementById('englishToGenAlphaButton');

    genAlphaToEnglishButton.addEventListener('click', () => {
        document.getElementById('genAlphaToEnglishArea').style.display = 'block';
        document.getElementById('englishToGenAlphaArea').style.display = 'none';
    });

    englishToGenAlphaButton.addEventListener('click', () => {
        document.getElementById('genAlphaToEnglishArea').style.display = 'none';
        document.getElementById('englishToGenAlphaArea').style.display = 'block';
    });

    const translateButton = document.getElementById('translateButton');
    translateButton.addEventListener('click', translateGenAlpha); // Button event listener

    const translateButtonEnglish = document.getElementById('translateButtonEnglish');
    translateButtonEnglish.addEventListener('click', translateEnglishToGenAlpha); // Button event listener
});
