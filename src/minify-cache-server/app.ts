import udp from "dgram";
import crypto from "crypto";
import { writeMinify } from "./content-processor";

// Creating a UDP server
const server = udp.createSocket("udp4");

// Emits when any error occurs
server.on("error", function(error) {
  console.error("Error: " + error);
  server.close();
});

// Emits on new datagram msg
server.on("message", function(msg, info) {
  console.info(
    "Received %d bytes from %s:%d\n",
    msg.length,
    info.address,
    info.port
  );

  // Cache Key is MD5 hashed, hex encoded $proxy_host$request_uri
  const cacheKey = crypto
    .createHash("md5")
    .update(msg.toString())
    .digest("hex");

  // Rewrite chacheKey with minfied content
  writeMinify(cacheKey);
});

// Emits when socket is ready and listening for datagram msgs
server.on("listening", function() {
  const address = server.address();
  const port = address.port;
  const family = address.family;
  const ipaddr = address.address;
  console.info("Server is listening at port: " + port);
  console.info("Server ip: " + ipaddr);
  console.info("Server is IP4/IP6: " + family);
});

// Emits after the socket is closed using socket.close();
server.on("close", function() {
  console.info("Socket is closed !");
});

server.bind(2222);
