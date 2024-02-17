function countingWords() {
    let text = document.querySelector('#prhase').value;

    if (!text.length) {
        alert('Enter a text.');
        return;
    }

    let prhaseWord = text.trim().split(/\s+/);
    let wordCounter = prhaseWord.length;
    
    document.querySelector('#resultWord').innerText = "The sentence has " + wordCounter + " words.";
    countingWords()
}

document.querySelector('#btnCount').addEventListener('click', countingWords);
