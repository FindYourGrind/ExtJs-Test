/**
 * Created by itrambovetskyi on 19.02.2016.
 */
Ext.define('TestApp.store.CalendarOwn', {
    extend: 'Ext.data.TreeStore',
    model: 'CalendarName',
    alias: 'store.calendarOwn',

    root: {
        expanded: true,
        children: [{
            text: 'My Calendars',
            expanded: false,
            checked: false,
            glyph: null,
            iconCls: 'no-icon',
            children: [{
                text: 'Calendar-Own1',
                leaf: true,
                checked: false,
                iconCls: 'no-icon'
            }, {
                text: 'Calendar-Own2',
                isLayover: true,
                leaf: true,
                checked: false,
                iconCls: 'no-icon'
            }]
        }]
    }
});