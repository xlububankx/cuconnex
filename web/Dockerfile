# build environment
FROM node:alpine as react-build
WORKDIR /web/app
COPY /web /web/app
RUN yarn
RUN yarn build

# server environment
FROM nginx:alpine
COPY /web/nginx.conf /web/etc/nginx/conf.d/configfile.template

COPY --from=react-build /web/app/build /web/usr/share/nginx/html

ENV PORT 8080
ENV HOST 0.0.0.0
EXPOSE 8080
CMD sh -c "envsubst '\$PORT' < /web/etc/nginx/conf.d/configfile.template > /web/etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"