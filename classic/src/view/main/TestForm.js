/**
 * This view is an example list of people.
 */
Ext.define('TestApp.view.main.TestForm', {
    extend: 'Ext.container.Container',
    xtype: 'testform',

    requires: [
        'TestApp.view.main.TextFiledWithSub',
        'TestApp.view.main.TextFiledWithButton',
        'TestApp.view.main.DateByThreeFiled',
        'TestApp.view.main.ComboboxWithHelpTip',
        'TestApp.view.main.Phone'
    ],

    defaultType: 'textfield',

    defaults: {
        width: 500,
    },

    listeners: {
        select: 'onItemSelected'
    },

    items: [
            {
                fieldLabel: 'First Name',
                name: 'firstName',
            },
            {
                fieldLabel: 'Last Name',
                name: 'lastName'
            },
            {
                xtype: 'textfiledwithsub',
                name: 'email',
                label: 'Email',
                subscription: '(Your email address will be your username)',
                filedWidth: 500
            },
            {
                fieldLabel: 'Re-type Email',
                name: 'reTypeEmail'
            },
            {
                xtype: 'textfiledwithsub',
                name: 'password',
                label: 'Password',
                subscription: '(Min. 8 characters, 1 number, case-sensitive)',
                filedWidth: 500,
            },
            {
                fieldLabel: 'Re-type Password',
                name: 'reTypePassword'
            },
            {
                fieldLabel: 'Address',
                name: 'address'
            },
            {
                fieldLabel: 'City',
                name: 'city'
            },
            {
                xtype: 'combobox',
                fieldLabel: 'State',
                emptyText: 'Choose a state',
                name: 'state'
            },
            {
                xtype: 'textfiledwithbutton',
                name: 'zipCode',
                label: 'Zip Code',
                buttonLabel: 'Optional',
                padding: '5 10 10 0' // t,r,b,l
            },
            {
                xtype: 'phone',
                tipTitle: 'Phone',
                tipText: 'Some help info'
            },
            {
                xtype: 'datebythreefiled',
                fieldLabel: 'Date of Birth',
                tipTitle: 'Date Of Birth',
                tipText: 'Some help info',
                padding: '5 10 5 0' // t,r,b,l
            },
            {
                xtype: 'comboboxwithhelptip',
                fieldLabel: 'Gender',
                emptyTextForComboBox: 'Choose a gender',
                tipTitle: 'Gender',
                tipText: 'Some help info',
                comboBoxWidth: 440,
                padding: '5 10 0 0' // t,r,b,l
            },
            {
                xtype: 'comboboxwithhelptip',
                fieldLabel: 'Security Question',
                emptyTextForComboBox: 'Choose a security question',
                tipTitle: 'Security Question',
                tipText: 'Some help info',
                comboBoxWidth: 440,
                padding: '5 10 5 0' // t,r,b,l
            },
            {
                xtype: 'textfiledwithsub',
                name: 'securityAnswer',
                label: 'Security Answer',
                subscription: '(Not case-sensitive)',
                filedWidth: 500
            }
           ]
});

