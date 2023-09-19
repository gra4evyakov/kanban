# Rick and Morty

[Open the Application](https://gra4evyakov.github.io/kanban/)

This is a Vue.js application project for viewing characters from the popular animated series "Rick and Morty." The application allows users to browse and search for characters from the show, as well as add them to their favorites list.

## Tools

Vue.js, Pinia, Vue Router, ESLint and Prettier

## Project Structure

The project is organized as follows:

### `components/`

- **`icons/`**: Contains icons used in the application.
- **`ui/`**: User interface components.

    - **`TheKanban.vue`**: The main Kanban component that contains sections and tasks.
    - **`TheHeader.vue`**: Application header with a button to create a new task.
    - **`TheSection.vue`**: Component for displaying a section in Kanban.
    - **`TheSectionList.vue`**: List of tasks in a section.
    - **`TheSectionListItem.vue`**: List item for tasks.

### `store/`

- **`kanban.js`**: Data store for managing tasks and Kanban sections.

## Installation and Running

1. Clone the project repository.
2. Install dependencies using `npm install`.
3. Start the application with `npm run dev`.
4. Open a web browser and navigate to the provided URL to access the application.

## Features

- Kanban Board: The project implements a Kanban board-style task management system, allowing users to organize tasks into different sections.
- Task Creation: Users can create new tasks by clicking the "New Task" button in the header.
- Task Sorting: The application provides sorting options for tasks, including sorting by priority, name, date, and time.
- Drag-and-Drop: Tasks can be moved between sections by dragging and dropping them. This feature is facilitated by the vuedraggable library.
- Data Persistence: Task data is stored in the browser's local storage, allowing tasks to be retained between sessions.

## Usage

1. Visit the homepage to view the list of tasks.
2. Click the "New Task" button in the header, to create a new task.
3. Use task sorting options to arrange them based on different criteria such as priority, name, date, and time.
4. Tasks can be moved between sections by dragging and dropping them using the mouse.
5. If you wish to delete a task, click the respective button.

## Authors

This project was created by [Grachev Yakov](https://github.com/gra4evyakov).
