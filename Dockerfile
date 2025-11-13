FROM nginx:alpine
COPY index.html /usr/share/nginx/html/
COPY dynamic.js /usr/share/nginx/html/
COPY competitors.js /usr/share/nginx/html/
EXPOSE 8080
CMD sed -i 's/listen       80;/listen       8080;/' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
