# Custom Webpack

This repository has the setup and the configuration by using which you can start migrating BackboneJS to React and also bundle it. 

## Installation

1. Clone the project
2. npm install


## Usage
1. npm run start (auto launches the browser, hot reloading)
2. npm run build (creates a dist folder with main.js as your bundle) (build)

## Brief


### webpack.config.js 
1. entry: change **entry: src/index.js** to **your entry path**
2. output: change **filename: main.js** to **bundle/app** or whatever filename you need as the bundled file, make sure to update the same filename in **src/index.html**.
3. alias: it acts as a dependency injection for custom libraries. In this example, I have introduced jquery as a custom library(not a npm module) and then using alias I have introduced it in the model. Check **src/index.js** line 1 
```
import $ from 'jquery';

```
4. To introduce **React** in **Backbone** the official document has been followed (Check for **'Embedding React in a Backbone View'**)
   [React](https://reactjs.org/docs/integrating-with-other-libraries.html)



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

**Branch Rules Active**
