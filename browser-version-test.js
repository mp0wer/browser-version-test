const Bowser = require('bowser/bundled');
const browser = Bowser.getParser(window.navigator.userAgent);
alert(`Browser "${browser.getBrowserName()}", version "${browser.getBrowserVersion()}"`);
