const calendarDates = document.querySelector('.calendar-dates');
const monthYear = document.getElementById('month-year');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');

const datesWithJournalEntry = 
[
  "02012025", "04012025", "05012025", "07012025", "08012025", "09012025", "10012025", "11012025", "12012025", "13012025", "15012025", "16012025",
  "19012025", "20012025", "21012025", "22012025", "25012025", "26012025", "27012025", "28012025", "02022025", "03022025", "04022025", "05022025",
  "06022025",
]; // Change here

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function formatDate(day, month, year) {
  // Format day and month to 'DD' and 'MM' with leading zeros
  const formattedDay = day.toString().padStart(2, '0');
  const formattedMonth = month.toString().padStart(2, '0');
  
  // Combine into 'DDMMYYYY'
  const dateToString = formattedDay + formattedMonth + year.toString();
  return dateToString
}

function hasJournalEntry(day, month, year) { //could just have one input of the format string and call format string in renderCalendar
  dateToString = formatDate(day, month, year)
  if (datesWithJournalEntry.indexOf(dateToString) >= 0) {
    return true
  }
}

function renderCalendar(month, year) {
  calendarDates.innerHTML = '';
  monthYear.textContent = `${months[month]} ${year}`;

  // Get the first day of the month
  const firstDay = new Date(year, month, 1).getDay();

  // Get the number of days in the month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Create blanks for days of the week before the first day
  for (let i = 0; i < firstDay; i++) {
    const blank = document.createElement('div');
    calendarDates.appendChild(blank);
  }

  // Populate the days
  for (let i = 1; i <= daysInMonth; i++) {
    const formattedDate = formatDate(i, month + 1, year)
    var day
    // Highlight date
    if (
      hasJournalEntry(i, month + 1, year)
    ) {
      day = document.createElement('a');
      day.href = "../journals/" + formattedDate + ".html";
      const nestedDiv = day.appendChild(document.createElement('div'));
      const nestedParagraph = nestedDiv.appendChild(document.createElement('p'));
      nestedParagraph.innerHTML += i.toString();
      nestedParagraph.classList.add('useful-date');
    } else {
      day = document.createElement('div');
      day.textContent = i;
    }

    calendarDates.appendChild(day);
  }
}

renderCalendar(currentMonth, currentYear);

prevMonthBtn.addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar(currentMonth, currentYear);
});

nextMonthBtn.addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar(currentMonth, currentYear);
});