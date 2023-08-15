# Namaste React 🚀


# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles



# Namaste Food


/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisine, delery tie
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */



 Two types of Export/Import


- Default Export/Import

export default Component;
import Component from "path";


- Named Export/Import

export const Component;
import {Component} from "path";


# React Hooks
 (Normal JS utility functions)
- useState() - Superpowerful State Variables in react
- useEffect()


#  2 types Routing in web apps
 - Client Side Routing
 - Server Side Routing


 # Redux Toolkit
 - Install @reduxjs/toolkit and react-redux
 - Build our store
 - Connect our store to our app
 - Slice (cartSlice)
 - dispatch(action)
 - Selector


# Types of Testing (developer)
- Unit Testing  ----> test your react component in isolation
- Integration Testing  ---> multiple components are combined and testing each other i.e click event, input 
- End to End Testing (e2e Testing)  --->> testing a react app as soon as the user lands on the website and leaves the website and testing all the flows


# Setting Up Testing in our app  (npm run test)
- Install React Testing Library =-->> npm i -D @testing-library/react
- Install jest --->>  npm i -D jest
- Install Babel dependencies --->> npm install --save-dev babel-jest @babel/core @babel/preset-env
- Configure Babel  ---->>> https://jestjs.io/docs/getting-started  ---> babel.config.js
- Configure Parcel Config file to disable default Babel transpilation --->> https://parceljs.org/languages/javascript/#babel  ------->  .parcelrc file
- Jest Configuration ---> npx jest --init
- Install jsdom library  --->> npm install --save-dev jest-environment-jsdom
- Install @babel/preset-react  ---> to make JSX work in test cases
- Include @babel/preset-react inside babel.config.js file
- Install  npm i -D @testing-library/jest-dom 