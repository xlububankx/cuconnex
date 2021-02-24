# build environment
FROM node:alpine as react-build
WORKDIR /web/app
COPY /web /web/app
RUN yarn
RUN yarn build

# server environment
FROM nginx:alpine
COPY /web/nginx.conf /etc/nginx/conf.d/configfile.template

COPY --from=react-build /web/app/build /usr/share/nginx/html

ENV PORT 8080
ENV HOST 0.0.0.0
EXPOSE 8080
CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"