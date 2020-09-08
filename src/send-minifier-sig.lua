--[[
  lua-socket module is required for UDP client
  luarocks install luasocket
]]

-- Notify minify UDP server from newly cached content
return function()
  local socket = require("socket")
  local udp = socket.udp()

  udp:setpeername("127.0.0.1", 2222)
  udp:settimeout(1)

  udp:send(ngx.var.host .. ngx.var.request_uri) 
  end

