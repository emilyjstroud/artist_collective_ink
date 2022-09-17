 ## Name of Project:
      - Artist Collective Ink.
 ## Project Overview: 
      - Artist Collective Ink. is designed for the modern day tattoo enthusiast. Artist Collective Ink. will allow a user to log-in via Google Authentication and give them permission to create profiles for various tattoo shops as well as profiles for the associated shop artists. Once a shop has been created, the user will be allowed to update or delete this shop, as well as view the shop's details. Upon creation of a shop, a user will be allowed to create an artist profile with similar functionality, and choose from a dropdown list of created shops. This app is still in its prototype phase, so later goals would be to allow users to add multiple pieces of artwork to an associated artist, as well as a few more navigation buttons for ease of user experience.
## Wireframe: 
    - https://dbdiagram.io/d/62fc26f0c2d9cf52fabcb4be
## Deployed Project: 
    - 
## Project Board: 
    - https://github.com/users/emilyjstroud/projects/6
## User Description: 
    - Our user is the modern day tattoo enthusiast who is seeking a way to conveniently store photos of various tattoo artwork that they like. It will provide a space for the user to easily compare the different artists they may be interested in for similar styles of tattoos, so that they are able to choose the artist best suited for them.
## List of Features:
		- Creating shops and artists profiles, with the capability to read, update and delete those profiles.
		- Searching specific artists and shops.
## Screenshots of Project: 
    - https://user-images.githubusercontent.com/102272030/190873162-8753b083-c145-4838-ba4f-029a15f55a42.png 
    - https://user-images.githubusercontent.com/102272030/190873201-9f79fb11-cf36-461d-ac46-87f5ec4b284a.png
    - https://user-images.githubusercontent.com/102272030/190873220-78c935e5-ecd2-4f40-aeaf-d48d6b10171a.png
    - https://user-images.githubusercontent.com/102272030/190873240-60143731-2ec9-4454-b6cd-b86a333ccd75.png
   
## List of Contributors/Githhubs: 
		- Emily Stroud: https://github.com/emilyjstroud
## Loom Video: 

# React/Next.js Template

[See Live Demo of this Template](https://drt-next-js-template.netlify.app/)

## Topics
- [Get Started](#get-started)
- [Starting the Project](#starting-the-project)
- [Using axios](#using-axios)
- [Deploying on Netlify](#deploying-on-netlify)
___
## Getting Started
### Use Template
#### 1. To get started, click the GREEN "Use this Template" button at the top of the repo
<img width="915" alt="Screen Shot 2022-07-06 at 12 54 01 PM" src="https://user-images.githubusercontent.com/29741570/177612998-4aac9237-5a1e-4f13-8ae0-468587521564.png">

#### 2. Make sure YOUR github account is selected in the dropdown and name your project
<img width="763" alt="Screen Shot 2022-07-06 at 12 54 48 PM" src="https://user-images.githubusercontent.com/29741570/177613126-dd38f678-7553-4f27-8a4a-75680f14d71e.png">

#### 3. Clone your new repo to your local machine
#### 4. Go to the **NEXT** section

## Starting the Project
1. Create a Firebase project and set up authentication. Use [these videos](https://vimeo.com/showcase/codetracker-firebase) as a refresher if needed.
1. Create a `.env` file at the root of the project
1. Copy/Paste the contents of the `.env.sample` file to your newly created `.env` file.
1. Copy over all of your Firebase values into the `.env` file.
1. Open the `package.json` file and change the `name` property to the name of your application, and `author` to  your name.
1. From your command line, be in the root directory and run `npm install` OR `npm i` for short.
1. Next, run `npm run prepare`. This command sets up husky to track eslint errors on commit that will make your deploy fail on Netlify.
1. To start your application, run `npm run dev`. THIS IS THE COMMAND YOU WILL USE TO RUN YOUR DEVELOPMENT SERVER FROM NOW ON.
1. Open [http://localhost:3000](http://localhost:3000) with your browser.

### If you see this, you are set to go!
<img width="450" alt="Screen Shot 2022-07-06 at 1 07 27 PM" src="https://user-images.githubusercontent.com/29741570/177615077-9b6a75bc-0260-4d29-bb88-bd95a3140687.png">


You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

**NOTES:** 
- If you see the following error, you did not follow all the setup steps correctly and failed to add your Firebase creds. Go back and do that NOW.

<img width="1043" alt="Screen Shot 2022-07-06 at 11 18 45 AM" src="https://user-images.githubusercontent.com/29741570/177612501-c2628f18-4bbd-4de9-aae6-27ffba1172d6.png">

### Using Axios
> For every file you will need to make an XHR request in, you will need to require Axios
```js
import axios from 'axios';

const examplePromise = () => {
  axios.get('http://localhost:3001/example')
    .then((data) => {
      console.warn(data);
    })
    .catch((error) => {
      console.error(error);
    });
});
```

### Deploying on Netlify
Netlify will automatically detect your project and prepopulate the settings, but should something go wrong and it does not, here are the commands:

- Build Command: `npm run build`
- Publish directory: `.next`

#### Additional Steps to Take on Netlify
- Add Environmental Variables
    - Any Enviromental variables you are using in your `.env` file should be added to Netlify. 
        - Go to Site settings > Build & deploy > Environment > Environment variables and the keys and values there.

- Update Firebase URL Settings
    - In Firebase under Authentication select sign in methods, scroll to Authorized domains. Add your Netlify URL.
        
## Learn More about Next.js
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
