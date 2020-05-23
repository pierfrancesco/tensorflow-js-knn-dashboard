# TensorFlow JS KNN Dashboard

This small project aim to create a demo for KNN implementation in JS.
There's a dashboard where you can upload your csv and then you can choose your features and label.

## Install locally

This project is made with NextJS (React) and Redux plus Material-UI.

To start playing around clone the project and then run inside the folder:

`npm run i`

`npm run dev`

---

## Code Style guide

### Javascript 

#### ES6 First

- async/await
- const & let
- arrow function
- map, filter, reduce, forEach
- ; at the end

#### CSS

- css inside every component/element named ComponentName.module.css
- when imported `import ComponentNameCss from './ComponentName.module.css'`
- class names inside the module could be whatever cause with next they will be renamed uniquely at build time

#### Component Rules

- All elements and components should be in the functional way (no class) if possible
- An element is a react component that doesn't contain another component
- Inside every element/component we're going to have this header sections:
```javascript
// GENERIC IMPORTS
import React from 'react';
const tf = require('@tensorflow/tfjs');

// CONTROLLERS
import { knn, error } from '../../controllers/TensorFlowManager';

// COMPONENTS & ELEMENTS
import ResetButton from '../../elements/ResetButton'

// STYLES
import MenuCss from './Menu.module.css'

// ACTIONS
import { removeTensors } from '../../redux/actions/tensorsActions'
...

// CONSTANTS & VAR
const k = 30;
```

- Containers (?) needs to be evaluated
