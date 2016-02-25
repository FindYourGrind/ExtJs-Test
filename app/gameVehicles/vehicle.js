/**
 * Created by itrambovetskyi on 24.02.2016.
 */
Ext.define('TestApp.gameVehicles.Vehicle', function () {

    function applyColor (color) {
        if (typeof color == 'string') {
            return color;
        } else {
            this.errorMessage('Color must be a string value')
        }
    }

    function applyGasolineConsumption (gasolineConsumption) {
        if (gasolineConsumption > 0) {
            return gasolineConsumption;
        } else {
            this.errorMessage('Gasoline consumption must be more than 0')
        }
    }

    function applyAmountOfGasoline (amountOfGasoline) {
        if (amountOfGasoline >= 0) {
            return amountOfGasoline;
        } else {
            this.errorMessage('Amount of gasoline must be 0 or more')
        }
    }

    function printInfo () {
        privateMethod().apply(this);
        this.infoMessage('Vehicle information: \r\n' +
                    'Color: ' + this.getColor() + '\r\n' +
                    'Gasoline Consumption: ' + this.getGasolineConsumption() + '\r\n' +
                    'Amount Of Gasoline: ' + this.getAmountOfGasoline() + '\r\n' +
                    'Run out: ' + this.getRunout() + '\r\n' +
                    'Average speed: ' + this.getAverageSpeed() + '\r\n');
    }

    function constructor(color, gasolineConsumption, amountOfGasoline) {
        this.initConfig({
            color: color,
            gasolineConsumption: gasolineConsumption,
            amountOfGasoline: amountOfGasoline
        });
        this.self.vehiclesCount++;
    }

    function startMoving (speed, distanceTask) {
        if(speed > 0) {
            if (distanceTask > 0) {
                var me = this;

                var whatWeCan = (this.getAmountOfGasoline() / this.getGasolineConsumption()) * 100; // because gasolineConsumption is for 100 km
                if (whatWeCan < distanceTask) {
                    this.warningMessage('We need more gas');
                    return false;
                }

                var howManyGasWeWillUse = (distanceTask * this.getGasolineConsumption()) / 100; // because gasolineConsumption is for 100 km

                var time = distanceTask / speed;

                this.setMoving(true);
                this.printInfo();
                this.warningMessage('Start moving');

                this.setAverageSpeed(this.getAverageSpeed() ? ((this.getAverageSpeed() + speed) / 2) : speed);

                setTimeout(function () {
                    me.setRunout(me.getRunout() + distanceTask);
                    me.setAmountOfGasoline(me.getAmountOfGasoline() - howManyGasWeWillUse);
                    me.setMoving(false);
                    me.printInfo();
                    me.warningMessage('Stop moving');
                }, time * 1000); // 1000 is for more reality

                return true;
            } else {
                this.warningMessage('Distance must be more than 0');
            }
        } else {
            this.warningMessage('Speed must be more than 0');
        }
    }

    return {
        mixins: {
            logger: 'TestApp.gameVehicles.Logger'
        },

        config: {
            color: '',
            gasolineConsumption: 0,
            amountOfGasoline: 0,
            moving: false,
            runout: 0,
            averageSpeed: 0
        },

        statics: {
            vehiclesCount: 0
        },

        constructor: constructor,

        applyColor: applyColor,
        applyGasolineConsumption: applyGasolineConsumption,
        applyAmountOfGasoline: applyAmountOfGasoline,

        startMoving: startMoving,

        printInfo: printInfo
    }
});