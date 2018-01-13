## Your goal

Make a React component that displays a JSON dataset in a table.

## Acceptance criteria

* A header row that shows the names of the columns
* A row for each data point
* It should look nice

(...and pick **2 of the following 3**)

* A footer row sums the numeric columns
* If I click on a column header, the rows are sorted
* I can type in a box to filter items

## Technical acceptance criteria

* Use the latest version of React, Webpack, Babel etc. via `create-react-app`. *(We'll provide a Git repo to get you started)*
* You can choose to solve this using only what is available to you in `create-react-app`, or you can install as many additional npm packages as you like.

## Example usage

```js
import React from 'react'
import ReactDOM from 'react-dom'
import MyFancyDataTable from './datatable.jsx'

const salesData = [
  { name: 'Burger', menuCategory: 'Sandwich', menuPage: 'Dinner', quantitySold: 42, salesRevenue: 420 },
  { name: 'Glenmorangie', menuCategory: 'Scotch', menuPage: 'Alcohol', quantitySold: 2, salesRevenue: 33 },
  { name: 'Fries', menuCategory: 'Appetizers', menuPage: 'Dinner', quantitySold: 2, salesRevenue: 33 },
  // ... continues like this for 100s of rows.
]

ReactDOM.render(
  <div>
    <h1>Sales</h1>
    <MyFancyDataTable data={salesData} />
  </div>,
  document.getElementById('app')
)
```

## Example implementation

https://jbinto.github.io/challenge/

(covers everything, except making it "look nice")

## Assessment

This is the kind of thing we'll be looking for:

* Hitting the acceptance criteria (both to the letter and spirit - some points are intentionally vague)
* Identifying tradeoffs and being able to explain why you went one way over another
* Good understanding of Javascript/ES6 syntax
* How you break the problem down into React components, appropriate use of props and state
* What you can accomplish with CSS

Feel free to ask us any questions about requirements or implementation. You can use any resources you like, including any npm packages, so long as you can explain everything you've done.

For simplicity, you can assume that the data will always be in the exact format above.

## Hints

* https://facebook.github.io/react/docs/thinking-in-react.html
* https://lodash.com/ or http://underscorejs.org/

## Submitting

Submit a pull request to this repo.
