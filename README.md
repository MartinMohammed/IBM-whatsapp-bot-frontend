## Login Screen 

<img width="1440" alt="image" src="https://github.com/MartinMohammed/whataspp-dashboard-svelte/assets/81469658/9cc033d6-48c3-4efd-bd2d-b81fce6df6c3">

## Chat Screen

<img width="1440" alt="image" src="https://github.com/MartinMohammed/whataspp-dashboard-svelte/assets/81469658/377f62d9-581f-4230-b6c0-e3f20f5a4c23">

# Project Overview

This project represents the public part of my work at IBM, collaborating with the client Body Culture Group in Darmstadt. As the product owner, I was responsible for its successful release. The application contains non-company internal data, and the deployed version of the project remains private.

The frontend of this project, built with Svelte, establishes a websocket connection to the server and fetches data from the backend. Please note that this app is only a public demo and does not reflect the production version.

## More about the Project

Upon entering the app, users need to log in using their email and password. Behind the scenes, a JWT authorization server runs, which has an internal database with valid user information. After a successful login, the server returns a pair of tokens: a refresh token and an access token, following the JWT authorization mechanism. Subsequently, a fetch request is made to the backend to retrieve all recent WhatsApp messages. The app tracks every action the user takes on the dashboard through web sockets events and communicates with the backend to provide a real-time user experience. Messages sent via the dashboard are transmitted to the backend and then relayed to the users.

In essence, this application is a custom-made WhatsApp dashboard working with the WhatsApp Cloud API, facilitating Body Culture's customers in transitioning their customer service from mobile phones to WhatsApp.

The production version includes a permission system, allowing fault-tolerance and distinguishing between admin users and regular users. This means not everyone can read all messages or send messages. Additionally, the production version has an implementation for sending WhatsApp templates with interactive buttons and integration with Google's Dialogflow chatbot AI.

## Technical Considerations

The provided information also includes technical considerations for working with Svelte, TypeScript, and Vite. It highlights the rationale behind certain design choices and explains the use of different tools and configurations.

During the internship at IBM, the project focused on integrating a custom WhatsApp Chatbot using the Meta WhatsApp Cloud API. The work involved creating a fully functional WhatsApp Dashboard with Svelte and utilizing REST API and WebSockets for real-time message communication on the backend. Security was prioritized through the implementation of JWT authentication and AWS Cognito service for securing the API Gateway.

The success of the WhatsApp Chatbot was significant, as it gained widespread interest and saw substantial adoption, with over 4000 weekly downloads on NPM within the first two weeks of its release. The integration of Google's Dialogflow enabled the bot to use artificial intelligence to interact with users effectively, leading to improved conversion rates for new customer sign-ups. The transformation of customer service from traditional telephone communication to automated interactions via WhatsAppBot proved to be highly beneficial, with users finding it easy to share the WhatsApp business account with friends and handling all membership-related information with ease.

