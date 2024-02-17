class Sounds{

    soundPlay(sound) {
        try {
            const soundPlayGame = new Audio(sound);
            soundPlayGame.play();
        } catch (error) {
            console.error(`Error playing sound: ${error}`);
        }
    }
}

const sounds = new Sounds();
export default sounds;