/**
 * Created by itrambovetskyi on 23.02.2016.
 */
Ext.define('TestApp.view.controller.ToDoFormUpdateController', function () {

    function  onAcceptFunction(userWindow) {
        var form = userWindow.down('#taskForm');
        form.updateRecord();
    }

    function  onButtonOk(btn) {
        var userWindow = btn.up('taskwindow');
        onAcceptFunction(userWindow);
        userWindow.close();
    }

    function onButtonClose (btn) {
        var userWindow = btn.up('taskwindow');
        userWindow.close();
    }

    return {
        extend: 'Ext.app.ViewController',

        alias: 'controller.todoformupdatecontroller',

        requires: [
            'TestApp.view.main.ToDo.ToDoWindow'
        ],
        init: function () {
            var me = this;
            var buttonOk = this.lookupReference('buttonOk');
            var buttonClose = this.lookupReference('buttonClose');

            buttonOk.on('click', onButtonOk);
            buttonClose.on('click', onButtonClose);
        }
    }
});





