/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var twilio = require('twilio');

// Find your account sid and auth token in your Twilio account Console.
var client = new twilio('AC574d94f697fdd3bc7e9febde9ab59647', '40de7860dd7f9115d91325f827c2b0ac');

// Send the text message.
client.messages.create({
  to: '5307980054',
  from: '2177214233',
  body: 'Hello from Twilio!'
});1