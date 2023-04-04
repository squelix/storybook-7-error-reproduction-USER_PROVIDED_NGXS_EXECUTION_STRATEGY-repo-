# loyalty-v3

[![pipeline status](https://gitlab.com/wizbii/front/loyalty/loyalty-v3/badges/main/pipeline.svg?style=flat-square)](https://gitlab.com/wizbii/front/loyalty/loyalty-v3/commits/main)
[![coverage report](https://gitlab.com/wizbii/front/loyalty/loyalty-v3/badges/main/coverage.svg?style=flat-square)](https://gitlab.com/wizbii/front/loyalty/loyalty-v3/commits/main)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.1.

## Useful links

- [Storybook](https://wizbii.gitlab.io/front/loyalty/loyalty-v3/storybook/)

## Development server

### Run project

Run `yarn start` for a dev server with the staging environment

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files

You can change default port 4200 by running `yarn start --port=XXXX`

### Run project with dev environment

Run `yarn start:dev` to start the project with the dev environment. The environment variable are in `src/environments/.env.*.dev`

### Run project with a specific partner configuration

Run `yarn start --defaultPartner=XXX` to set DEFAULT_PARTNER=XXX and start the project using this specific partner config

> Example : `yarn start --defaultPartner=sogev4` will set `DEFAULT_PARTNER` to `sogev4`

Some Availables Partners : `whitelabel` ; `sogev4` ; `canv3`

### Run storybook

Run `yarn start:storybook` to start Storybook local server

## Code scaffolding

Run `yarn ng generate component component-name` to generate a new component

You can also use `yarn ng generate directive|pipe|service|class|guard|interface|enum|module`

## Changelog

The `CHANGELOG.md` file is automatically updated based on commits names.

Check out rules about commit naming in the [conventional-commit.md file](https://gitlab.com/wizbii/front/loyalty/loyalty-v3/-/blob/main/conventional-commit.md) inside the project

To find out more about commit convention, go check out [Conventional Commits Website](https://www.conventionalcommits.org/en/v1.0.0/)

## Build

Run `yarn build` to build the project.

The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build

## Running unit tests

Run `yarn test` to execute the unit tests via [Jest](https://jestjs.io/)

## Publish

Run `yarn release`

Select your version `patch|minor|major` and answer `y` to all questions prompted `Commit?|Tag?|Push?`

Deploy manualy in production by clicking the job on tag pipeline

To find out more about options and configurations, go check out the [Release It README](https://github.com/release-it/release-it/blob/master/README.md)

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md)
