/**
 * Created by itrambovetskyi on 19.02.2016.
 */
Ext.define('Personnel', {
    extend : 'Ext.data.Model',
    idProperty:'name',

    fields: [
        {name: 'name', email: 'email', phone: 'phone'}
    ],

    validations : [{
        type : 'presence',
        field : 'email'
    }],

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
