function dateSim(){
    var dd = new Date();
    return {year: dd.getFullYear(), month: dd.getMonth()}
}

Ext.define('TestApp.view.main.CalendarGrid', function () {

    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    function maxDays(params)
    {
        var here = new Date(params.year, params.month);
        here.setDate(32);
        return 32 - here.getDate();
    }

    function generateCalendar (params) {
        var column = {
            layout: null,
            items: []
        };
        column.layout = {
            type: 'vbox'
        };

        var maximumDays = maxDays({year: params.year, month: params.month});
        var maximumDays2 = maximumDays;

        for(var cellCountY = 0; cellCountY < 5; cellCountY++) {
            var row = {
                layout: null,
                items: []
            };
            row.layout = {
                type: 'hbox'
            };
            if (maximumDays) {
                for(var cellCountX = 0; cellCountX < 7; cellCountX++) {
                    row.items.push({
                        xtype: 'dayinfo',
                        month: monthNames[params.month],
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
            'TestApp.view.main.DayInfo'
        ],

        layout: {
            type: 'vbox'
        },

        items: generateCalendar(dateSim())
    }
})