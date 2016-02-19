Ext.define('TestApp.view.main.TestForm.Phone', {
	extend: 'Ext.container.Container',
	xtype: 'phone',

    requires: [
        'TestApp.view.main.TestForm.TextFiledWithSub',
        'TestApp.view.main.TestForm.HelpTip'
    ],

    defaults: {
        labelAlign: 'left',
    },

    // Title for help
	tipTitle: null,
	// Help information
	tipText: null,

	initComponent: function() {
        var me = this;

        Ext.apply(me, {
        	layout:'hbox',
	        items: [
	            {
	                xtype: 'textfiledwithsub',
	                name: 'phoneInternal',
	                label: 'Phone',
	                subscription: 'No spaces or dashes',
	                filedWidth: 325
	            },
	            {
	            	xtype: 'helptip',
	            	tipTitle: me.tipTitle,
					tipText: me.tipText,
					margin: '2 10 0 10', // t,r,b,l
	            },
	            {
	                xtype: 'combobox',
	                value: 'Mobile',
	                name: 'telephoneType',
	                width: 125
	            }
	        ]
        });

        me.callParent(arguments);
    }
});

