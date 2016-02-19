/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('TestApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    requires: [
        'TestApp.view.main.CRUDtable.UpdateDeleteWindow',
        'TestApp.view.main.CRUDtable.CreateWindow'
    ],

    onItemSelected: function (sender, record) {
        var win = Ext.create({
            xtype: 'updatedeletewindow',
            record: record
        });
        win.show();
    },

    onCreateClick: function () {
        var win = Ext.create({
            xtype: 'createwindow',
            store: Ext.data.StoreManager.lookup('usersStore')
        });
        win.show();
    }
});
