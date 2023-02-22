# Simple Dashboard Screen

This project is a simple dashboard screen that displays a list of people using a table component and allows the user to click on a person's name to view their details. It also includes pagination to allow for easy navigation of the list of people.

## Getting Started

To run this project, you will need to have the following installed on your computer:

- Node.js (v14 or higher)
- npm (v6 or higher)

This project uses the open source Star Wars API so no .env file is required.

## Installation

1. Clone the repository to your local machine:
```
git clone https://github.com/bohdan145/SWAPI-test
```
2. Navigate to the project directory:
```
cd SWAPI-test/
```
3. Install the project dependencies:
```
npm i
```

## Usage

1. Start the development server:

```
npm start
```
2. Open your browser and navigate to
```
http://localhost:3000/
```


## Production build

```
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Technologies Used

- React.js
- React Router
- react-query
- CoreUI 

## Acknowledgments
- This project was created as part of a technical test. 
- All the requested logic was implemented in the Dashboard component.
- Project started from the [Free React Admin Template](https://coreui.io/product/free-react-admin-template/).
- Unused components and screens where removed.
- Provided template was initialy implemented using only js, so no typescript was used.
- No requirements for storing data in Redux where provided, so data is saved on the componenet level using react-query.
  (*project size is small and data used only in one component*) ;
- App fetch data from [SWAPI](the Star Wars API)(https://swapi.dev/documentation#people)
- .ENV file was not used because of the open source API, wich can be used by anyone. In other case, for security reasons, API url should be included inside of .env file
- No requirements for unit tests where provided, so tests for components where not implemented
