Ext.define('TestApp.view.main.ComboboxWithHelpTip', {
	extend: 'Ext.container.Container',
	xtype: 'comboboxwithhelptip',

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
	// Combobox placeholder 
	emptyTextForComboBox: null,
	// Width of placeholder 
	comboBoxWidth: null,
	// Main label
	fieldLabel: null,

	initComponent: function() {
        var me = this;

        Ext.apply(me, {
        	layout:'hbox',
	        items: [
	            {
	                xtype: 'combobox',
	                emptyText: me.emptyTextForComboBox,
	                width: me.comboBoxWidth,
	                fieldLabel: me.fieldLabel
	            },
	            {
	            	xtype: 'helptip',
	            	tipTitle: me.tipTitle,
					tipText: me.tipText,
					margin: '2 10 0 10' // t,r,b,l
	            },

	        ]
        });

        me.callParent(arguments);
    } 
});
