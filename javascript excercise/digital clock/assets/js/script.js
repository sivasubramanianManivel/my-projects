function updateClock() {
  var now = new Date();
  var dname = now.getDay();
  var mo = now.getMonth();
  var dnum = now.getDate();
  var yr = now.getFullYear();
  var hou = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();
  var pe = "AM";

  if (hou == 0) {
    hou = 12;
  }
  if (hou > 12) {
    hou = hou - 12;
    pe = "PM";
  }

  Number.prototype.pad = function(digits) {
    var n = this.toString();
    while (n.length < digits) {
      n = '0' + n;
    }
    return n;
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const week = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ];

  const ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
  var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];
  for (var i = 0; i < ids.length; i++) {
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
  }
  requestAnimationFrame(updateClock);
}

function initClock() {
  updateClock();
}

