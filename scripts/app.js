
const activityForm = document.getElementById("activity-form");
console.log(activityForm);

const activityList = document.getElementById("activity-list");
const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");

let activities = [];

try {
    activities = JSON.parse(localStorage.getItem("activities")) || [];
}catch (error) {
    activities = [];
}
activityForm.addEventListener("submit", function(event) {
    
    event.preventDefault();
    
const titleInput = document.getElementById("title");
const durationInput = document.getElementById("duration");
const titleError = document.getElementById("title-error");
const durationError = document.getElementById("duration-error");

titleError.textContent = "";
durationError.textContent = "";

titleInput.classList.remove("input-error", "input-success");
durationInput.classList.remove("input-error", "input-success");

if (!isValidTitle(titleInput.value)) {
    titleError.textContent = "Enter at least 3 characters and include a letter.";
    titleInput.classList.add("input-error");
    return;
}

titleInput.classList.add("input-success");

if (Number(durationInput.value) <= 0) {
    durationError.textContent = "Duration must be greater than zero.";
    durationInput.classList.add("input-error");
    return;
}

durationInput.classList.add("input-success");

    console.log(titleInput.value);
    console.log(durationInput.value);
    const dueDateInput = document.getElementById("dueDate");
    const tagInput = document.getElementById("tag");

    const activity = {
        id: Date.now(),
        title: titleInput.value,
        dueDate: dueDateInput.value,
        duration: Number(durationInput.value),
        tag: tagInput.value,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    console.log("Activity created:", activity);

    activities.push(activity);
    localStorage.setItem("activities", JSON.stringify(activities));

    searchActivities();
    updateDashboard();

    activityForm.reset();
    console.log("Form submitted!");
    console.log(tagInput.value);
});

function displayActivity(activity) {

const activityItem = document.createElement("p");

activityItem.textContent =
activity.title + " - " +
activity.dueDate + " - " +
activity.duration + " minutes - " +
activity.tag;

const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";
const editButton = document.createElement("button");
editButton.textContent = "Edit";
editButton.addEventListener("click", function() {
    const newTitle = prompt("Edit activity title:", activity.title);

    if (newTitle === null || newTitle.trim() === "") {
        return;
}
activity.title = newTitle.trim();
activity.updatedAt = new Date().toISOString();

localStorage.setItem("activities", JSON.stringify(activities));

searchActivities();
updateDashboard();
}); 

deleteButton.addEventListener("click", function() {
    
    activities = activities.filter(function(item) {
        return item.id !== activity.id;
    });

    localStorage.setItem("activities", JSON.stringify(activities));
    searchActivities();
    updateDashboard();
});

activityItem.appendChild(editButton);
activityItem.appendChild(deleteButton);
activityList.appendChild(activityItem);
}

function searchActivities() {
    const searchText = searchInput.value.toLowerCase();
    const sortBy = sortSelect.value;

    activityList.innerHTML = "";

    let filteredActivities = activities.filter(function(activity) {
        return activity.title.toLowerCase().includes(searchText) ||
        activity.tag.toLowerCase().includes(searchText);
    });

    filteredActivities.sort(function(a, b) {
        if (sortBy === "title") {
            return a.title.localeCompare(b.title);
        }
        if (sortBy === "dueDate") {
            return a.dueDate.localeCompare(b.dueDate);
        }
        if (sortBy === "duration") {
            return a.duration - b.duration;
        }
        return 0;
    });

    filteredActivities.forEach(displayActivity);
}

searchInput.addEventListener("input", searchActivities);
sortSelect.addEventListener("change", searchActivities);


    function updateDashboard() {
        document.getElementById("total-activities").textContent = activities.length;

        let totalDuration = 0;
        let tagCounts = {};

        activities.forEach(function(activity) {
            totalDuration += activity.duration;

            if (tagCounts[activity.tag]) {
                tagCounts[activity.tag]++;
            } else {
                tagCounts[activity.tag] = 1;
            }
        });


        document.getElementById("total-duration").textContent = totalDuration;
const totalHours = (totalDuration / 60).toFixed(1);

document.getElementById("total-hours").textContent = 
totalHours + " hours ";

        let topTag = "None yet";

        for (let tag in tagCounts) {
            if (topTag === "None yet" || tagCounts[tag] > tagCounts[topTag]) {
                topTag = tag;
            }
        }
     document.getElementById("top-tag").textContent = topTag;

    }

    const exportButton = document.getElementById("export-button");

    exportButton.addEventListener("click", function() {
        const data = JSON.stringify(activities, null, 2);

        const file = new Blob([data], {
            type: "application/json"
        });

        const link = document.createElement("a");
        link.href = URL.createObjectURL(file);
        link.download = "campus-activities.json";
        link.click();

        URL.revokeObjectURL(link.href);
    });

    updateDashboard();
    searchActivities();

    const importInput = document.getElementById("import-file");

    importInput.addEventListener("change", function(event) {
        const file = event.target.files[0];

        if (!file) {
            return;
        }
        const reader = new FileReader();

        reader.onload = function() {
            try {
                const importedActivities = JSON.parse(reader.result);

                if(!Array.isArray(importedActivities)) {
                    alert("invalid JSON file.");
                    return;
                }

                activities = importedActivities;
                localStorage.setItem("activities", JSON.stringify(activities));

                updateDashboard();
                searchActivities();

                alert("Activties imported successfully!");
            } catch (error) {
                alert("Could not import this file.");
            }
        };

        reader.readAsText(file);
    });
