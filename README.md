# Angular Firebase Skeleton

## Getting Started

1. Grab this repo:

    $ git clone git@github.com:Mx3-Studio/fireside-ng.git
    $ cd fireside-ng

2. Install dependencies

    $ npm install -g @angular/cli firebase-tools
    $ npm install

4. Run Application

    $ npm start

6. Browse to http://localhost:4200/

## Development

* NPM Task Summary
    * npm install -- installs all dependencies
    * npm start -- runs the app
    * npm build -- builds the project
    * npm lint -- runs linter on the code
    * npm test -- runs unit tests
    * npm e2e -- runs end-to-end testing
* Firebase Task Summary - https://firebase.google.com/docs/cli/
    * firebase login -- logs in to the console
    * firebase list -- returns a list of projects
    * firebase use [alias] -- selects a project to use
    * firebase deploy -- deploys to firebase (MUST run `npm build` first)
* Angular Task Summary - https://github.com/angular/angular-cli/wiki/generate
    * ng generate service [name]
    * ng generate component [name]
    * ng generate guard [name]
    * ng generate interface [name]
    * ng generate module [name]
