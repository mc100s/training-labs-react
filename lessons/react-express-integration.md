![Ironhack logo](https://i.imgur.com/1QgrNNw.png)

# React & Express | Frontend Backend Integration

## Commands to launch

```sh
$ express my-fullstack-app --git
$ cd my-fullstack-app
$ npm install
$ npm install --save cors mongoose

```

Generate the React app inside the Express app directory:
```sh
$ create-react-app client
$ npm install --save axios
```

## Modify the Express App

We will:
- Remove everything about Views (`views`, `view engine`, `cookieParser`, `express.static`)
- Add cors
- Add a public folder that is `client/build` (and not anymore `public`)



```js
let cors = require('cors');
// ...
app.use(cors());
// ...
app.use(express.static(path.join(__dirname, 'client/build')));
```

We can do even better for the cors:
```js
// We don't need cors on production because there we only have 1 server
if (process.env.NODE_ENV !== 'production') {
  app.use(
    cors({
      // Only allow the vue application access this server
      origin: "http://localhost:8080"
    })
  );
}
```

## Modify the React app

<!-- Source: https://github.com/ta-web-paris/tweeter/blob/master/client/src/api.js -->

We will create 

```js
// client/src/api.js
import axios from 'axios';

const service = axios.create({
  baseURL: `http://localhost:3000/api/`
});

const errHandler = err => {
  console.error(err.response.data);
  throw err.response.data;
};

export default {
  service: service,

  signup(userInfo) {
    const formData = new FormData();
    Object.keys(userInfo).forEach(key => formData.append(key, userInfo[key]));
    return service
      .post('/signup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => res.data)
      .catch(errHandler);
  },

  login(username, password) {
    return service
      .post('/login', {
        username,
        password,
      })
      .then(res => {
        const { data } = res;
        localStorage.setItem('user', JSON.stringify(data));
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;
        return data;
      })
      .catch(errHandler);
  },

  getSecret() {
    return service
      .get('/secret')
      .then(res => res.data)
      .catch(errHandler);
  },

  logout() {
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem('user');
  },

  loadUser() {
    const userData = localStorage.getItem('user');
    if (!userData) return false;
    const user = JSON.parse(userData);
    if (user.token && user.name) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + user.token;
      return user;
    }
    return false;
  },
};
```

Then, we can for example use `getSecret()` like this:

```js
import api from './api'

api.getSecret()
  .then(data => {
    console.log("This is my data:", data)
  })
```


# Resources

- Original inspiration: [Create React App with Express in Production](https://daveceddia.com/create-react-app-express-production/)
- [GitHub lab-login-vue-jwt Vue](https://github.com/ta-web-paris/lab-login-vue-jwt)