/**
 * Created by itrambovetskyi on 24.02.2016.
 */
Ext.define('TestApp.gameVehicles.Car', function () {

    function constructor(color, gasolineConsumption, amountOfGasoline) {
        this.callParent([color, gasolineConsumption, amountOfGasoline]);
    }

    function printInfo () {
        this.callParent();
        this.infoMessage('Car information: \r\n' +
                         'Wheels: ' + this.self.wheels + '\r\n');
    }

    return {
        extend: 'TestApp.gameVehicles.Vehicle',

        statics: {
            wheels: 4
        },

        constructor: constructor,

        printInfo: printInfo
    }
});