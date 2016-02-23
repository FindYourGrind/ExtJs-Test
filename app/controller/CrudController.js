/**
 * Created by itrambovetskyi on 22.02.2016.
 */
Ext.define('TestApp.view.controller.CrudController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.crudcontroller',

    requires: [
        'TestApp.view.main.CRUDtable.UserWindow'
    ],

    onItemSelected: function (sender, record) {
        var updateWindow = Ext.create('TestApp.view.main.CRUDtable.UserWindow', {
            userTitle: record.get('name') + ' -  Update user',
            process: function () {
                var form = this.down('#userForm');
                form.updateRecord();
            }
        });
        var form = updateWindow.down('#userForm');
        form.loadRecord(record);
        updateWindow.show();
    },

    onCreateClick: function () {
        var createWindow = Ext.create('TestApp.view.main.CRUDtable.UserWindow', {
            userTitle: 'Create new user',
            process: function () {
                var store = Ext.data.StoreManager.lookup('usersStore');
                var form = this.down('#userForm');
                form.updateRecord();
                store.add(form.getRecord());
            }
        });
        var form = createWindow.down('#userForm');
        form.loadRecord(Ext.create('TestApp.model.Personnel'));
        createWindow.show();
    },

    onDeleteClick: function (grid, rowIndex) {
        var rec = grid.getStore().getAt(rowIndex);
        rec.store.remove(rec);
        rec.store.sync();
    },

    onUserWindowOkClock: function (btn) {
        var userWindow = btn.up('userwindow');
        userWindow.process();
        userWindow.close();
    },

    onUserWindowCloseClick: function (btn) {
        var userWindow = btn.up('userwindow');
        userWindow.close();
    }
});
