Ext.define('TestApp.store.Personnel', {
    extend: 'Ext.data.Store',
    model: 'TestApp.model.Personnel',
    alias: 'store.personnel',

    data: {
        items: [
        { name: 'Jean Luc',   email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
        { name: 'Worf11',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
        { name: 'Worf',       email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
        { name: 'Data',       email: "mr.data@enterprise.com",        phone: "555-444-4444" }
    ]}
});
