import * as eventHandlers from "./modules/eventHandlers.js";

document.addEventListener('DOMContentLoaded', () => {
    eventHandlers.initializePage();
    eventHandlers.handleBtnRankingClick();
    eventHandlers.handleBtnProfileClick();
    eventHandlers.handleBtnConfigClick();
    eventHandlers.handleUsername();
});