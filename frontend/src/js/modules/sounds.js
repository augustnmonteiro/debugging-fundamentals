class Sounds{

    soundPlay(sound) {
        console.log('Toquei');
        const soundPlayGame = new Audio(sound);
        soundPlayGame.play();
    }
}

const sounds = new Sounds();
export default sounds;