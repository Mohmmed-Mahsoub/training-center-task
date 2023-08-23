# Training-center-task

The source code for the [https://training-center-task.vercel.app/](https://training-center-task.vercel.app/).

## Table of contents

1. [Features](#features)
2. [Dependencies](#dependencies)
3. [Prerequisites](#prerequisites)
4. [Install and Use](#install-and-use)
5. [Folder Structure](#folder-structure)

## Features

- Add new course to courses list (Course Name, Start Date, End Date, Cost,
  Capacity, Status (Started, Not Started, Canceled)).
- View a course details.
- Delete a course.
- Modify Course info (except course name).
- Add new students (Name, Email, Telephone, Address).
- View a student details.
- Delete a student.
- Assign a student to a course.
- View Student Courses.

## Dependencies

The project is built with:

- `React.js` mainly
- `React Bootstrap` for styling
- `React Hook Form` for handling forms
- `Google sheets` with `sheetdb` for backend
- `react-icons` for adding icons to app
- `react-toastify` for showing messages to user
- `react-uuid` for generating IDs
- `swr` React Hooks for Data Fetching, handle loading and caching data
- `axios` for send requests

## Prerequisites

To use this project you should have the following on your machine:

- `Node.js`
- `yarn`

## Install and Use

To install the project you have to:

1. Clone the repository:
   `git clone https://github.com/Mohmmed-Mahsoub/training-center-task.git`

2. Install packages:
   `yarn`

3. Run the project:
   `yarn start`

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder Structure

The main folder structure of the code is structured like the following:

```js
├───.env
├───.gitignore
├───package-lock.json
├───package.json
├───README.md
├───yarn.lock
│
├───public
│   ├───favicon.ico
│   ├───index.html
│   ├───logo192.png
│   ├───logo512.png
│   ├───manifest.json
│   └───robots.txt
│
├───src
│   ├───App.css
│   ├───App.js
│   ├───index.css
│   ├───index.js
│   │
│   ├───components
│   │   ├───courses
│   │   │   ├───addCourseForm
│   │   │   │   ├───addCourseForm.component.js
│   │   │   │   └───AddCourseForm.module.css
│   │   │   │
│   │   │   ├───addStudentToCourse
│   │   │   │   └───addStudentToCourse.component.js
│   │   │   │
│   │   │   ├───coursesCardItem
│   │   │   │   ├───coursesCardItem.component.js
│   │   │   │   └───CoursesCardItem.module.css
│   │   │   │
│   │   │   ├───editCourseForm
│   │   │   │   ├───editCourseForm.component.js
│   │   │   │   └───EditCourseForm.module.css
│   │   │   │
│   │   │   ├───searchResultContainer
│   │   │   │   └───searchResultContainer.component.js
│   │   │   │
│   │   │   ├───selectUser
│   │   │   │   └───selectUser.component.js
│   │   │   │
│   │   │   ├───serachInput
│   │   │   │   └───serachInput.component.js
│   │   │   │
│   │   │   ├───showCourse
│   │   │   │   ├───showCourse.component.js
│   │   │   │   └───ShowCourse.module.css
│   │   │   │
│   │   ├───general
│   │   │   ├───footer
│   │   │   │   ├───footer.component.js
│   │   │   │   └───footer.module.css
│   │   │   │
│   │   │   ├───layout
│   │   │   │   └───layout.component.js
│   │   │   │
│   │   │   ├───mainLoader
│   │   │   │   ├───mainLoader.component.js
│   │   │   │   └───MainLoader.module.css
│   │   │   │
│   │   │   ├───navbar
│   │   │   │   └───navbar.component.js
│   │   │   │
│   │   │   ├───noItemPlaceholder
│   │   │   │   └───noItemPlaceholder.component.js
│   │   │   │
│   │   ├───users
│   │   │   ├───addUserForm
│   │   │   │   ├───addUserForm.component.js
│   │   │   │   └───AddUserForm.module.css
│   │   │   │
│   │   │   ├───allStudentsList
│   │   │   │   └───allStudentsList.component.js
│   │   │   │
│   │   │   └───showUser
│   │   │           showUser.component.js
│   │   │           ShowUser.module.css
│   │   │
│   ├───helpers
│   │   │   └───showToast.js
│   │   │
│   │   ├───customHooks
│   │   │   └───usePrev.js
│   │   │
│   │   ├───utilites
│   │   │   ├───isEndDateAfterOrEqualStart.js
│   │   │   └───isStartDateAfterOrEqualToday.js
│   │   │
│   ├───pages
│   │   ├───addCourse.page.js
│   │   ├───addStudent.page.js
│   │   ├───editCourse.page.js
│   │   ├───notFound.page.js
│   │   ├───showAllCourses.page.js
│   │   ├───showAllStudents.page.js
│   │   ├───showCourse.page.js
│   │   └───showStudent.page.js
```
