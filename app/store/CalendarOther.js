/**
 * Created by itrambovetskyi on 19.02.2016.
 */
Ext.define('TestApp.store.CalendarOther', {
    extend: 'Ext.data.TreeStore',
    model: 'CalendarName',
    alias: 'store.calendarOther',

    root: {
        expanded: true,
        children: [{
            text: 'Other Calendars',
            expanded: false,
            checked: false,
            glyph: null,
            iconCls: 'no-icon',
            children: [{
                text: 'CalendarOther',
                leaf: true,
                checked: false,
                iconCls: 'no-icon'
            }]
        }]
    }
});
