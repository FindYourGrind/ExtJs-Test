Ext.define('TestApp.view.main.Outlook.DayInfo', {

	extend:'Ext.container.Container',
	xtype: 'dayinfo',

	month: null,
	day: null,

	border: 1,
	style: {
	    borderColor: 'gray',
	    borderStyle: 'solid'
	},

    width: 173,
    height: 150,
    margin: '2 2 2 2',

	initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
		    layout: {
		        type: 'vbox'
		    },
		    items: [{
		    	xtype: 'component',
		    	height: 20,
		    	width: 173,
		    	html: me.month + ' ' + me.day,
		    	margin: '0 5 0 10'
		    },
		    {
		    	xtype: 'component',
		    	width: 170,
			    style: {
			    	borderRadius: '3px',
			        backgroundColor:'rgba(220,237,231,0.8)'
			    },
		    	margin: '2 0 2 1',
		    	html: '11:30 Daily meetings. Conference room'
		    }]
        });

        me.callParent(arguments);
    }
});