/**
 * Created by itrambovetskyi on 19.02.2016.
 */
Ext.define('TestApp.view.main.ToDo.ToDoWindow', {
    extend: 'Ext.window.Window',

    requires: ['TestApp.store.CategoryForToDoTask'],

    xtype: 'taskwindow',

    width: 400,
    minHeight: 300,
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
                    reference: 'buttonOk'
                },
                    {
                        text: 'Close',
                        reference: 'buttonClose'
                    }]
            }],

            items: [
                {
                    xtype: 'form',
                    itemId: 'taskForm',

                    defaultType: 'textfield',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [{
                        fieldLabel: 'Title',
                        name: 'title'
                    }, {
                        xtype: 'textareafield',
                        grow: true,
                        fieldLabel: 'Task',
                        name: 'task',
                        height: 200
                    }, {
                        xtype: 'datefield',
                        fieldLabel: 'Start Date',
                        name: 'startDate',
                        format: 'd m Y',
                        submitFormat: 'd m Y',
                        value: new Date()
                    }, {
                        xtype: 'datefield',
                        fieldLabel: 'End Date',
                        name: 'endDate',
                        format: 'd m Y',
                        submitFormat: 'd m Y',
                        value: new Date()
                    }, {
                        xtype: 'combobox',
                        fieldLabel: 'Choose Category',
                        queryMode: 'local',
                        emptyField: 'choose category',
                        submitEmptyField: false,
                        store: Ext.create('TestApp.store.CategoryForToDoTask'),
                        displayField: 'name',
                        name: 'category'
                    }]
                }
            ]
        });

        me.callParent(arguments);
    }
});
