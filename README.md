# openresty-node-udp-minifier-srv

A NGINX/openresty cached static content minifier model implementation.

**This repository not considered as a production ready model**

Alpha tested using:

```sh
nginx version: openresty/1.17.8.2
built with OpenSSL 1.1.1g  21 Apr 2020
TLS SNI support enabled
configure arguments: --prefix=/usr/local/openresty/nginx --with-cc-opt='-O2 -DNGX_LUA_ABORT_AT_PANIC -I/usr/local/openresty/zlib/include -I/usr/local/openresty/pcre/include -I/usr/local/openresty/openssl111/include' --add-module=../ngx_devel_kit-0.3.1 --add-module=../echo-nginx-module-0.62 --add-module=../xss-nginx-module-0.06 --add-module=../ngx_coolkit-0.2 --add-module=../set-misc-nginx-module-0.32 --add-module=../form-input-nginx-module-0.12 --add-module=../encrypted-session-nginx-module-0.08 --add-module=../srcache-nginx-module-0.32 --add-module=../ngx_lua-0.10.17 --add-module=../ngx_lua_upstream-0.07 --add-module=../headers-more-nginx-module-0.33 --add-module=../array-var-nginx-module-0.05 --add-module=../memc-nginx-module-0.19 --add-module=../redis2-nginx-module-0.15 --add-module=../redis-nginx-module-0.3.7 --add-module=../ngx_stream_lua-0.0.8 --with-ld-opt='-Wl,-rpath,/usr/local/openresty/luajit/lib -L/usr/local/openresty/zlib/lib -L/usr/local/openresty/pcre/lib -L/usr/local/openresty/openssl111/lib -Wl,-rpath,/usr/local/openresty/zlib/lib:/usr/local/openresty/pcre/lib:/usr/local/openresty/openssl111/lib' --with-pcre-jit --with-stream --with-stream_ssl_module --with-stream_ssl_preread_module --with-http_v2_module --without-mail_pop3_module --without-mail_imap_module --without-mail_smtp_module --with-http_stub_status_module --with-http_realip_module --with-http_addition_module --with-http_auth_request_module --with-http_secure_link_module --with-http_random_index_module --with-http_gzip_static_module --with-http_sub_module --with-http_dav_module --with-http_flv_module --with-http_mp4_module --with-http_gunzip_module --with-threads --with-stream --with-stream_ssl_preread_module --with-http_ssl_module

```

## How repository structured and how to demonstrate an example?

- Consider [./nginx.conf](./nginx.conf) as NGINX entry point configuration and repository root path as NGINX path prefix _Take a look at [./run.sh](./run.sh)_.
- Run [ ./src/minify-cache-server/app.ts ](./src/minify-cache-server/app.ts) UDP sever on you local host and port `2222` _Consider changing both [./src/send-minifier-sig.lua](./src/send-minifier-sig.lua) and [./src/minify-cache-server/app.ts](./src/minify-cache-server/app.ts) for udp minifier server host and port modification_.
- Head over to [https://127.0.0.1:4333/](https://127.0.0.1:4333/) it will populate NGINX cache [./cache](./cache) and trigger minimization server to take action.

## License

[MIT License](LICENSE)
