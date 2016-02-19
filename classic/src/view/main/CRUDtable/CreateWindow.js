/**
 * Created by itrambovetskyi on 19.02.2016.
 */
Ext.define('TestApp.view.main.CRUDtable.CreateWindow', {
    extend: 'Ext.window.Window',
    xtype: 'createwindow',

    x: 400,
    y: 400,
    //width: 600,
    autoSize: true,
    autoScroll: true,
    maximizable: true,
    bodyCls: 'red',
    bodyPadding: '10px',
    bodyStyle: 'background-color:#fff',
    shadow: true,
    draggable: true,
    closable: true,
    resizable: false,
    modal: false,
    headerPosition: 'top',

    defaults: {
        width: 400
    },

    defaultType: 'textfield',
    layout: {
        type: 'vbox'
    },

    store: null,

    initComponent: function () {
        var me = this;

        Ext.apply(me, {
            title: 'Create new user',
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
                    text: 'Create',
                    itemId: 'btnCreate',
                    listeners: {
                        click: function () {
                            var name = Ext.getCmp('nameCreate').getValue(),
                                email = Ext.getCmp('emailCreate').getValue(),
                                phone = Ext.getCmp('phoneCreate').getValue();
                            me.store.add({name: name, email: email, phone: phone});
                            me.close();
                        }
                    }
                }]
            }],

            items: [{
                fieldLabel: 'Name',
                id: 'nameCreate'
            }, {
                fieldLabel: 'Email',
                id: 'emailCreate'
            }, {
                fieldLabel: 'Phone',
                id: 'phoneCreate'
            }]
        });

        me.callParent(arguments);
    }
});
