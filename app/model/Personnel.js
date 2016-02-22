/**
 * Created by itrambovetskyi on 19.02.2016.
 */
Ext.define('TestApp.model.Personnel', {
    extend : 'Ext.data.Model',

    fields: [
        {name: 'name', type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'phone', type: 'string'}
    ],

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
