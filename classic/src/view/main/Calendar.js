Ext.define('TestApp.view.main.Calendar', {
    extend: 'Ext.tab.Panel',
    xtype: 'calendar',

    requires: [
        'TestApp.view.main.CalendarGrid'
    ],

    listeners: {

    },

    tbar: [{ 
        xtype: 'grid', 
        columns: [{ 
                text: 'Mondey',
                sortable: false,
                hideable: false,
                width: 177
            },
            { 
                text: 'Tuesday',
                sortable: false,
                hideable: false,
                width: 177
            },
            { 
                text: 'Wednesday',
                sortable: false,
                hideable: false,
                width: 177
            },
            { 
                text: 'Thursday',
                sortable: false,
                hideable: false,
                width: 177
            },
            { 
                text: 'Friday',
                sortable: false,
                hideable: false,
                width: 177
            },
            { 
                text: 'Seturday',
                sortable: false,
                hideable: false,
                width: 177
            },
            { 
                text: 'Sunday',
                sortable: false,
                hideable: false,
                width: 177
        }]
    }],

    items: [{
        title: 'Calendar 1',
        closable: true,
        xtype: 'calendargrid'
    }, 
    {
        title: 'Calendar 2',
        closable: true,
        //xtype: 'calendargrid'
    }, 
    {
        title: 'Calendar 3',
        closable: true,
        xtype: 'calendargrid'
    }]
})