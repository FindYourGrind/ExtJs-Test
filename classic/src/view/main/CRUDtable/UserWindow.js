/**
 * Created by itrambovetskyi on 19.02.2016.
 */
Ext.define('TestApp.view.main.CRUDtable.UserWindow', {
    extend: 'Ext.window.Window',
    xtype: 'userwindow',
    controller: 'crudcontroller',

    width: 400,
    minHeight: 230,
    maxHeight: 230,
    autoSize: true,
    autoScroll: true,
    maximizable: true,
    bodyCls: 'red',
    bodyPadding: '10px',
    bodyStyle: 'background-color:#fff',
    shadow: true,
    draggable: true,
    closable: true,
    resizable: true,
    modal: false,
    headerPosition: 'top',

    defaultType: 'textfield',
    layout: {
        type: 'vbox'
    },

    //store handler
    userTitle: null,
    process: null,

    initComponent: function () {
        var me = this;

        Ext.apply(me, {
            title: me.userTitle,
            layout: {
                type: 'fit'
            },
            dockedItems: [{
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
                    text: 'Ok',
                    listeners: {
                        click: 'onUserWindowOkClock'
                    }
                },
                {
                    text: 'Close',
                    itemId: 'btnDelete',
                    listeners: {
                        click: 'onUserWindowCloseClick'
                    }
                }]
            }],

            items: [
                Ext.create('Ext.form.Panel', {
                    itemId: 'userForm',
                    defaultType: 'textfield',
                    layout: [{
                        type: 'vbox',
                        align: 'stretch'
                    }],
                    items: [{
                        fieldLabel: 'Name',
                        name: 'name',
                        width: '100%'
                    }, {
                        fieldLabel: 'Email',
                        name: 'email',
                        width: '100%'
                    }, {
                        fieldLabel: 'Phone',
                        name: 'phone',
                        width: '100%'
                    }]
                })
            ]
        });

        me.callParent(arguments);
    }
});
