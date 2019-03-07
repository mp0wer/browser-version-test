var bowser = module.exports;
var isValidBrowser = bowser.chrome&&bowser.version>=63||bowser.msie&&bowser.version>=11||bowser.msedge||bowser.safari&&bowser.version>=9||bowser.ios||bowser.blink;
if (!isValidBrowser) {
  alert("Unsupported browser " + bowser.name + " version " + bowser.version);
} else {
  alert("Great! You have supported browser " + bowser.name + " version " + bowser.version + ". Samsung browser - " + (bowser.samsungBrowser ? "yes" : "no"));
}
