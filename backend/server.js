const path = require('path');
const express = require("express");
const app = express();
const dotenv= require('dotenv')
// const colors= require('colors')
const morgan= require('morgan')
const connectDB= require('./config/db.js')

const user= require('./routes/users')

const rider = require('./routes/rider')

const product = require('./routes/products')
const order = require('./routes/orderRoutes')

// dotenv.config()

// connectDB()

// const app = express()

// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'))
// }

// app.use(express.json())

// app.use('/api/products', productRoutes)
// app.use('/api/users', userRoutes)
// app.use('/api/orders', orderRoutes)
// app.use('/api/upload', uploadRoutes)

// app.get('/api/config/paypal', (req, res) =>
//   res.send(process.env.PAYPAL_CLIENT_ID)
// )

// // /const __dirname = path.resolve()
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '/frontend/build')))

//   app.get('*', (req, res) =>
//     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
//   )
// } else {
//   app.get('/', (req, res) => {
//     res.send('API is running....')
//   })
// }


// const PORT = process.env.PORT || 5000

// app.listen(
//   PORT,
//   console.log(
//     `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
//   )
// )

// const express = require("express");
// const app = express();
 const cors = require("cors");
 const bodyParser = require("body-parser");
// const connectDB = require("./config/db");
 const passport = require("passport");
// const dotenv = require('dotenv');
// var path = require("path");
// var fs = require("fs");


//const blog = require('./routes/blogs')
//import blog from '



dotenv.config();
//Connect Database
connectDB();

//Init Middleware
//app.use(express.json({ extended: false }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
//add other middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Passport middleware
app.use(passport.initialize());

// //Passport Config
require('./config/passport')(passport);



// Routes
// require("./routes")(app);

//app.use('/products', productRoutes)


app.use('/users', user)
app.use('/rider', rider)
app.use('/products', product)
app.use('/order',order)
//app.use('/api/orders', orderRoutes)
//app.use('/api/upload', uploadRoutes)



const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));
