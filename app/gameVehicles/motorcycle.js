/**
 * Created by itrambovetskyi on 24.02.2016.
 */
Ext.define('TestApp.gameVehicles.motorcycle', function () {
    return {
        extend: 'TestApp.gameVehicles.vehicle',

        privates: {
            wheels: 2,
            color: 'white',
            gasolineConsumption: 5,
            amountOfGasoline: 40
        }
    }
});