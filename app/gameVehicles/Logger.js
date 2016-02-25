/**
 * Created by itrambovetskyi on 25.02.2016.
 */
Ext.define('TestApp.gameVehicles.Logger', function () {

    function errorMessage (message) {
        console.log("%c" + message, "color: red;");
        throw new Error();
    }

    function infoMessage (message) {
        console.log("%c" + message, "color: green;")
    }

    function warningMessage (message) {
        console.log("%c" + message, "color: orange;")
    }


    return {
        logger: true,
        errorMessage: errorMessage,
        infoMessage: infoMessage,
        warningMessage: warningMessage
    }
});