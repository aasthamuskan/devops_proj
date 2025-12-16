// Local Storage Init
if (!localStorage.getItem("journalEntries")) {
    localStorage.setItem("journalEntries", JSON.stringify([]));
}

const journalForm = document.getElementById("journalForm");
const journalEntriesDiv = document.getElementById("journalEntries");

// Save Entry
journalForm.addEventListener("submit", e => {
    e.preventDefault();

    const entry = {
        id: Date.now(),
        title: entryTitle.value,
        date: entryDate.value,
        location: entryLocation.value,
        content: entryContent.value,
        rating: entryRating.value
    };

    const entries = JSON.parse(localStorage.getItem("journalEntries"));
    entries.unshift(entry);
    localStorage.setItem("journalEntries", JSON.stringify(entries));

    journalForm.reset();
    renderEntries();
});

// Render Entries
function renderEntries() {
    journalEntriesDiv.innerHTML = "<h3>Your Travel Memories</h3>";
    const entries = JSON.parse(localStorage.getItem("journalEntries"));

    entries.forEach(e => {
        const div = document.createElement("div");
        div.className = "entry";
        div.innerHTML = `
            <h4>${e.title}</h4>
            <p>${e.date} | ${e.location}</p>
            <p>${e.content}</p>
        `;
        journalEntriesDiv.appendChild(div);
    });
}

renderEntries();

/* ================= MAP ================= */
let map;

window.initMap = function () {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 20.5937, lng: 78.9629 },
        zoom: 5
    });
};
