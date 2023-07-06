Tutorial 5: Back-End Frameworks

This submission includes developement of APIs for GET, PUT, POST, and GET by username.

* *Date Created*: 4 July 2023
* *Last Modification Date*: 5 July 2023
* *Lab URL*: https://dal.brightspace.com/d2l/le/content/274269/viewContent/3608634/View
* *Git URL*: https://git.cs.dal.ca/kainat/csci_5709_kainat_khan_tutorials/-/tree/main/tutorial-5
* *Render URL*: https://expressrestapis.onrender.com/


## Authors.

* [Kainat Khan](Kainat@dal.ca) - *(developer)*

## Testing

Test GET API
```
URL: localhost:8080/users
Response:
{
    "message": "Users retrieved.",
    "success": true,
    "users": [
        {
            "id": 1,
            "email": "abc@xyz.com",
            "firstName": "ABC"
        },
        {
            "id": 2,
            "email": "def@xyz.com",
            "firstName": "DEF"
        },
        {
            "id": 3,
            "email": "ghk@xyz.com",
            "firstName": "GHK"
        }
    ]
}
```

Test GET by username

```
URL: localhost:8080/user/ABC
Response: 
{
    "success": true,
    "user": {
        "email": "abc@xyz.com",
        "firstName": "ABC",
        "id": 1
    }
}
```
Test PUT API

```
URL: localhost:8080/update/3
Body:
{
  "email": "ert@GHJ",
  "firstName": "ABC"
}
Response: 
{
    "message": "User updated",
    "success": true
}
```

Test POST API

```
URL: localhost:8080/add
Body:
{
  "email": "ert@GHJ",
  "firstName": "ert"
}
Response: 
{
    "message": "User added",
    "success": true,
    "id": "c0bc3dad-6f83-4b5b-ab2a-34d709fe659b"
}
```


## Deployment

Deployed using netlify

## Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* [NodeJS](https://nodejs.org/en) - Backend framekwork
* [ExpressJs](https://expressjs.com/) - Backend framework

