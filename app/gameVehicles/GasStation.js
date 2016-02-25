/**
 * Created by itrambovetskyi on 25.02.2016.
 */
Ext.define('TestApp.gameVehicles.GasStation', function () {

    function fillTheGasStation (amount) {
        if (amount > 0) {
            this.amountOfGasoline += amount;
        }
    }

    function fillTheVehicle (vehicle, amount) {
        if (this.amountOfGasoline) {
            if ((this.amountOfGasoline - amount) > 0) {
                this.amountOfGasoline -= amount;
                vehicle.setAmountOfGasoline(amount);
            } else {
                this.warningMessage('Only ' + this.amountOfGasoline + ' liters left');
                vehicle.setAmountOfGasoline(amount - (this.amountOfGasoline -= amount));
            }
        } else {
            this.warningMessage('No gas left');
            vehicle.setAmountOfGasoline(0);
        }
    }

    return {
        singleton: true,

        mixins: {
            logger: 'TestApp.gameVehicles.Logger'
        },

        config: {
            amountOfGasoline: 1000
        },

        fillTheGasStation: fillTheGasStation,
        fillTheVehicle: fillTheVehicle
    }
});