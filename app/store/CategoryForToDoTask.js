/**
 * Created by itrambovetskyi on 23.02.2016.
 */
Ext.define('TestApp.store.CategoryForToDoTask', {
    extend: 'Ext.data.Store',
    fields: ['name'],
    data : [
        {"name":"Programming"},
        {"name":"Electronic"},
        {"name":"Design"},
        {"name":"Construction"},
        {"name":"Testing"}
    ]
});