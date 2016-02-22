/**
 * This view is an example list of people.
 */
Ext.define('TestApp.view.main.CRUDtable.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    controller: 'crudcontroller',

    requires: [
        'TestApp.store.Personnel'
    ],

    title: 'Personnel',

    store: Ext.create('TestApp.store.Personnel', {
        storeId: 'usersStore'
    }),

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 },
        {
            xtype:'actioncolumn',
            width:50,
            items: [{
                icon: 'https://cdn3.iconfinder.com/data/icons/softwaredemo/PNG/128x128/DeleteRed.png',
                width: 20,
                height: 20,
                tooltip: 'Delete',
                handler: 'onDeleteClick'
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
            listeners: {
                click: 'onCreateClick'
            }
        }]
    }],

    listeners: {
        itemclick: 'onItemSelected'
    }
});
