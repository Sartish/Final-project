# Project Auth

Pair-programming project with Nazanin Adampira🙋‍♀️

A sign in/up form that uses authenticate the users passwords. Once signedup/signed in the user get access to some well-being questions.

## The build 🛠
We built an API with authentication to implement a registration flow, and a frontend with forms to register, sign in, and view some content once users logged in. 

Our API includes:
- Registration endpoint, to create a new user.
- Sign-in endpoint, to authenticate a returning user.
- An authenticated endpoint which only returns content if the `Authorization` header with the user's token was correct.

Our frontend has
- A sign-up/sign-in form.
- A page (in Redux) to show the authenticated content from the API.
- A 'sign out' button that removes the saved access token and redirects the user to the login form.

### Tech👩‍💻

- MongoDB
- Node.js
- Express
- Redux
- React

#### View it live 👀
Frontend: https://infallible-engelbart-8dce94.netlify.app/
API live: https://nazanin-sara-app.herokuapp.com