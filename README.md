# Campus Life Planner

**Live website:** https://jngoh-maker.github.io/Campus-Life-Planner/

## Chosen Theme

Campus Life Planner is a student productivity web application with a soft pink theme. It helps students organize activities, manage deadlines, track study time, and stay on top of academic responsibilities.

## Features

- Add activities with a title, due date, duration, and tag.
- Edit and delete existing activities.
- Search activities by title or tag using regular expressions.
- Toggle case-insensitive search.
- Sort activities by title, due date, or duration.
- View dashboard statistics, including total activities, total study duration, and the most frequent tag.
- Set a daily study-time target.
- Convert minutes to hours and hours to minutes.
- Save activities and study targets using local storage.
- Import and export activities as JSON files.
- Validate activity titles and durations.
- Responsive layout for desktop and mobile screens.

## Regex Catalog

### 1. Activity title validation

**Pattern:**

`/^(?=.*[A-Za-z])[A-Za-z0-9\s-]{3,}$/`

This pattern requires at least three characters and at least one English letter. It allows letters, numbers, whitespace, and hyphens.

| Example | Result |
|---|---|
| `Study session` | Valid |
| `BIO-101` | Valid |
| `123` | Invalid |
| `AB` | Invalid |
| `Study!` | Invalid |

### 2. Activity search

The search field accepts JavaScript regular expressions and matches activity titles or tags.

| Pattern | Example use |
|---|---|
| `Study` | Find activities containing “Study” |
| `^Study` | Find titles beginning with “Study” |
| `\d+` | Find text containing one or more digits |
| `^.{3,}$` | Match text containing at least three characters |
| `[` | Invalid regex syntax; the application rejects the search pattern |

The case-insensitive option allows searches to ignore letter case.

## Keyboard Map

The application uses standard browser keyboard navigation.

| Key | Function |
|---|---|
| `Tab` | Move to the next interactive element |
| `Shift + Tab` | Move to the previous interactive element |
| `Enter` | Activate focused links and buttons or submit a form when appropriate |
| `Space` | Activate focused buttons and checkboxes when appropriate |
| Arrow keys | Navigate native controls that support arrow-key interaction |

There are no custom keyboard shortcuts.

## Accessibility Notes

- Semantic HTML elements are used for the page structure.
- Form inputs have associated labels.
- A skip-to-main-content link helps keyboard users bypass repeated navigation.
- Visible focus styles help users identify the currently focused element.
- Live regions announce changes to study targets and time-conversion results.
- The responsive layout supports different screen sizes.
- Standard browser keyboard navigation is supported.

## How to Run the Application

1. Clone or download the repository.
2. Open the project folder.
3. Open `index.html` in a browser, or use a local development server.
4. Use the dashboard, activity form, search, sorting, and settings features.

**Repository:** https://github.com/jngoh-maker/Campus-Life-Planner

## How to Run Tests

1. Open `tests.html` in a browser.
2. Check the displayed test results.
3. The current tests check valid titles, short titles, and empty titles.

## Seed Data

The project includes `seed.json` with sample activity records. The records can be used for testing and demonstrating different activity scenarios.

## Demo Video

Demo video link: **[Add your unlisted video link here after uploading it.]**

The demonstration should cover keyboard navigation, regex edge cases, and JSON import/export.
