/* Group members names:- Hasti Donga 
                         Sarina Poudel
                         Sugam Khanal */


document.addEventListener('DOMContentLoaded', function() {
    const words = {
        word1: ["Once upon a time", "In a land far away", "On a bright morning", "In a small village"],
        word2: ["lived a young boy", "lived a brave princess", "lived an old wizard", "lived a wise owl"],
        word3: ["who discovered a hidden treasure", "who embarked on a magical journey", "who encountered a mysterious creature", "who solved a puzzling riddle"],
        word4: ["and their lives changed forever.", "and they found true friendship.", "and they learned valuable lessons.", "and they saved their home from danger."],
        word5: ["The end.", "But the adventure continues.", "What an incredible tale!", "And so began a new chapter."]
    };

    const buttons = {
        word1: document.getElementById('word1'),
        word2: document.getElementById('word2'),
        word3: document.getElementById('word3'),
        word4: document.getElementById('word4'),
        word5: document.getElementById('word5')
    };

    const viewStory = document.getElementById('view-story');
    const randomStory = document.getElementById('random-story');
    const resetButton = document.getElementById('reset');
    const storyOutput = document.getElementById('story-output');
    let selectedWords = {};

    // Function to select a word or phrase from an array randomly
    function RandomWord(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // Function to update selected word and display it
    function UpdateTheWord(buttonId, wordSet) {
        const wordId = buttonId;
        selectedWords[wordId] = RandomWord(wordSet[wordId]);
        buttons[buttonId].innerText = selectedWords[wordId];
    }

    Object.keys(buttons).forEach(function(buttonId) {
        buttons[buttonId].addEventListener('click', function() {
            UpdateTheWord(buttonId, words);
        });
    });

    // Event listener for view story button
    viewStory.addEventListener('click', function() {
        const story = Object.values(selectedWords).join(' ');
        storyOutput.innerText = story;
        audioOutput.src = ''; 
        ConvertToSpeech(story);
    });

    // Event listener for random story button
    randomStory.addEventListener('click', function() {
        Object.keys(buttons).forEach(function(buttonId) {
            UpdateTheWord(buttonId, words); 
        });
        const story = Object.values(selectedWords).join(' ');
        storyOutput.innerText = story; 
        ConvertToSpeech(story);
    });

    // Event listener for reset button
    resetButton.addEventListener('click', function() {
        Object.keys(buttons).forEach(function(buttonId) {
            selectedWords[buttonId] = RandomWord(words[buttonId]); // Reset to default word
            buttons[buttonId].innerText = selectedWords[buttonId];
        });
        storyOutput.innerText = '';
        audioOutput.src = '';
    });
    // function to Convert text to audio
    function ConvertToSpeech(text) {
        const speech = new SpeechSynthesisUtterance();
        speech.text = text;
        window.speechSynthesis.speak(speech);
    }
});
