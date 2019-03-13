# NC News

NC News is a front-end React App serving user-generated news articles on a selection of topics.

### Deployed project

[https://n-c-news.netlify.com/](https://n-c-news.netlify.com/)

### Back-end repo

[https://github.com/peter-job/nc-news-be](https://github.com/peter-job/nc-news-be)

## Getting Started

To run this app on your local machine, follow these steps:

1. Fork this repo
2. Clone the repo by running the terminal command `git clone https://github.com/<your-username>/nc-news-fe`
3. Run the command `npm install` to install all dependencies
4. You can now start the app with the command `npm start`, which should open the app in your browser. If it doesn't open automatically, navigate to 'localhost:3000'

## Deployment

This app has been deployed on Netlify. To deploy your own version, follow these instructions.

1. To allow netflify to handle redirects, create a _redirects file in the public folder of your repo with a single line: `/* /index.html 200`
2. Sign up to [Netlify](https://app.netlify.com/signup)
3. Select the option to link with your GitHub account.
4. Select the option to continually deploy wuth GitHub.
5. In the 'Repository access' configuration box, select this repository.
6. On the build options tab, verify the default settings, then click 'Deploy Site'

## Built With
* [React] - JS library for building user interfaces
* [Axios](https://www.axios.com) - Promise-based http client
* [Reach/Router](https://reach.tech/router) - Accessible React routing
* [Jest](https://jestjs.io/) - JS testing framework
* [Foundation Icon Fonts](https://zurb.com/playground/foundation-icon-fonts-3) - Icon pack for HTML/CSS

## Authors
Peter Job - [github.com/peter-job](https://github.com/peter-job)

## Acknowledgments
A big thank you to Northcoders!
