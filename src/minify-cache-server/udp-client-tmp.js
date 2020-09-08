/**
 * This is a temporary file consumed as UDP client test for development purposes 
 */
const udp = require("dgram");

// Creating a client socket
const client = udp.createSocket("udp4");

// Buffer msg
const data = Buffer.from("deno.land/inter.css");

// Sending msg
client.send(data, 2222, "127.0.0.1", function(error) {
  if (error) {
    client.close();
    process.exit(1);
  } else {
    console.log("Sent !!!");
    client.close();
    process.exit(0);
  }
});
