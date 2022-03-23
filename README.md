# Prairie TakeHome


## Tech Used:
- Create React App to initialize project
- Material UI as my CSS library
- Nivo as my charting library


## Architectural Overview:
- App component:
  - renders Header component
  - holds top most state, including formatted list of user scores and current chosen user
  - renders form to select new user
  - renders Chart passing in the relevant data
- Header component:
  - Header component that displays title and subtitle
- Chart component:
  - using Nivo ResponsiveLine chart to showcase users GAD-7 and PHQ-9 scores
- data.json:
  - json file containing the relevant user scores


## Reflections/Justifications:
- Decided based on the application a more robust state management solution wasn't necessary as props were not passed down more than one level
- Decided to use Material UI and Nivo as that is what you use at Prairie Health

## Things I'd work on next wtih more time:
- Improve responsiveness
- Read more documentation on Nivo to make the chart more intuitive
- Implement testing
- Improve view on mobile devices

## How to run:
- clone repository
- run npm i
- run npm start
