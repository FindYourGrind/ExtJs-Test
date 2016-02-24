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

    header:{
        titlePosition: 1,

        items:[{
            xtype: 'image',
            src: 'http://sdtimes.com/wp-content/uploads/2014/09/todo-manager-icon.png',
            width: 40,
            height: 40,
            margin: '0 5 0 5'
        },{
            xtype: 'image',
            src: 'http://s1.iconbird.com/ico/2013/9/452/w512h5121380477032search.png',
            width: 24,
            height: 24,
            margin: '5 5 5 5'
        }, {
            xtype: 'textfield',
            name: 'searchField',
            itemId: 'searchField',
            hideLabel: true,
            width: 200,
            listeners: {
                change: 'onTextFieldChange'
            }
        }]
    },
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
                tooltip: 'Delete',
                handler: 'onClickDeleteButton'
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
