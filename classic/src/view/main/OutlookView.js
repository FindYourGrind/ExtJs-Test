
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function getDate (dec) {
    var date = new Date();
    date.setMonth(date.getMonth() - dec);
    return date;
}

Ext.define('TestApp.view.main.OutlookView', {
    extend: 'Ext.container.Container',
    xtype: 'outlookview',

    requires: [
        'TestApp.view.main.Calendar'
    ],

    listeners: {
        select: 'onItemSelected'
    },

    layout: {
        type: 'hbox'
    },

    items: [
            {
                layout: {
                    type: 'vbox'
                },
                items: [
                    {
                        layout: {
                            type: 'vbox'
                        },
                        items: [
                                {
                                        layout: {
                                            type: 'hbox'
                                        },
                                        items: [
                                        {
                                            xtype: 'image',
                                            src: 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/calendar-icon.png',
                                            width: 30,
                                            height: 30,
                                            margin: '15 5 5 10' //t,r,b,l   
                                        },
                                        {
                                            xtype: 'displayfield',
                                            name: 'newappointmant',
                                            value: 'New Appointment',
                                            height: 30,
                                            width: 200,
                                            margin: '15 5 15 10' //t,r,b,l
                                        }
                                        ]
                                },
                                {
                                    xtype: 'datepicker',
                                    value: getDate(1),
                                    margin: '5 5 5 5', //t,r,b,l
                                    showToday: false
                                },
                                {
                                    xtype: 'datepicker',
                                    value: getDate(0),
                                    margin: '5 5 5 5', //t,r,b,l
                                    showToday: false
                                }
                                ]
                    },
                    {
                        xtype: 'treepanel',
                        width: 300,
                        rootVisible: false,
                        store: Ext.create('Ext.data.TreeStore', {
                            fields: ['text', 'duration', 'isLayover'],
                            root: {
                                expanded: true,
                                children: [{
                                    text: 'My Calendars',
                                    expanded: false,
                                    checked: false,
                                    glyph: null,
                                    iconCls: 'no-icon',
                                    children: [{
                                        text: 'Calendar-1',
                                        leaf: true,
                                        checked: false,
                                        iconCls: 'no-icon'
                                    }, {
                                        text: 'Calendar-2',
                                        isLayover: true,
                                        leaf: true,
                                        checked: false,
                                        iconCls: 'no-icon'
                                    }]
                                }]
                            }
                        })
                    },
                    {
                        xtype: 'treepanel',
                        width: 300,
                        rootVisible: false,
                        store: Ext.create('Ext.data.TreeStore', {
                            fields: ['text', 'duration', 'isLayover'],
                            root: {
                                expanded: true,
                                children: [{
                                    text: 'Other Calendars',
                                    expanded: false,
                                    checked: false,
                                    glyph: null,
                                    iconCls: 'no-icon',
                                    children: [{
                                        text: 'Calendar-1',
                                        leaf: true,
                                        checked: false,
                                        iconCls: 'no-icon'
                                    }]
                                }]
                            }
                        })
                    }
                ]
            },
            {
                layout: {
                    type: 'vbox'
                },
                items: [
                        {
                            height: 65,
                            width: 900,
                            layout: {
                                type: 'hbox'
                            },
                            items: [
                                    {
                                        xtype: 'image',
                                        src: 'http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons-256/' +
                                             '3d-transparent-glass-icons-arrows/006763-3d-transparent-glass-icon-arrows-arrowhead-solid-left.png',
                                        width: 30,
                                        height: 30,
                                        margin: '15 5 5 10' //t,r,b,l
                                    },
                                    {
                                        xtype: 'image',
                                        src: 'http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/' +
                                             '3d-transparent-glass-icons-arrows/006764-3d-transparent-glass-icon-arrows-arrowhead-solid-right.png',
                                        width: 30,
                                        height: 30,
                                        margin: '15 5 5 10' //t,r,b,l
                                    },
                                    {
                                        xtype: 'displayfield',
                                        value: monthNames[getDate(0).getMonth()] + ' ' + getDate(0).getFullYear(),
                                        margin: '15 5 5 20' //t,r,b,l
                                    }
                                    ]
                        },
                        {
                            xtype: 'calendar',
                            width: 1239,
                            height: 860
                        }
                        ]
            }
        ]
});
