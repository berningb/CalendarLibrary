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

var monthabr = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
];

var yearsAhead = 0;
var d = new Date();
var mn = d.getMonth() + 1;


var day = d.getDate();

calendar.className = 'effect__click';


var title = document.createElement("div");
title.className = 'title';
title.id = 'myTitle';

var footer = document.createElement('div');
footer.className = 'footer';
footer.id = 'myFooter';

var table = document.createElement("TABLE");
table.id = 'table';
table.style.width = '100%';

var circle = document.createElement('div');
circle.className = 'circle';

var front = document.createElement('div');
front.id = 'front';

var back = document.createElement('div');
back.id = 'back';

var flipper = document.createElement('div');
flipper.id = 'flipper';

var nxt = document.createElement("BUTTON");
nxt.innerHTML = '&#x276f;';
nxt.id = 'nxt';
nxt.className = 'btn2';
nxt.addEventListener('click', next);

var prv = document.createElement("BUTTON");
prv.innerHTML = '&#x276e;';
prv.id = 'prv';
prv.className = 'btn2';
prv.addEventListener('click', last)

var backTitle = document.createElement('div');
backTitle.id = 'bt';
back.appendChild(backTitle);

var input = document.createElement('input');
input.placeholder = ' Event Name...';
input.id = 'input';
backTitle.appendChild(input);

var display = document.createElement('div');


var displayDay = document.createElement('div');
var displayMonth = document.createElement('div');

var lMonth = document.createElement('div');
var nMonth = document.createElement('div');

function Calendar(id, date) {
    var cal = document.getElementById('calendar');
    var currentMonth = getLastMonth(date);
    createCalendar();
    fillTitle(date, getCurrentMonth(), getCurrentYear(date));
    fillFooter(date, getCurrentMonth(), getCurrentYear(date));
    fillCalendar(date, getCurrentMonth(), getCurrentYear(date));
}

function fillCalendar(date, month, year) {
    var count = 0;
    var count2 = 1;
    var end = 1;
    var last = new Date(year, month, 0).getDate();
    var first = new Date(year + "-" + month + "-01").getDay();
    var lastDayOfLastMonth = new Date(year, month - 1, 0).getDate();
    var prev = lastDayOfLastMonth - first + 1;
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
                    fillCalendar(d, month, year);
                    fillTitle(d, month, year);


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
                        cell.id = 'cell' + (count2 - 1);

                        //                                                cell.onclick = function () {
                        //                                   var x = front.classList;
                        //                                   var cards = document.querySelectorAll("#calendar.effect__click");
                        //                                   for (var i = 0, len = cards.length; i < len; i++) {
                        //                                       var card = cards[i];
                        //                                       clickListener(card);
                        //                                   }                      }

                    }
                } else {
                    cell.innerHTML = end;
                    cell.className = 'notThisMonth';
                    cell.onclick = function () {
                        month++;
                        fillCalendar(d, month, year);
                        fillTitle(d, month, year);
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

function getCurrentMonth() {
    var d = new Date();
    var date = d.getMonth() + 1;
    return date;
}

function getNextMonth() {
    var gnm = getCurrentMonth() + 1;
    return gnm;
}

function getLastMonth() {
    var glm = getCurrentMonth() - 1;
    return glm;
}

function getCurrentYear() {
    var gny = d.getFullYear() + yearsAhead;
    return gny;
}

function last() {
    if (mn === 1) {
        yearsAhead--;
        fillTitle(d, 12, getCurrentYear());
        fillFooter(d, 12, getCurrentYear());
        fillCalendar(d, 12, getCurrentYear());
        mn = 12;
    } else {
        mn--;
        fillTitle(d, mn, getCurrentYear());
        fillFooter(d, mn, getCurrentYear());
        fillCalendar(d, mn, getCurrentYear());
    }
}

function next() {
    if (mn === 12) {
        yearsAhead++;
        fillTitle(d, 1, getCurrentYear());
        fillFooter(d, 1, getCurrentYear());
        fillCalendar(d, 1, getCurrentYear());
        mn = 1;
    } else {
        mn++;
        fillTitle(d, mn, getCurrentYear());
        fillFooter(d, mn, getCurrentYear());
        fillCalendar(d, mn, getCurrentYear());
    }
}


function fillTitle(date, month, year) {
    displayDay.className = "displayDay";
    displayMonth.className = "displayMonth";
    displayMonth.innerHTML = monthabr[month - 1] + " " + year;
    displayDay.innerHTML = weekday[date.getDay()] + " " + day;
    title.appendChild(displayDay);
    title.appendChild(displayMonth);
}

function fillFooter(date, month, year) {
    footer.appendChild(prv);
    footer.appendChild(nxt);

    lMonth.className = "lmonth";
    nMonth.className = "nmonth";
    console.log(month);
    if (month === 12) {
        nMonth.innerHTML = 'Jan';
    } else if (month === 1) {
        lMonth.innerHTML = 'Dec';
    } else {
        lMonth.innerHTML = monthabr[(month - 2)];
        nMonth.innerHTML = monthabr[month];
    }
    footer.appendChild(lMonth);
    footer.appendChild(nMonth);
}
//function clickListener(card) {
//    card.addEventListener("click", function () {
//        var c = this.classList;
//        c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
//    });
//}

document.getElementById('calendar').appendChild(front);
document.getElementById('calendar').appendChild(back);
document.getElementById('front').appendChild(title);
document.getElementById('front').appendChild(table);
document.getElementById('front').appendChild(footer);


Calendar(document.getElementById('calendar'), new Date());