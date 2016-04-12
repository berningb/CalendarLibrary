function Calendar(width, height, backColor, color) {
    this.width = width;
    this.height = height;
    this.backColor = backColor;
    this.color = color;

    createCalendar(width, height, backColor, color);

}

function createCalendar(width = '500px', height = '500px', backColor = "blue", color = "white") {

    //creates the div to the size and color the user chooses
    var div = document.createElement("div");
    div.style.width = width;
    div.style.height = height;
    div.style.background = backColor;
    div.style.color = color;
    document.body.appendChild(div);
}



function createDays() {

}

function addEvent() {

}

function editEvent() {

}

function deleteEvent() {

}

function changeMonthForward() {

}

function changeMonthBackward() {

}

function changeYearForward() {

}

function changeYearBackward() {

}




Calendar();
Calendar("100px", "100px", "red", "white");