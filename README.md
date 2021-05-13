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

This code is hosted in [Heroku](https://morning-woodland-35115.herokuapp.com/user-profile)

Find link to [git repo](https://github.com/Celnet-hub/CRUD_App_with_Zuri_Training)


