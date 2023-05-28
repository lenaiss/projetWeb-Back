// wiki.js - Wiki route module.

var express = require('express');
// const morgan = require('morgan');
const createError = require('http-errors');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const cors = require('cors');

const port = process.env.PORT || 8000;

var app = express();

const limiter = rateLimit({
	windowMs: 10 * 60 * 1000, // 10 minutes
	max: 1000, // Limit each IP to 1000 requests per `window` (here, per 10 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

app.use(express.json());
//log all requests to the console
// app.use(morgan('dev'));
//compress all responses
app.use(compression());
// Apply the rate limiting middleware to all requests
app.use(limiter)

app.use(cors({
	origin: "*",
	credentials: true,
}))

const userRoute = require('./routes/userRoute');
const articleRoute = require('./routes/articleRoute');
const artisteRoute = require('./routes/artisteRoute');
const commandeRoute = require('./routes/commandeRoute');

app.use('/user',userRoute);
app.use('/article',articleRoute);
app.use('/artiste',artisteRoute);
app.use('/commande',commandeRoute);

app.use((req, res, next) => {
  next(createError(404));
});

app.listen(port,function(){
  console.log("Live at Port 8000");
});


module.exports = app;






// var router = express.Router();
// const db = require('./db');
// // const art = require('./routes/articleRoutes');


// // app.use(cors());

// // Home page route.
// router.get('/', function (req, res) {
//   res.send('welcome to home page');
// })

// // About page route.
// router.get('/about', function (req, res) {
//   res.send('simple demo of express for IG3');
// })

// // router.get('/articles', function(req,res,next){
// //   db.queryAll(req ,res);
// //       // console.log(result);
// //       // res.send(result);
// // });




// ----------------------------------------------------
// ---------- get one particular value

//router.get('/user',function(req,res,next){  
  // console.log(`get festival for id=${id}`);
  // db.queryValue('user','idUser',id,function(result){
  //     res.send(result);
  // });
 // db.queryAll(function(result){
  //  res.send(result);
//  }
 // )
//});


// module.exports = router;
// app.use('/articles', art);
// app.use("/",router);









// app.use(express.json());

// app.use(cors({
// 	origin: "*",
// 	credentials: true,
// }))


// const articleRoute = require('./routes/agencyRoute');
// app.use('/articles',articleRoute);

// app.use((req, res, next) => {
//   next(createError(404));
// });

// app.listen(8000,function(){
//   console.log("Live at Port 8000");
// });

// module.exports = app;
