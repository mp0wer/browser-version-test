const Bowser = require('bowser');
const browser = Bowser.getParser(window.navigator.userAgent);
alert(`Browser "${browser.getBrowserName()}", version "${browser.getBrowserVersion()}"`);
