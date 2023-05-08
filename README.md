**Link to the app:** https://toeaung-yeyint.github.io/raise-or-drop/dist/index.html
<br/>

# Project description

This app will suggest users when to raise or lower the price of the food (Mohinga - traditional food of Burmese people) during specific months of the year based on the following factors: peak selling period (20% increase only during the specific period), new financial year (5% increase starting from July every year), whether there is a financial crisis (10% increase for the whole year), as well as displaying the prices in a line chart.

## Project specifications

- The app will simulate when users need to raise or drop the price of the food for specific months of the year in a line chart.
- “Calculate” button shouldn’t work until a user puts a value in every required input field.
- If a user enters a negative number or the number that is less than 0 for the input fields “Year, Retail price per unit (AUD)”, an error message will be displayed.
- If a user picks "Peak selling period" for the end month that is earlier than the start month, an error message will be displayed.
- Users can start a new calculation by clicking on the "New calculation" button.
- If a user clicks on the "New calculation" button, the chart will be gone and a user will go back to form.

### Tools used & Credits:

- Vanilla JavaScript
- Bootstrap (https://getbootstrap.com/)
- Parcel (https://parceljs.org/)
- Chart js (https://www.chartjs.org/docs/latest/)
