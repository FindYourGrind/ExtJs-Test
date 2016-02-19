/**
 * Created by itrambovetskyi on 19.02.2016.
 */
Ext.define('TestApp.view.main.CRUDtable.UpdateDeleteWindow', {
    extend: 'Ext.window.Window',
    xtype: 'updatedeletewindow',

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

    //store handler
    record: null,

    initComponent: function () {
        var me = this;

        Ext.apply(me, {
            title: me.record.id + ' -  Update or delete user',
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
                    text: 'Update',
                    itemId: 'btnUpdate',
                    listeners: {
                        click: function () {
                            var name = Ext.getCmp('nameUpdate').getValue(),
                                email = Ext.getCmp('emailUpdate').getValue(),
                                phone = Ext.getCmp('phoneUpdate').getValue();
                            me.record.set({name: name, email: email, phone: phone});
                            me.close();
                        }
                    }
                },
                    {
                        text: 'Delete',
                        itemId: 'btnDelete',
                        listeners: {
                            click: function () {
                                me.record.store.remove(me.record);
                                me.close();
                            }
                        }
                    }]
            }],

            items: [{
                fieldLabel: 'Name',
                id: 'nameUpdate',
                value: me.record.get('name')
            }, {
                fieldLabel: 'Email',
                id: 'emailUpdate',
                value: me.record.get('email')
            }, {
                fieldLabel: 'Phone',
                id: 'phoneUpdate',
                value: me.record.get('phone')
            }]
        });

        me.callParent(arguments);
    }
});
