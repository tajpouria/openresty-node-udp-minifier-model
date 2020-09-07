function set_cache_target()
  if string.match(ngx.var.request_uri, '.*.css$') then 
    ngx.var.cache_target = 'CSS_CACHE' 
  elseif string.match(ngx.var.request_uri, '.*.js$') then 
    ngx.var.cache_target = 'JS_CACHE' 
  end
end

return set_cache_target

