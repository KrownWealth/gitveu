# GitVeu
A web app that generate the GitHub repos of users you input to a form.
## Overview
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This is basically a standalone list with dynamic user rendering. In the list users can be added, deleted, repos can be display.

**Functionality:**

**1. Adding Users:**

* User enters a GitHub username in the input field.
* Clicking the "Add" button adds the user to the list of cards below.
* The user's profile picture, username, id, view-profile and and a delete button appear in the list.
  
**2. Deleting Users:**

* Each user entry in the list has a "Delete User" button.
* Clicking the "Delete User" button removes the user from the list.

**3.Displaying Repos:**

* Clicking on view profile in the list displays their repos in the user details display section.
* A "Laod More" button in the repo display section updates the displayed repos.

## Tech Stack used:
* React.js 18.2.0 
* Next.js version 13 
* CSS

## Dependencies
** Next Js Version 13


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
