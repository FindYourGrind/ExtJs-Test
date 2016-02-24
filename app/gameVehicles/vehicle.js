/**
 * Created by itrambovetskyi on 24.02.2016.
 */
Ext.define('TestApp.gameVehicles.vehicle', function () {

    function errorMessage (message) {
        console.log(message)
    }

    function setColor (color) {
        if (typeof color == 'string') {
            this.color = color
        } else {
            errorMessage('Color must be a string value')
        }
    }

    function setGasolineConsumption (gasolineConsumption) {
        if (gasolineConsumption > 0) {
            this.gasolineConsumption = gasolineConsumption
        } else {
            errorMessage('Gasoline consumption must be more than 0')
        }
    }

    function setAmountOfGasoline (amountOfGasoline) {
        if (amountOfGasoline > 0) {
            this.amountOfGasoline = amountOfGasoline
        } else {
            errorMessage('Amount of gasoline must be more than 0')
        }
    }

    function getColor () {
        return this.color;
    }

    function getGasolineConsumption () {
        return this.gasolineConsumption;
    }

    function getAmountOfGasoline () {
        return this.amountOfGasoline;
    }

    return {
        privates: {
            wheels: 0,
            color: ' ',
            gasolineConsumption: 0,
            amountOfGasoline: 0
        },

        setColor: setColor,
        setGasolineConsumption: setGasolineConsumption,
        setAmountOfGasoline: setAmountOfGasoline,

        getColor: getColor,
        getGasolineConsumption: getGasolineConsumption,
        getAmountOfGasoline: getAmountOfGasoline
    }
});