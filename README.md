# Campus Life Planner

A responsive web application that helps students organize campus activities, manage deadlines, and track how they spend their time.

**Live Website:** https://jngoh-maker.github.io/Campus-Life-Planner/
**GitHub Repository:** https://github.com/jngoh-maker/Campus-Life-Planner

## 1. About the Project

Campus Life Planner was created to help students stay organized by keeping their activities, deadlines, and durations in one place. The application provides a simple interface for adding activities, reviewing records, and monitoring basic statistics.

The project is built with vanilla HTML, CSS, and JavaScript, without external frameworks.

## 2. Features

### Activity Management

* Add activities with a title, due date, duration, and tag.
* Edit existing activity titles.
* Delete activities.
* Save activities in browser local storage.

### Search and Sorting

* Search activities by title or tag.
* Sort activities by title, due date, or duration.
* Regular-expression search, invalid-pattern handling, and match highlighting — *verify implementation before submission.*

### Dashboard and Statistics

* View the total number of activities.
* Track the total duration in minutes and hours.
* Identify the most frequently used tag.
* Seven-day activity trend and target/cap tracking — *verify implementation before submission.*

### Data Management

* Export activities as a JSON file.
* Import activities from a JSON file.
* Validate imported data before loading — *verify implementation before submission.*

### Responsive Design and Accessibility

* Responsive layout for different screen sizes.
* Semantic HTML structure and form labels.
* Visible keyboard focus and a skip link.
* Accessible announcements for validation errors and dynamic updates — *verify implementation before submission.*

## 3. Technologies Used

* **HTML5:** Page structure and semantic elements.
* **CSS3:** Styling, responsive layouts, and transitions.
* **JavaScript:** Activity management, search, sorting, validation, and statistics.
* **Local Storage:** Saving activities in the browser.
* **JSON:** Importing and exporting activity data.

## 4. Project Structure

```text
Campus-Life-Planner/
├── index.html
├── README.md
├── seed.json
├── tests.html
├── scripts/
│   ├── app.js
│   ├── search.js
│   ├── state.js
│   ├── storage.js
│   ├── ui.js
│   └── validators.js
├── styles/
│   └── styles.css
└── codevibe-reports/
```

## 5. How to Run the Project

1. Clone or download the repository.
2. Open the project folder in Visual Studio Code.
3. Install the Live Server extension if it is not already installed.
4. Open `index.html`.
5. Select **Open with Live Server**.
6. The planner will open in your browser.

To run the current tests, open `tests.html` using Live Server.

## 6. Data Model

Each activity contains information such as:

* `id`: Unique identifier for the activity.
* `title`: Name or description of the activity.
* `dueDate`: Activity deadline.
* `duration`: Estimated duration in minutes.
* `tag`: Category associated with the activity.
* `createdAt`: Date and time the activity was created.
* `updatedAt`: Date and time the activity was last modified.

Activity data is stored in the browser's local storage to help preserve records between visits.

## 7. Regular Expression (Regex) Catalog

The project uses regular expressions to validate user input and support search functionality.

| Pattern or rule     | Purpose                                                    | Example         |
| ------------------- | ---------------------------------------------------------- | --------------- |
| Title validation    | Requires at least three characters and at least one letter | `Study session` |
| Duration validation | Requires a positive numeric duration                       | `60`            |
| Date validation     | Checks the expected `YYYY-MM-DD` date format               | `2026-10-14`    |
| Tag validation      | Allows appropriate category names                          | `Group-Project` |
| Search expression   | Matches text entered by the user                           | `study`         |

*Before submission, update this catalog to show the exact patterns used in the code and confirm that all four validation rules and the required advanced regex feature are implemented.*

## 8. Keyboard Navigation

Users can navigate the application using the keyboard:

* **Tab:** Move to the next interactive element.
* **Shift + Tab:** Move to the previous interactive element.
* **Enter:** Activate links and buttons when focused.
* **Space:** Toggle checkboxes when focused.
* **Arrow keys:** Navigate native select controls where supported.
* **Skip link:** Move directly to the main content.

Visible focus indicators help users identify the currently focused element.

## 9. Accessibility Considerations

The project aims to make the planner usable by people with different interaction needs through:

* Semantic HTML landmarks and headings.
* Labels associated with form controls.
* A skip link for keyboard navigation.
* Visible focus indicators.
* Clear validation feedback.
* Accessible announcements for important dynamic updates, where implemented.
* Responsive layouts for different screen sizes.

## 10. Testing

Open `tests.html` with Live Server to run the project's current JavaScript tests.

Testing should cover:

* Valid and invalid activity titles.
* Invalid durations, dates, and tags.
* Adding, editing, and deleting activities.
* Searching and sorting records.
* Invalid regular-expression patterns.
* Importing and exporting JSON files.
* Saving and restoring data through local storage.
* Keyboard navigation and responsive layouts.

The current test page contains basic title-validation tests. Additional tests should be added as more requirements are implemented.

## 11. Future Improvements

Potential improvements include expanding validation coverage, improving search feedback, adding richer activity statistics, and refining accessibility and mobile usability.

## 12. Author

**Juliana Ngoh**
Software Engineering Student
African Leadership University

GitHub: https://github.com/jngoh-maker

---

*This project was developed as part of a responsive user-interface assignment. The implementation and test coverage should be checked against the assignment requirements before final submission.*
