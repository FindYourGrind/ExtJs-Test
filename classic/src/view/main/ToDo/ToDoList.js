/**
 * This view is an example list of people.
 */
Ext.define('TestApp.view.main.ToDo.ToDoList', {
    extend: 'Ext.grid.Panel',
    xtype: 'todolist',
    controller: 'todocontroller',

    requires: [
        'TestApp.store.ToDoTasks'
    ],

    title: 'ToDo Tasks',

    store: Ext.create('TestApp.store.ToDoTasks', {
        storeId: 'taskStore'
    }),

    plugins: 'gridfilters',
    features: [{ftype:'grouping'}],
    columns: [
        {
            text: 'Title',
            dataIndex: 'title',
            flex: 2,
            filter: {
                type: 'string'
            }
        },
        {
            text: 'Task',
            dataIndex: 'task',
            flex: 4,
            filter: {
                type: 'string'
            }
        },
        {
            text: 'Start Date',
            dataIndex: 'startDate',
            xtype:'datecolumn',
            format: 'd/m/Y',
            flex: 1,
            filter: {
                type: 'date'
            }
        },
        {
            text: 'End Date',
            dataIndex: 'endDate',
            xtype:'datecolumn',
            format: 'd/m/Y',
            flex: 1,
            filter: {
                type: 'date'
            }
        },
        {
            text: 'Category',
            dataIndex: 'category',
            flex: 1,
            filter: {
                type: 'string'
            }
        },
        {
            xtype:'actioncolumn',
            width:50,
            reference: 'actioncolumn',
            items: [{
                icon: 'https://cdn3.iconfinder.com/data/icons/softwaredemo/PNG/128x128/DeleteRed.png',
                width: 20,
                height: 20,
                tooltip: 'Delete'
            }]
        }
    ],

    dockedItems : [{
        xtype: 'toolbar',
        dock: 'bottom',
        ui: 'footer',
        layout: {
            pack: 'center'
        },
        defaults: {
            minWidth: 80
        },
        items: [{
            text: 'Create',
            itemId: 'btnCreate',
            reference: 'buttonCreate'
        }]
    }]
});
