/**
 * Created by itrambovetskyi on 19.02.2016.
 */
Ext.define('TestApp.view.main.EventsTest', {
    extend: 'Ext.container.Container',
    xtype: 'eventstest',

    requires: [],

    items: [
        Ext.create('Ext.Panel', {
            html: 'My Panel',
            listeners: {
                afterrender: function() {
                    Ext.Msg.alert('We have been rendered');
                }
            }
        }),
        Ext.create('Ext.Button', {
            text: 'Click Me',
            renderTo: Ext.getBody(),
            listeners: {
                click: function() {
                    Ext.Msg.alert('I was clicked!');
                }
            }
        }),
        Ext.create('Ext.Button', {
            renderTo: Ext.getBody(),
            text: 'My Button',
            listeners: {
                mouseover: function() {
                    this.hide();
                },
                hide: function() {
                    // Waits 1 second (1000ms), then shows the button again
                    Ext.defer(function() {
                        this.show();
                    }, 1000, this);
                }
            }
        })
    ]
});
