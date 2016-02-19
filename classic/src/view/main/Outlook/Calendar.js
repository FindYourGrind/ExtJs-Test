Ext.define('TestApp.view.main.Outlook.Calendar', {
    extend: 'Ext.tab.Panel',
    xtype: 'calendar',

    requires: [
        'TestApp.view.main.Outlook.CalendarGrid'
    ],

    listeners: {

    },

    tbar: [{
        height: 35,
        width: 162,
        html: 'Monday',
        margin: '0 7 0 0'
    },{
        height: 35,
        width: 162,
        html: 'Tuesday',
        margin: '0 7 0 7'

    },{
        height: 35,
        width: 162,
        html: 'Wednesday',
        margin: '0 7 0 7'
    },{
        height: 35,
        width: 162,
        html: 'Thursday',
        margin: '0 8 0 7'
    },{
        height: 35,
        width: 162,
        html: 'Friday',
        margin: '0 8 0 7'
    },{
        height: 35,
        width: 162,
        html: 'Seturday',
        margin: '0 8 0 7'
    },{
        height: 35,
        width: 162,
        html: 'Sunday',
        margin: '0 8 0 7'
    }],

    items: [{
        title: 'Calendar 1',
        closable: true,
        xtype: 'calendargrid'
    }, 
    {
        title: 'Calendar 2',
        closable: true
        //xtype: 'calendargrid'
    }, 
    {
        title: 'Calendar 3',
        closable: true,
        xtype: 'calendargrid'
    }]
})