--[[
  lua-socket module is required for UDP client
  apt install lua-socket
]]

-- Notify minify UDP server from newly cached content
return function()
  local socket = require("socket")
  local udp = assert(socket.udp())

  assert(udp:setpeername("127.0.0.1", 2222))
  udp:settimeout(1)

  assert(udp:send(ngx.var.proxy_host .. ngx.var.request_uri)) 
  end

