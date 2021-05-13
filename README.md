# CRUD Task with Zuri Traing

This task was given to improve my knowledge of APIs. A CRUD operations designed to **Create**, **Read**, **Update** and **Delete** data in a **Mongo Database** using **Postman** as a client.

## Routes

**Create Route** : The default route used to create payload
`router.post("/", (req, res))`

**READ Route** : This route is used to get data from the database. See code below:
`router.get("/user-profile", (req, res))`


**READ one User Route** : This route is used to query data from the database by FirstName. See code below:
`router.get("/user-profile/:firstName", (req, res))`

**UPDATE Route** : This route is used to update user whose firstname was queried. See code below:
`router.put("/update-profile/:firstName", (req, res))`

**Delate Route** : This route is used to delete user fromt the database
`router.delete("/delete-user/:id", (req, res))`

This code is hosted in [Heroku](https://glacial-stream-35995.herokuapp.com/user-profile)

Find link to [git repo](https://github.com/Celnet-hub/CRUD_App_with_Zuri_Training)


# Bugs encountered

- `Error R10 (Boot timeout) -> Web process failed to bind to $PORT within 60 seconds of launch`.
I statically assigned a value to the port my server was listening to during development before deploying to **Heroku**. I also did the same in my Heroku dashbord by modifying **Config Vars**. After researching on google I found out that was not neccessary because Heroku will dynamically assign a port number to my environmnet variable and this `const port = process.env.PORT || 5000` handles the rest. Bug was fixed after **Config Vars** was modified and statically assigned values in the code base was deleted.

- `{MongoError: .......}`
Though i can't remember the exact error message. The bug was due to fact that **Config Vars** was not configured with an environment variable that should hold the Password to Mongo-Atlas. After the variable was configured, this `const password = process.env.PASSWORD;` handled the authentication process and Bug was fixed. 