# book-appointments
An app that lets you book appointments with other users

Step 1) Make a mongodb database named 'cl' and in that database make a collection named 'users'

Step 2) git clone

Step 3) Enter email id and password in server/utils/email.utils.js file. Please make sure you have enabled access for less secure apps in your email account settings. Alternatively instead of putting email-password here directly, you can store it in server env variables and access it like process.env.NODEMAILER_SERVICE

Step 4) npm install

Step 5) cd client && npm install // this is because angular & node dependencies have not been merged

Ste4 6) ng build --base-href '/'

Step 7) cd .. //go to project root dir

Step 8) grunt serve

Step 9) open the project in browser @ http://localhost:3000/
