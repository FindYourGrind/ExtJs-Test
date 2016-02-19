Ext.define('TestApp.view.main.HelpTip', {
	extend: 'Ext.container.Container',
	xtype: 'helptip',

	//help information
	tipTitle: null,
	tipText: null,

	initComponent: function() {
        var me = this,
        	image = Ext.create('Ext.Img', {
			    src: 'http://pngicon.ru//data/thumbnails/2/1_60.png',
			    width: 30,
			    height: 30,
			    alt: 'No image',
			   	listeners: {
					afterrender: function(meImg) {
						// Register the new tip with an element's ID
						Ext.tip.QuickTipManager.register({
						    target: me.getId(),    // Target button's ID
						    title : me.tipTitle,  // QuickTip Header
						    text  : me.tipText     // Tip content  
						});
					}
				}
			});

        Ext.apply(me, {
	        items: [
	            image
	        ]
        });

        me.callParent(arguments);
    }
});

