This is a simple example you can use es6 module 
if you don't want to use all of those script tags.

Remember to show your appreciation thank you all.

##### Important :
It can also be use with es6 module

```html
<!DOCTYPE html>
<html>
<head>
<title></title>
 <meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1.0">
</head>
<body>
<nav>
<a router-link="/">Home</a>
<a router-link="/register">Register</a>
<a router-link="/login">Login</a>
</nav>
<br><br>
<div id="root"></div>
<router-routes link="/" components="'<home-page/>'"></router-routes>
<router-routes link="/register" components="'<register-page/>'"></router-routes>
<router-routes link="/login" components="'<login-page/>'"></router-routes>
<script  src="js/iroute.js"></script>
<script defer type="module" src="js/main.js"></script>

</body>
</html>
```

and in main.js
```javascript
import './signup.js'
import "./home.js"
import "./login.js";
```

###### Remember 
When using es6 module only web component based is usable,you can't use functional components based .
