/**
 * Created by itrambovetskyi on 23.02.2016.
 */
Ext.define('TestApp.view.controller.ToDoFormController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.todoformcontroller',

    requires: [
        'TestApp.view.main.ToDo.ToDoWindow'
    ],

    init: function () {
        var buttonOk = this.lookupReference('buttonOk');
        var buttonClose = this.lookupReference('buttonClose');

        buttonOk.on('click', function (btn) {
            var userWindow = btn.up('taskwindow');
            userWindow.process();
            userWindow.close();
        });

        buttonClose.on('click', function (btn) {
            var userWindow = btn.up('taskwindow');
            userWindow.close();
        });
    }
});
