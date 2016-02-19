
Ext.define('TestApp.view.main.Outlook.CalendarGrid', function () {

    function dateSim(){
        var dd = new Date();
        return {year: dd.getFullYear(), month: dd.getMonth()}
    }

    function generateCalendar (params) {
        var column = {
            layout: null,
            items: []
        };
        column.layout = {
            type: 'vbox'
        };

        var maximumDays = Ext.Date.getDaysInMonth(new Date(params.year, params.month));

        var maximumDays2 = maximumDays;

        for(var cellCountY = 0; cellCountY < 5; cellCountY++) {
            var row = {
                layout: 'hbox',
                items: []
            };
            if (maximumDays) {
                for(var cellCountX = 0; cellCountX < 7; cellCountX++) {
                    row.items.push({
                        xtype: 'dayinfo',
                        month: Ext.Date.monthNames[params.month],
                        day: (maximumDays2 - maximumDays) + 1
                    })
                    maximumDays--;
                    if (maximumDays === 0) {
                        break;
                    }
                }
            } else {
                break;
            }
            column.items.push(row);
        }
        return column;
    }

    return {
        extend: 'Ext.container.Container',
        xtype: 'calendargrid',

        requires: [
            'TestApp.view.main.Outlook.DayInfo'
        ],

        layout: {
            type: 'vbox'
        },

        items: generateCalendar(dateSim())
    }
})