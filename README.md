# Overview

This project is built with React and JavaScript. There are three main widgets including 
weather, newsfeed and task manager, which are all fetching data from server. The project is now deployed
on AWS ec2, you can acess it via [https://ec2-3-27-86-30.ap-southeast-2.compute.amazonaws.com/](https://ec2-3-27-86-30.ap-southeast-2.compute.amazonaws.com/). 

## Project structure

```shell
.
├── Dockerfile           // Used to build docker image
├── Makefile             // Run make command
├── README.md
├── build.sh            // Build script
├── compose.yaml        // Docker compose configuration
├── nginx         
│   ├── nginx.conf      // Nginx config file
│   └── ssl             // Https SSL screts
│       ├── cert.pem
│       └── key.pem
└── src
    ├── App.css
    ├── App.js
    ├── __tests__       // Store react test files
    │   └── weather.test.jsx
    ├── dashboard       // Store dashboard related .js|.jsx files
    │   ├── common      // Store common react components
    │   ├── contexts    // Store react contexts
    │   ├── hooks       // Store react custom hooks
    │   ├── newsfeed    // Store newsfeed related .js|.jsx files
    │   ├── tasks       // Store tasks related .js|.jsx files
    │   └── weather     // Store weather related .js|.jsx files
    ├── index.js

```

# Related tools
- **[MUI](https://www.mui.com/)**
- **[Nginx](https://www.nginx.com/)**
- **[GitHub Workflow](https://docs.github.com/en/actions/using-workflows)**
- **[Docker](https://www.docker.com/)**


# Instructions
For developers, clone this repository, and run `npm install` under the repo root path to install necessary dependencies.
Then run `npm start` to kick off this react project.    
For local setup, run `make build` to build a docker image. Please note, the default docker arch is arm64. 
If your computer system is linux, you can run `make build docker amd64` to build a docker image based on amd64 architecture. Then run `make run` to bootstrap docker compose, the access address is [https://127.0.0.1](https://127.0.0.1).

# Features
## Weather
The weather is firstly ask the browser permission to get the location information, then it will visit [OpenWeatherMap](https://openweathermap.org/api) to fetch weather information based on the location. I mainly use [styled](https://styled-components.com/) to write CSS and leaverage [Flex](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) to make layout. The code is in [weather](src/dashboard/weather/).

## Newsfeed
I use MUI [tabs](https://mui.com/material-ui/react-tabs/) and [grid](https://mui.com/material-ui/react-grid/) to complete this part. The news is all from [NewsAPI](https://github.com/SauravKanchan/NewsAPI). Users could browse news based on difference categories.
The code is in [newsfeed](src/dashboard/newsfeed/).

## Task manager
Compared with the others two widgets, task manager involves create, update, and delete operations other than reading. All these tasks are based on [Todoist](https://app.todoist.com/). I use [MUI X Data Grid](https://mui.com/x/react-data-grid/) to realize this feature. 
The code is in [tasks](src/dashboard/tasks/).

## Other features
- Environment Configration: Use [env-cmd](https://www.npmjs.com/package/env-cmd) to enable environment variable configuration in different .env files.
- Automatic Build: Use [GitHub Workflow](https://docs.github.com/en/actions/using-workflows) to build the docker image automatically when
new push on the master branch.
- Mobile friendly: With MUI Grid as the main container, newsfeed and weather widges present in different rows on the mobile browser, making these two widgets have enough space to display on the page.

# Wrap up
For convenience, deploy scripts and configuration is also included in the same repository. In production environment, deploy related code will be in another repository for security consideration.