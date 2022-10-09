# Getting Started with backend application

# Installation Steps for softwares used

- MongoDB : We used No-SQL database to store the application data. Installation steps can be found [here](https://www.mongodb.com/docs/manual/administration/install-community/)

- Database View: We used Studio3T to access the data stored in the database. Installation steps can be found [here](https://studio3t.com/download/)

- Postman: We used Postman to test backend APIs. Installation steps can be found [here](https://www.postman.com/downloads/)

- Code development: We used Visual Studio Code. Installation steps can be found [here](https://code.visualstudio.com/)


# How to run the backend APIs

- Clone the repository:
```
git clone https://github.com/Sneha1b/CSC-510-SE.git
```
- Run backend:
```
cd backend_node
npm install
npm start
```
You will be notified with a message that the app is running at 8000 and database connection is successful. Refer image below:

<img align=center src="" width="300">


- Link to Postman APIs can be found [here](https://galactic-shadow-406532.postman.co/workspace/4245febc-0ae0-4d2e-94a3-4e06e5f6a5f8/collection/5368343-8530f571-a4b4-413c-871a-1a1951aae0f6?ctx=documentation)

# How to test the backend APIs

- Go to the workspace in Postman.

- Add details in the body of the request and click on 'Send'. 
For example, in the Signup API, add details like name, lastname, email and password in JSON format. On clicking 'Send', you will receive Status 200 (OK) if it is successfully created. Refer image below:

<img align=center src="" width="300">

- Go to Studio3T and check if the user is added into the database successfully.

<img align=center src="" width="300">



