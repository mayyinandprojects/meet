'use strict';

const { google } = require("googleapis");
const calendar = google.calendar("v3");
const SCOPES = ["https://www.googleapis.com/auth/calendar.events.public.readonly"];
const { CLIENT_SECRET, CLIENT_ID, CALENDAR_ID } = process.env;
const redirect_uris = [
  "https://mayyinandprojects.github.io/meet/"
];

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  redirect_uris[0]
);

module.exports.getAuthURL = async () => {
  /**
   *
   * Scopes array is passed to the `scope` option. 
   *
   */
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
      authUrl,
    }),
  };
};

// Course notes: 
// Here’s a brief explanation of the contents in the code just shown:

// 'use strict': This is added by default when you generate the serverless template code. It makes the code in the file more, well, strict, reducing some of JavaScript’s “sloppyness.” You can learn more about what exactly use strict prevents in this guide.
// Packages: The required Google package was imported (i.e., “googleapis”), along with the Google Calendar.
// Scopes: SCOPES allows you to set access levels. While setting up the required infrastructure in the Google console in the previous Exercise, “read-only access” was defined as the scope. That scope has been stored in the scopes variable. Any scopes passed must be enabled in the "OAuth consent screen" settings in your project on your Google Console. Also, any passed scopes are the ones users will see when the consent screen is displayed to them. For more info, check out the scopes documentation.
// process.env: Next, you can see const { CLIENT_SECRET, CLIENT_ID, CALENDAR_ID } = process.env;. If you see process.env, this means the value being referred to is in the config.json file. This is a best practice as it keeps your API secrets hidden. (On that note, double-check that you’ve added config.json to your .gitignore file). Right now, you’ve set three variables of this kind in serverless.yml. Note that these three variable take their values from the config.json file:

// oAuth2Client: From the Google API, using the new operator, a new instance of the google.auth.OAuth2 method was called and created. This instance accepts CLIENT_ID, CLIENT_SECRET, and the redirect URL as parameters.
// redirect_uris: The first step in the OAuth process is to generate a URL so users can log in with Google and be authorized to see the calendar events data. After logging in, users will receive a code as a URL parameter. The array assigned to redirect_uris in the const redirect_uris = [...] line should match the exact redirect_uris you have in client_secret_<Your_ID>.json. Per the instructions so far, you should have only one redirect url in the array (hence why you’re specifically passing the first element of it, redirect_uris[0], as the third argument of new google.auth.OAuth2() ).
// getAuthURL: The getAuthURL function’s logic was created and exported using Node.js module.exports. Another notable module used in the getAuthURL function is the OAuth2 client, which allows you to seamlessly retrieve an access token, refresh it, and retry the request. To generate an authentication URL from Google API using the instance stored in oAuth2Client, you have to call the 'oAuth2Client.generateAuthUrl' method and pass the “access_type” and scope (that was set in the variable scopes earlier) as an object.
// return: Last, but not least, the return part of the function contains the statusCode, headers, and body.

//default code: 
// exports.hello = async (event) => {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({
//       message: "Go Serverless v4! Your function executed successfully!",
//     }),
//   };
// };
