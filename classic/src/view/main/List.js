/**
 * This view is an example list of people.
 */
Ext.define('TestApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

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
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
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
        select: 'onItemSelected'
    }
});
