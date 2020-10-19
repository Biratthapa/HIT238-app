const express= require('express');
const webpush=require('web-push');
const bodyParser= require('body-parser');
const path = require('path');

const app= express();
app.use(express.static(path.join(__dirname, "client")));
app.use(bodyParser.json());

const publicVapidKey="BL6Y4SeyQLcnSuK9yao457B2TrZkebEGibxqGVkPIsenG2rsczF-ZiMZIk2AHv_2rIwAweL7W43PE7X3AGpqpAI";
const privateVapidKey= "dbfAgy_KqhtJsg_iuo0Q_-Xbf1wP3lW68-6v261TW6U";

webpush.setVapidDetails('mailto:nayajpt954@gmail.com', publicVapidKey, privateVapidKey);
app.post('/subscribe', (req,res) =>{
   const subscription = req.body;
   res.status(201).json({});
   const payload = JSON.stringify({title: "Push Test"});
   webpush.sendNotification(subscription, payload).catch(err => console.error(err));
});
const port= 5000;
app.listen(port, () => console.log('Server started on port '+port));
