# Fitness App Suite

Welcome to the Fitness App Suite, a collection of applications developed during my internship at IBM in collaboration with the Body Culture Group in Darmstadt. This suite includes the Gym Occupancy Tracker, a Svelte Frontend Dashboard, a Webhook API Server, an Authorization Server with JWT, and the successful WhatsApp Middleware npm package.

## Overview

During my internship at IBM, I took on the role of Product Owner for a project in collaboration with the Body Culture Group in Darmstadt. Body Culture is a prominent player in the fitness industry with over 300 employees in Hessen and multiple sub-brands, dominating the market in the Rhine-Main Area.

As part of my responsibilities, I led the design of a comprehensive AWS Cloud Infrastructure. This involved various tasks such as networking with VPCs and implementing essential services like API Gateway and DynamoDB. To achieve rapid and efficient cloud infrastructure deployment and updates, I utilized the Cloud Development Kit as an Infrastructure as Code technology.

The primary focus of the project was to integrate a custom WhatsApp Chatbot using the Meta WhatsApp Cloud API. To accomplish this, I developed a fully functional WhatsApp Dashboard using Svelte, a high-speed JavaScript Framework. For the backend, I employed REST API and WebSockets for real-time message communication. Security was a crucial aspect, and I ensured robust protection by implementing JWT authentication and leveraging AWS Cognito service to safeguard the API Gateway.

The success of the WhatsApp Chatbot was impressive, as it garnered widespread interest and achieved over 4000 weekly downloads on NPM within the first two weeks of its release. Additionally, I integrated the WhatsAppBot with Google's Dialogflow, allowing the bot to utilize artificial intelligence to respond to user messages in the fitness studios. This innovative approach effectively transformed customer service from traditional telephone communication to fully automated interactions via WhatsAppBot, resulting in increased conversion rates for new customer sign-ups. Users could easily share the WhatsApp business account with friends, while the bot handled all membership-related information, including scheduling a suitable slot within a week.

### Quick navigation 


- [Gym Occupancy Tracker Repository](https://github.com/MartinMohammed/IBM-whatsapp-occupancy-scraper)
- [Svelte Frontend Dashboard Repository](https://github.com/MartinMohammed/IBM-whatsapp-bot-frontend)
- [WhatsApp Backend Server Repository](https://github.com/MartinMohammed/IBM-whatsapp-bot-backend)
- [Authorization Server Repository](https://github.com/MartinMohammed/IBM-jwt-authorization)
- [WhatsApp Middleware NPM Package](https://github.com/MartinMohammed/IBM-whatsapp-bot-middleware-npm)

## Gym Occupancy Tracker

The Gym Occupancy Tracker is a Python program that web-scrapes the Fitness Fabrik gym website to extract data about the current number of people training in the gym. It uses Beautiful Soup to parse the HTML and extract relevant data. The program also integrates with a Telegram bot to notify users when the gym occupancy meets their desired criteria.

[Link to Gym Occupancy Tracker Repository](https://github.com/MartinMohammed/IBM-whatsapp-occupancy-scraper)

## Svelte Frontend Dashboard

The Svelte Frontend Dashboard is a web application that allows the CRS (customer service) team of the company to interact with their gym-members (and in the production version to supervise the responses of Google's Dialogflow AI). It enables a shift from conventional customer service on mobile phones to modern and quick-response automated WhatsApp customer service.

The frontend of this project, built with Svelte, establishes a websocket connection to the server and fetches data from the backend. Please note that this app is only a public demo and does not reflect the production version.

Upon entering the app, users need to log in using their email and password. Behind the scenes, a JWT authorization server runs, which has an internal database with valid user information. After a successful login, the server returns a pair of tokens: a refresh token and an access token, following the JWT authorization mechanism. Subsequently, a fetch request is made to the backend to retrieve all recent WhatsApp messages. The app tracks every action the user takes on the dashboard through web sockets events and communicates with the backend to provide a real-time user experience. Messages sent via the dashboard are transmitted to the backend and then relayed to the users.

In essence, this application is a custom-made WhatsApp dashboard working with the WhatsApp Cloud API, facilitating Body Culture's customers in transitioning their customer service from mobile phones to WhatsApp.

The production version includes a permission system, allowing fault-tolerance and distinguishing between admin users and regular users. This means not everyone can read all messages or send messages. Additionally, the production version has an implementation for sending WhatsApp templates with interactive buttons and integration with Google's Dialogflow chatbot AI.

![Login Screen](https://github.com/MartinMohammed/whataspp-dashboard-svelte/assets/81469658/9cc033d6-48c3-4efd-bd2d-b81fce6df6c3.png)

![Chat Screen](https://github.com/MartinMohammed/whataspp-dashboard-svelte/assets/81469658/377f62d9-581f-4230-b6c0-e3f20f5a4c23.png)

## WhatsApp Backend Server

The WhatsApp Backend server is responsible for delivering new incoming messages to the WhatsApp dashboard and thus to the customer service in real time using web sockets and sending messages to gym members via the WhatsApp Cloud API. It provides a protected REST API and as well a web socket server. It stores all messages that were sent in a NoSQL database on AWS.

[Link to WhatsApp Backend Server Repository](https://github.com/MartinMohammed/IBM-whatsapp-bot-backend)

## Authorization Server with JWT

The Authorization Server with JWT is a secure authentication service that allows users to register, login, and manage their authentication tokens. It provides endpoints for user registration, user login, refreshing access tokens, and logging out. The API uses JWTs for authentication and Redis for managing refresh tokens.

[Link to Authorization Server Repository](https://github.com/MartinMohammed/IBM-jwt-authorization)

# WhatsApp Middleware NPM Package

The WhatsApp Middleware Package is a highly successful npm package developed during my internship at IBM. It serves as a crucial component of the Fitness App Suite, enabling seamless integration with the WhatsApp Chatbot and real-time message communication.

[Link to WhatsApp Middleware NPM package](https://github.com/MartinMohammed/IBM-whatsapp-bot-middleware-npm)

## Conclusion

The Fitness App Suite brings together a range of applications to improve the fitness experience for users and streamline customer service. Each application serves a specific purpose in the overall ecosystem, offering features such as gym occupancy tracking, real-time notifications, and secure authentication.

Feel free to explore each application's repository for more details and contributions. If you have any questions or suggestions, don't hesitate to reach out. Happy coding!
