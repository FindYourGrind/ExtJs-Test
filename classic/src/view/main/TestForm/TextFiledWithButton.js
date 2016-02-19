Ext.define('TestApp.view.main.TestForm.TextFiledWithButton', {
	extend: 'Ext.container.Container',
	xtype: 'textfiledwithbutton',

    defaults: {
        labelAlign: 'left'
    },

	//filed label
	label: null,
	//filed name
	name: null,
	//filed subs
	buttonLabel: null,

	initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
        	layout:'hbox',
	        items: [
	            {
	                xtype: 'textfield',
	                fieldLabel: me.label,
	                name: me.name
	            },
	            {
	                xtype: 'button',     
	                text: me.buttonLabel,
	                disabled: true,
	                margin: '0 0 0 10' // t,r,b,l
	            }
	        ]
        });

        me.callParent(arguments);
    }
});

