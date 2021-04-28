var channel = require('cordova/channel');
var exec = require('cordova/exec');

channel.createSticky('onCordovaInfoReady');
// Tell cordova channel to wait on the CordovaInfoReady event
channel.waitForInitialization('onCordovaInfoReady');

/**
 * This represents the device Locale, and provides properties for inspecting the region, language, preferredLanguages.
 * @constructor
 */
function Locale() {
    var me = this;

    this.region = null;
    this.language = null;
    this.preferredLanguages = [];

    function successCallback(data) {
        me.region = data.region;
        me.language = data.language;
        me.preferredLanguages = data.preferredLanguages;
    }

    function errorCallback(e) {
        console.error('[ERROR] Error initializing cordova-plugin-locale: ' + e);
    }

    //Retrieve the locale info when cordova is ready
    channel.onCordovaReady.subscribe(function () {
        me.execute(
            function (data) {
                successCallback(data);
                channel.onCordovaInfoReady.fire();
            },
            errorCallback
        );
    });

    //Retrieve and update locale info when app is moved to foreground
    channel.onResume.subscribe(function () {
        me.execute(
            successCallback,
            errorCallback
        );
    });
}

/**
 * Get Locale info
 *
 * @param {Function} successCallback The function to call when the heading data is available
 * @param {Function} errorCallback The function to call when there is an error getting the heading data. (OPTIONAL)
 */
Locale.prototype.execute = function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'Locale', 'execute', []);
};

module.exports = new Locale();