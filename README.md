# wordpress-sass
This repository is intended to go with the underscore wordpress theme. Underscore is a started template for developing wordpress themes.
When generating an underscore theme, make sure to click `Advanced Options` and have `_sassify!` checked. For custom themes a `sass` folder should be created in the theme's root directory.

# Installation

Initiate NPM in your WordPress root directory:
`$ npm init`

Install Dependencies:
`$ npm install gulp gulp-sass --save`

Add sass script inside `package.json`:

    "scripts": {
      "sass": "gulp sass:watch"
  	},

Copy [Gulpfile.js](Gulpfile.js) into your WordPress root directory.

Run It!!!
`$ npm run sass`
