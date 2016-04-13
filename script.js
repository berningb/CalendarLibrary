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
    ]

var weekDays = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
    ]

function calendar(id, date) {
    var origional = id.getElementsByClassName('start')[0];

    if (typeof origional === 'undefined') {
        origional = document.createElement('table');
        origional.setAttribute('actual',
            date.getFullYear() + '/' +
            date.getMonth() + '/' +
            date.getDate())
        id.appendChild(origional);

    }

    var diff = date - new Date(origional.getAttribute('actual'));
    diff = new Date(diff).getMonth();
    var e = document.createElement('table');
    e.className = diff === 0 ? 'hide-left' : 'hide-right';
    e.innerHTML = '';

    id.appendChild(e);

    e.setAttribute('actual',
        date.getFullYear() + '/' +
        date.getMonth() + '/' +
        date.getDate())


    var row = document.createElement('tr');
    var title = document.createElement('th');
    title.setAttribute('colspan', 7);

    var btn_next = document.createElement('button');
    btn_next.className = 'btn_next';
    btn_next.innerHTML = 'next';

    var btn_prev = document.createElement('button');
    btn_prev.className = 'btn_prev';
    btn_prev.innerHTML = 'prev';

    title.appendChild(btn_prev);
    title.appendChild(document.createElement('span')).innerHTML = months[date.getMonth()] + '<span class="any">' + date.getFullYear() + '</span>';

    title.appendChild(btn_next);

    btn_prev.onclick = function () {
        date.setMonth(date.getMonth() - 1);
        calendar(id, date);
    };

    btn_next.onclick = function () {
        date.setMonth(date.getMonth() + 1);
        calendar(id, date);
    };

    row.appendChild(title);
    e.appendChild(row);

    row = document.createElement('tr');

    for (var i = 1; i < 7; i++) {
        row.innerHTML += '<th>' + weekDays[i] + '</th>';
    }

    row.innerHTML += '<th>' + weekDays[0] + '</th>';
    e.appendChild(row);

    var monthStart = new Date(date.getFullYear(), date.getMonth, -1).getDay();

    var actual = new Date(date.getFullYear(), date.getMonth(), -monthStart);


    console.log(date.getDate);
    console.log(actual.getMonth);
    console.log(date.getMonth);
    for (var s = 0; s < 6; s++) {
        var row = document.createElement('tr');
        for (var d = 1; d < 8; d++) {
            var me = document.createElement('td');
            var span = document.createElement('span');

            me.appendChild(span);

            span.innerHTML = actual.getDate();

            if (actual.getMonth() !== date.getMonth())
                me.className = 'out';

            if (date.getDate() == actual.getDate() && date.getMonth() == actual.getMonth())
                me.className = 'today';

            actual.setDate(actual.getDate() + 1);
            row.appendChild(me);
        }
        e.appendChild(row);
    }
}




//  for(var s = 0; s < 6; s++)
//    {
//        var fila = document.createElement('tr');
//
//        for(var d = 1; d < 8; d++)
//        {
//	    var cela = document.createElement('td');
//	    var span = document.createElement('span');
//
//	    cela.appendChild(span);
//
//            span.innerHTML = actual.getDate();
//
//            if(actual.getMonth() !== data.getMonth())
//                cela.className = 'fora';
//
//            if(data.getDate() == actual.getDate() && data.getMonth() == actual.getMonth())
//		            cela.className = 'avui';
//
//	    actual.setDate(actual.getDate()+1);
//            fila.appendChild(cela);
//        }
//
//        e.appendChild(fila);
//    }
//
//    setTimeout(function() {
//        e.className = 'actiu';
//        original.className +=
//        diff === 0 ? ' amagat-dreta' : ' amagat-esquerra';
//    }, 20);
//
//    original.className = 'inactiu';
//
//    setTimeout(function() {
//        var inactius = document.getElementsByClassName('inactiu');
//        for(var i = 0; i < inactius.length; i++)
//            widget.removeChild(inactius[i]);
//    }, 1000);
//
//}
//
//calendari(document.getElementById('calendari'), new Date());


calendar(document.getElementById('calendar'), new Date());