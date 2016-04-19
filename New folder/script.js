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
var d = new Date();
var mn = d.getMonth() + 1;

var table = document.createElement("TABLE");
table.id = 'table';
table.style.width = '100%';

var nxt = document.createElement("BUTTON");
nxt.innerHTML = 'next';
nxt.id = 'nxt';
nxt.addEventListener("click", function () {
    mn++;
    makeDays(new Date(), mn);
});


var prv = document.createElement("BUTTON");
prv.innerHTML = 'prev';
prv.id = 'prv';
prv.addEventListener("click", function () {
    mn--;
    makeDays(new Date(), mn);
});


var title = document.createElement("div");

title.className = 'title';

function Calendar(id, date) {
    var cal = document.getElementById('calendar');
    var currentMonth = date.getMonth() + 1;
    createCalendar();
    makeDays(date, currentMonth);

}

function makeDays(date, month) {

    //get date 
    var day = date.getDate();
    var year = date.getFullYear();
    var first = new Date(year + "-" + month + "-01").getDay();
    var last = new Date(year, month, 0).getDate();
    var lastDayOfLastMonth = new Date(year, month - 1, 0).getDate();


    //get next and last month
    var x = new Date();
    x.setMonth(x.getMonth());
    var lastMonth = x.getMonth();
    var nextMonth = x.getMonth() + 1;

    //get days
    var count = 0;
    var count2 = 1;
    var end = 1;

    var prev = lastDayOfLastMonth - first + 1;
    title.innerHTML = months[month - 1] + " " + year;
    title.appendChild(prv);
    title.appendChild(nxt);
    var x = new Date();
    var table = document.getElementById('table');
    for (var i = 1, row; row = table.rows[i]; i++) {
        for (var j = 0, cell; cell = row.cells[j]; j++) {
            count++;
            if (count < first + 1) {
                cell.innerHTML = prev;
                cell.className = 'notThisMonth';
                prev++;
                cell.onclick = function () {
                    month--;
                    makeDays(new Date(), month);
                }
            } else if (count >= first + 1) {
                if (count2 <= last) {
                    if (count2 === day && months[month - 1] === months[x.getMonth()]) {
                        cell.className = 'first btn';
                        cell.innerHTML = count2;
                        count2++;
                    } else {
                        cell.className = 'btn';
                        cell.innerHTML = count2;
                        count2++;
                    }
                } else {
                    cell.innerHTML = end;
                    cell.className = 'notThisMonth';
                    cell.onclick = function () {
                        month++;
                        makeDays(new Date(), month);
                    }
                    end++
                }
            }
        }
    }
}

function createCalendar() {



    var header = document.createElement('tr');
    for (var j = 0; j < 7; j++) {
        var tbd = document.createElement('th');
        tbd.innerHTML = days[j];
        console.log(days[j]);
        header.appendChild(tbd);
    }
    table.appendChild(header);



    for (var i = 0; i < 6; i++) {
        var tbr = document.createElement('tr');
        for (var j = 0; j < 7; j++) {
            var tbd = document.createElement('td');
            tbr.appendChild(tbd);
        }
        table.appendChild(tbr);
    }
}

document.getElementById('calendar').appendChild(title);
document.getElementById('calendar').appendChild(table);


Calendar(document.getElementById('calendar'), new Date());