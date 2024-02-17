import * as eventHandlers from "./modules/eventHandlers.js";

document.addEventListener('DOMContentLoaded', () => {
    eventHandler.initializePage();
    eventHandlers.handleBtnRankingClick();
    eventHandlers.handleBtnProfileClick();
    eventHandlers.handleBtnConfigClick();
    eventHandlers.handleUsername();
});