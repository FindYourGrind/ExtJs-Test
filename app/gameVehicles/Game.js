/**
 * Created by itrambovetskyi on 25.02.2016.
 */
Ext.define('TestApp.gameVehicles.Game', {

    requires: [
        'TestApp.gameVehicles.Vehicle',
        'TestApp.gameVehicles.Car',
        'TestApp.gameVehicles.Motorcycle',
        'TestApp.gameVehicles.GasStation',
        'TestApp.gameVehicles.Logger'
    ],

    startGame: function (carDist, motoDist) {

        var car = Ext.create('TestApp.gameVehicles.Car', 'green', 12, 60);
        var moto = Ext.create('TestApp.gameVehicles.Motorcycle', 'red', 7, 35);

        var gasStation = TestApp.gameVehicles.GasStation;

        var resultCar = car.startMoving(60, carDist);
        var resultMoto = moto.startMoving(65, motoDist);

        if(!resultCar) {
            gasStation.fillTheVehicle(car, 300);
            car.startMoving(60, carDist);
        }

        if(!resultMoto) {
            gasStation.fillTheVehicle(moto, 300);
            moto.startMoving(65, motoDist);
        }
    }
});