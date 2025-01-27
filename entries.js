const prevEntryBtn = document.getElementById('prev-entry');
const nextEntryBtn = document.getElementById('next-entry');

const datesWithJournalEntry = 
[
    "02012025", "04012025", "05012025", "07012025", "08012025", "09012025", "10012025", "11012025", "12012025", "13012025", "15012025", "16012025",
    "19012025", "20012025", "21012025", "22012025", "25012025", "26012025", "27012025",
]; //Change here

prevEntryBtn.addEventListener('click', () => {
    const dateOfEntry = prevEntryBtn.name;
    if (datesWithJournalEntry.indexOf(dateOfEntry) >= 0 && datesWithJournalEntry[datesWithJournalEntry.indexOf(dateOfEntry) - 1] != undefined) {
        const prevEntryDate = datesWithJournalEntry[datesWithJournalEntry.indexOf(dateOfEntry) - 1];
        window.location.href = "./" + prevEntryDate + ".html";
    }
});

nextEntryBtn.addEventListener('click', () => {
    const dateOfEntry = prevEntryBtn.name;
    if (datesWithJournalEntry.indexOf(dateOfEntry) >= 0 && datesWithJournalEntry[datesWithJournalEntry.indexOf(dateOfEntry) + 1] != undefined) {
        const prevEntryDate = datesWithJournalEntry[datesWithJournalEntry.indexOf(dateOfEntry) + 1];
        window.location.href = "./" + prevEntryDate + ".html";
    }
});