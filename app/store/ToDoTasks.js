Ext.define('TestApp.store.ToDoTasks', {
    extend: 'Ext.data.Store',
    model: 'TestApp.model.ToDoTasks',
    groupField: 'category'
});
