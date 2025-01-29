# NextAuth Session Validation Issue After Navigation

This repository demonstrates a bug where NextAuth session validation fails after navigating between pages using Next/Link. The `About` page should only be accessible to authenticated users, but it can be accessed even when not logged in.  This seems to be related to how the `unstable_getServerSession` function interacts with client-side routing.

## Setup

1.  Clone this repository.
2.  Install dependencies: `npm install`
3.  Create a `.env.local` file in the root of the project. Refer to the `.env.example` file for required environment variables.
4.  Run the development server: `npm run dev`

## Steps to Reproduce

1.  Navigate to the homepage.
2.  Click the link to go to the About page.
3.  Observe that the About page is accessible even without logging in.

## Solution

Refer to `aboutSolution.js` file for the implemented solution.