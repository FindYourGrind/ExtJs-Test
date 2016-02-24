/**
 * Created by itrambovetskyi on 24.02.2016.
 */
Ext.define('TestApp.gameVehicles.car', function () {
    return {
        extend: 'TestApp.gameVehicles.vehicle',

        privates: {
            wheels: 4,
            color: 'black',
            gasolineConsumption: 10,
            amountOfGasoline: 40
        }
    }
});