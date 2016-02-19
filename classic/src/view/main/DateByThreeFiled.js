Ext.define('TestApp.view.main.DateByThreeFiled', {
	extend: 'Ext.container.Container',
	xtype: 'datebythreefiled',

    requires: [
        'TestApp.view.main.HelpTip'
    ],

    defaults: {
        labelAlign: 'left',
    },

    // Title for help
	tipTitle: null,
	// Help information
	tipText: null,
	// Main label
	fieldLabel: null,

	initComponent: function() {
        var me = this;

        Ext.apply(me, {
        	layout:'hbox',
	        items: [
	            {
	                xtype: 'combobox',
	                emptyText: 'Month',
	                name: 'month',
	                width: 210,
	                margin: '0 5 0 0', // t,r,b,l
	                fieldLabel: me.fieldLabel
	            },
	            {
	                xtype: 'combobox',
	                emptyText: 'Day',
	                name: 'day',
	                width: 110,
	                margin: '0 5 0 0' // t,r,b,l
	            },
	            {
	                xtype: 'combobox',
	                emptyText: 'Year',
	                name: 'year',
	                width: 110,
	                margin: '0 0 0 0' // t,r,b,l
	            },
	            {
	            	xtype: 'helptip',
	            	tipTitle: me.tipTitle,
					tipText: me.tipText,
					margin: '2 10 0 10', // t,r,b,l
	            }
	        ]
        });

        me.callParent(arguments);
    }
});

