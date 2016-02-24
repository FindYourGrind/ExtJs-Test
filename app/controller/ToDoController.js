/**
 * Created by itrambovetskyi on 22.02.2016.
 */
Ext.define('TestApp.view.controller.ToDoController', function () {

    function serchRecords (textField) {
        var searchValue = textField.value;
        var store = Ext.data.StoreManager.lookup('taskStore');

        var filters = new Ext.util.Filter({
            filterFn: function(item) {
                return((item.get('title').search(searchValue) > -1) ||
                       (item.get('task').search(searchValue) > -1))
            }
        });

        store.clearFilter(true);
        store.filter(filters);
    }

    function deleteRecord (grid, rowIndex) {
        var rec = grid.getStore().getAt(rowIndex);
        rec.store.remove(rec);
        rec.store.sync();
    }

    function clickOnRecord(sender, record) {
        var updateWindow = Ext.create('TestApp.view.main.ToDo.ToDoWindow', {
            userTitle: record.get('title') + ' -  Update task',
            controller: 'todoformupdatecontroller'
        });
        var form = updateWindow.down('#taskForm');
        form.loadRecord(record);
        updateWindow.show();
    }

    function beforeGridRender () {
        var store = Ext.data.StoreManager.lookup('taskStore');
        store.load();
    }

    function onButtonCreateClick () {
        var createWindow = Ext.create('TestApp.view.main.ToDo.ToDoWindow', {
            userTitle: 'Create new task',
            controller: 'todoformcreatecontroller'
        });
        var form = createWindow.down('#taskForm');
        form.loadRecord(Ext.create('TestApp.model.ToDoTasks', {
            startDate: new Date(),
            endDate: new Date()
        }));
        createWindow.show();
    }

    return {
        extend: 'Ext.app.ViewController',

        alias: 'controller.todocontroller',

        requires: [
            'TestApp.view.main.ToDo.ToDoWindow',
            'TestApp.store.ToDoTasks'
        ],

        onTextFieldChange: serchRecords,
        onClickDeleteButton: deleteRecord,

        init: function () {
            var mainWindow = this.view;
            var buttonCreate = this.lookupReference('buttonCreate');

            mainWindow.on('itemclick', clickOnRecord);
            mainWindow.on('beforerender', beforeGridRender);
            buttonCreate.on('click', onButtonCreateClick);
        }
    }
});
