'use strict'

const container = document.querySelector('.container')
const tilesContainer = document.querySelector('.tiles-container')
const voiceSelector = document.querySelector('.voice-selector-container') 
const tileAddBtn = document.querySelector('.tile-add')
const tileClearBtn = document.querySelector('.tile-clear')
const tileInput = document.querySelector('.tile-input')

const synth = window.speechSynthesis

let presets = ['how are you', 'I want to walk',
    'time to bed', 'where is library']



tileAddBtn.addEventListener('click', () => {
    if (tileInput.value == '') {
        alert('Please enter a value')
        return
    }
    presets.push(tileInput.value)
    tileInput.value = ''
    updateTiles()
})

tileClearBtn.addEventListener('click', () => {
    presets = []
    tileInput.value = ''
    updateTiles()
})

updateTiles()
function updateTiles(){
    tilesContainer.innerHTML = ''
    for (let i = 0; i < presets.length; i++) {
        let preset = presets[i]
        let button = document.createElement('button')
        button.innerText = preset
        button.classList.add('tile')
        button.addEventListener('click', () => { speak(i) })
        tilesContainer.appendChild(button)
    }
    
}

setTimeout(() => {
    populateVoiceList()
})
function populateVoiceList() {
    var voices = synth.getVoices();
    console.log(voices)

    for (var i = 0; i < voices.length; i++) {
        var voice = voices[i];
        var option = document.createElement('option');
        option.value = voice.name;
        option.innerHTML = voice.name;
        voiceSelector.appendChild(option);
    }
    console.log(voiceSelector.value)
}

const msg = new SpeechSynthesisUtterance();

function speak(index) {
    msg.paused = true
    const preset = presets[index]
    var voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
        if (voiceSelector.value == voices[i].name) {
            msg.voice = voices[i]
            console.log('voice', voices[i])
            break
        }
    }
    msg.voiceURI = 'native';
    msg.volume = 1; // 0 to 1
    msg.rate = 2; // 0.1 to 10
    msg.pitch = 2; //0 to 2
    msg.text = preset;
    msg.lang = 'en-US';

    synth.speak(msg);
}