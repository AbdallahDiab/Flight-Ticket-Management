# Flight Ticket Management

> a simple TODO app that allows you to register and create flight tickets

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [Project Status](#project-status)
- [Room for Improvement](#room-for-improvement)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)
<!-- * [License](#license) -->

## Technologies Used

- react-hook-form - version 7.49.2
- yup - version 2.0
- json-server- version 0.17.4
- react-redux- version 9.0.4
- reduxjs/toolkit- version 2.0.1
- redux-persist- version 6.0.0
- sass- version 1.69.5
- dayjs- version 1.11.10
- antd- version 5.12.3
- axios- version 1.6.2

## Features

List the ready features here:

- Create a new account
- Login and list all available tickets
- Form to create a new ticket
- Ability to see tickets details and edit it
- Ability to delete tickets
- navigate in protected routes
- create db server

## Setup

React + Vite

## Structure

-src
---components => includes all views
---hooks => includes custom hooks for dispatch actions
---pages => includes all routes
---store => includes redux config and api requests using thunks
---utils => includes HTTP component used as axios interceptor
-db.json
