
## To run API server
```
$ npm install
$ node server.js
```

## To test API endpoints
```
./node_modules/.bin/istanbul cover node_modules/mocha/bin/_mocha && codecov
```

## Documentation

A brief introduction of all api endpoints covered in this tutorial.

### Get all Todo:

url -  http://apitodo.herokuapp.com/api/todos   
method - get

```javascript
Success Response:

{
  status: true,
  todo :[{
  		"_id":"56e7975dbf17876b095a0f21","todo":"From mock","__v":0,"created_by":"2016-03-15T05:02:21.041Z","completed":false
  }]
}

Error Response:

{status: false, error: "Message"}
```

### Post a todo

url - http://apitodo.herokuapp.com/api/todos/
method - post
params: {todo: "Your todo"} 

Note - By default it is marked as not completed

```javascript

Success Response:

{
  status: true,
  todo:[{
  		"_id":"56e7975dbf17876b095a0f21","todo":"From mock","__v":0,"created_by":"2016-03-15T05:02:21.041Z","completed":false
  }]
}

Error Response:

{status: false, error: "Message"}


```

### Update status

url: http://apitodo.herokuapp.com/api/todos/_id

method - put

params: {completed: status }

status - boolean value

```javascript

Success Response:

{status: true, message: "Status updated successfully"}

Error Response:
{status: false, error: "Status not updated"}

```
### Deleting a todo
url: http://apitodo.herokuapp.com/api/todos/_id
method: delete

```javascript

Success Response:

{status: true, message: "Todo deleted successfully"}

Error Response:

{status: false, error: "Deleting todo is not successful"}
```


