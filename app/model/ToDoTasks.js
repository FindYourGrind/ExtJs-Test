/**
 * Created by itrambovetskyi on 19.02.2016.
 */
Ext.define('TestApp.model.ToDoTasks', {
    extend : 'Ext.data.Model',
    fields: [
        {name: 'title', type: 'string'},
        {name: 'task', type: 'string'},
        {name: 'startDate', type: 'date', format: 'd m Y' },
        {name: 'endDate', type: 'date', format: 'd m Y' },
        {name: 'category', type: 'string'}
    ],
    proxy: {
        type: 'localstorage',
        id: 'todotasks'
    }
});
