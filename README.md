# Final Project - Techtionary 🖤
Pair-programming: Sara Carlstein & Ann-Sofi Jönsson

An open-source tech-concept dictionary were users can look up concepts, see multiple individual explanations for concepts added by users. The users are able to add an account or sign in. Further also to add concepts and explanations. The application also include multiple search and filter functions. 

## The build 🛠
We started out sketching the main functions in Figma to sketch out the main functions of the application and used Trello to store notes and plan our project. Then we started up building the backend with express in Node.js, using mongoose to model our data around three major schemas: the user, concepts and descriptions. To store our collections data we use Mongo database. We then started to build the endpoints were the users will be able to POST concept and add/update descriptions. This process involved  a lot testing endpoints in postman, to validate that the endpoints will function in frontend. 

Then we continued to build the main skeleton in frontend, using React Route to redirect the user in the navigation bar. The frontend is built in React, and we made sure that our data fetched from the endpoint rendered in the frontend. For instance to GET all concepts stored when component renders. Then we went back to the Figma scotch to update it with a more coherent styling, by using some new inputs regarding UX and UI we received along the way. 

We used Redux mainly for the sign in functionality. So that we can retrieve user information in different points of the flow. For instance through the authentication middleware built in the backend. We could conditionally render the signing component under add concept. If there is no accesstoken, the user will be redirected to sign in page. 

We used an agile approach, going back and forth between frontend, backend and Figma. More features were added and modified along the way. For instance, filter function for likes and created at. We also had to make sure we add alerts, catch error messages from backend and redirects in the right places to increasing the user friendliness of the application.  

For styling we incorporated both material UI and styled components. The application is responsive in desktop, iPad and mobile screen sizes. 

### Tech & Tools used 👩‍💻
* Node.js
* MongoDB
* Mongoose
* Express
* Postman
* React.js
* React Router
* Redux
* React router
* Styled components
* Material UI
* Styled-Components
* RESTful API
* Sweetalert
* Figma
* Pair programming

#### View it live 👀
Frontend: https://techionary.netlify.app/
Backend: https://techtionary-project.herokuapp.com
