/**
 * Created by itrambovetskyi on 23.02.2016.
 */
Ext.define('TestApp.view.controller.ToDoFormCreateController', function () {

    function onAcceptFunction (userWindow) {
        var store = Ext.data.StoreManager.lookup('taskStore');
        var form = userWindow.down('#taskForm');
        form.updateRecord();
        store.add(form.getRecord());
        store.sync();
    }

    function onButtonOk (btn) {
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

        alias: 'controller.todoformcreatecontroller',

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
