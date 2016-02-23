/**
 * Created by itrambovetskyi on 22.02.2016.
 */
Ext.define('TestApp.view.controller.ToDoController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.todocontroller',

    requires: [
        'TestApp.view.main.ToDo.ToDoWindow',
        'TestApp.store.ToDoTasks'
    ],

    init: function () {
        var mainWindow = this.view;
        var buttonCreate = this.lookupReference('buttonCreate');
        var buttonDelete = this.lookupReference('actioncolumn').items[0];

        mainWindow.on('itemclick', function (sender, record) {
            var updateWindow = Ext.create('TestApp.view.main.ToDo.ToDoWindow', {
                userTitle: record.get('name') + ' -  Update task',
                process: function () {
                    var form = this.down('#taskForm');
                    form.updateRecord();
                }
            });
            var form = updateWindow.down('#taskForm');
            form.loadRecord(record);
            updateWindow.show();
        });

        mainWindow.on('beforerender', function () {
            var store = Ext.data.StoreManager.lookup('taskStore');
            store.load();
        });

        buttonCreate.on('click', function () {
            var createWindow = Ext.create('TestApp.view.main.ToDo.ToDoWindow', {
                userTitle: 'Create new task',
                process: function () {
                    var store = Ext.data.StoreManager.lookup('taskStore');
                    var form = this.down('#taskForm');
                    form.updateRecord();
                    store.add(form.getRecord());
                    store.sync();
                }
            });
            var form = createWindow.down('#taskForm');
            form.loadRecord(Ext.create('TestApp.model.ToDoTasks', {
                startDate: new Date(),
                endDate: new Date()
            }));
            createWindow.show();
        });

        buttonDelete.handler = function (grid, rowIndex) {
            var rec = grid.getStore().getAt(rowIndex);
            rec.store.remove(rec);
            rec.store.sync();
        };
    }
});
