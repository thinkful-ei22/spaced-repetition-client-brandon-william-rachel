Learn Dothraki

https://learndothraki.herokuapp.com/

Overview

Learn Dothraki through spaced repetition in a simple and fun way.

Front-end
Technologies: React, Redux 

Main Page: Displays current word and a text input for your answer. Notifies the user whether they were correct or incorrect. Displays a count of how many questions were answered correctly.  

Back-end
Technologies: Node.js, Express, MongoDB, Passport, Passport

Allow users to register/login. Uses the spaced repetition algorithm to generate the next question, shuffling each question based on the memory score. A user can increase their memory score for a question by answering it correctly.  Questions are stored in a our Mongo database. The database also stores user history.


## API at a Glance

### API Documentation

##### Authorization

###### GET a JSON Web Token (Login)

* Request Type: `POST`

* URL: `https://learndothraki.herokuapp.com/auth`

* Required Request Headers: 
```
{
  Content-Type: `application/json`
}
```

* Required Request JSON Body: 
```
{
  username: 'UsernameStringGoesHere',
  password: 'PasswordStringGoesHere'
}
```

* Response Body will be a JSON Web Token: 
```
{
  authToken: 'theTokenWillBeHereAsAString'
}
```

* Note - Web Token is valid for 7 days from the issue date



##### Question Data

###### GET next question

* Requires valid JSON Webtoken

* Request Type: `GET`

* URL: `https://silly-noether-09bfca.netlify.com/dashboard`

* Required Request Headers: 
```
{
  Authorization: `Bearer JSONWebToken`
}
```

* Response Body will be a single question based on spaced repetition algorithm:
```
{
    "_id": "5b9c1067788c121d08079827",
    "question": "The stars are charging for you!",
    "hint": "The Dothraki word for 'stars' is 'shieraki'",
    "answer": "Shieraki gori ha yeraan!",
    "_next": 1,
    "memoryStrength": 1
}
```
'Memory Strength' increments by 1 if question is answered correctly, otherwise it resets to 0. The value of 'next' is reassigned based on memory strength.  A larger memory strength will result in the 'next' value pointing further back in the queue.
