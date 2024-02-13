import sharedVariables from "./sharedVariables.js";

class Share {
  async shareResults() {
    try {
      let shareData;

      if (sharedVariables.UserSetANewRecord) {
        shareData = {
          title: 'User Results',
          text: `I simply beat my own record in this math game! With ${sharedVariables.points} points, I'm dominating! 💥 Are you ready to try and outdo me!?🎉
${window.location.href}`
        };
      } else {
        shareData = {
          title: 'User Results',
          text: `I just scored ${sharedVariables.points} points in this math game 🎉! Now I challenge you to try to beat my score. Do you accept the challenge? 💥
${window.location.href}
                `
        };
      }

      if (navigator.share) {
        navigator.share(shareData);
        console.log('Sharing started successfully!');
      } else {
        console.error('navigator.share() API is not available on this device.');
      }
    } catch (error) {
      console.error('Error when sharing:', error);
    }
  }
}

const share = new Share();
export default share;
