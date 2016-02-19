Ext.define('TestApp.view.main.TestForm.TextFiledWithSub', {
	extend: 'Ext.container.Container',
	xtype: 'textfiledwithsub',
	
	//filed label
	label: null,
	//filed name
	name: null,
	//filed subs
	subscription: null,
	//filed width
	filedWidth: 100,

	initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
        	layout:'vbox',
        	items: [
	            {
	                xtype: 'textfield',
	                fieldLabel: me.label,
	                labelAlign: 'left',
	                name: me.name,
	                width: me.filedWidth,
	            },
	            {
	            	xtype: 'displayfield',
			        value: me.subscription,
			        margin: '-15 0 0 110'
	            }
	        ]
        });

        me.callParent(arguments);
    }

});

