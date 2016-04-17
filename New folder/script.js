var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
];

var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

var tbl = document.createElement("TABLE");
tbl.style.width = '100%';

var table = document.createElement("TABLE");
table.style.width = '100%';

function Calendar(id, date) {
    makeDays(date);
}

function makeDays(date) {


    //get date 
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    var first = new Date(year + "-" + month + "-01").getDay();
    var last = new Date(year, month, 0).getDate();
    console.log(day);

    //get next and last month
    var x = new Date();
    x.setMonth(x.getMonth());
    var lastMonth = x.getMonth();
    var nextMonth = x.getMonth() + 1;

    //get days
    var count = 0;
    var count2 = 1;
    var dayCount = 0;

    //gets list of days
    for (var i = 0; i < 1; i++) {
        var tbr = document.createElement('tr');

        for (var j = 0; j < 7; j++) {
            var tbd = document.createElement('td');
            if (dayCount < 7) {
                tbd.innerHTML = days[j];
                dayCount++;
            }
            tbr.appendChild(tbd);

        }

        tbl.appendChild(tbr);
    }

    //sets days
    for (var i = 0; i < 6; i++) {
        var tbr = document.createElement('tr');


        for (var j = 0; j < 7; j++) {
            var tbd = document.createElement('td');
            tbd.className = 'tbd';
            count++;

            if (count <= first + 1) {
                tbd.innerHTML = ""
                tbd.className = 'notThisMonth';
            }

            if (count >= first + 1) {
                if (count2 <= last) {
                    if (count2 === day) {
                        tbd.className = 'first btn';
                        tbd.innerHTML = count2;
                        count2++;
                    } else {
                        tbd.className = 'btn';
                        tbd.innerHTML = count2;
                        count2++;
                    }
                } else {
                    tbd.innerHTML = ""
                    tbd.className = 'notThisMonth';
                }
            }
            tbr.appendChild(tbd);
        }
        table.appendChild(tbr);
    }

    document.getElementById('calendar').appendChild(tbl);
    document.getElementById('calendar').appendChild(table);

}

function addEvent() {

}

function remEvent() {

}

function editEvent() {

}

function createCalendar() {

}

Calendar(document.getElementById('calendar'), new Date());