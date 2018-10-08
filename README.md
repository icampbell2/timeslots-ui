# TimeSlots

This is a front-end application for a coding assessment, meeting these requirements:

1. Using your preferred Javascript framework, build a screen which shows a list of hour long slots from 9am to 5pm.
2. When one time slot is clicked, pop up a modal which asks for name and phone number.
3. When the name and phone number is submitted, the time slot selected should change to red, indicating the time slot is no longer available.
4. If the red time slot is clicked on again, the modal will pop up with the name and phone number for that appointment prepopulated. Users will be able to edit the name and phone number to change the user for the appointment.

---

## Table of Contents
- [Running the Application](#running-the-application)
- [Dependencies Used](#dependencies-used)
- [Available Commands](#available-commands)
- [How this Application was Created](#how-this-application-was-created)

---

## <a name="running-the-application"></a>Running the Application

```
npm install
npm start
```

---

## <a name="dependencies-used"></a>Dependencies Used

| ReactJS | TypeScript | SASS | Design | Validation |
| ------- | ---------- | ---- | ------ | ---------- |
| react | typescript | node-sass-chokidar | @material-ui/core | awesome-phonenumber |
| react-dom | @types/jest | npm-run-all | | | |
| react-router-dom | @types/node | | | |
| react-scripts-ts | @types/react | | | |
| | @types/react-dom | | | |
| | @types/react-router-dom | | | |

---

## <a name="available-commands"></a>Available Commands

### `npm start`

This command executes these commands in this order:

1. `npm run test`

2. `npm-run-all -p watch-css start-ts`
>*This command runs `watch-css` and `start-ts` in parallel.*

### `npm run test`

1. `npm run build-css`
>*This command builds .css files from .scss files.*

2. `react-scripts-ts test --env=jsdom --coverage`
>*This command executes unit tests, with command-line code coverage output.*

### `npm run build`

1. `npm run test`

2. `npm run build-ts`
>*This command builds the codebase.*

### `npm run eject`

1. `npm run test`

2. `react-scripts-ts eject`
>*This command ejects the codebase.*

---

## <a name="how-this-application-was-created"></a>How this Application was Created

This application was created following this [`react-scripts-ts` documentation](https://github.com/wmonk/create-react-app-typescript "https://github.com/wmonk/create-react-app-typescript"), using this command:

```
npx create-react-app my-app --scripts-version=react-scripts-ts
```

---

:smiley: :computer: *Thank you for your time!* :smiley: :computer:
