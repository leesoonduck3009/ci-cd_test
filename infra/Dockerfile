FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf
COPY ssl/server.crt /etc/nginx/ssl/server.crt
COPY ssl/server.key /etc/nginx/ssl/server.key
# Port for the web server will be exposed
EXPOSE 443 
EXPOSE 8080 


CMD ["nginx", "-g", "daemon off;"]
