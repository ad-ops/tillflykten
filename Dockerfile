# Svelte static build
FROM docker.io/node:22.6.0-alpine3.20 as build
WORKDIR /app
COPY package.json package-lock.json .
RUN npm install
COPY . .
RUN npm run build

# Pocketbase runtime
FROM docker.io/alpine:3.20
ARG PB_VERSION=0.22.19
RUN apk add --no-cache \
    unzip \
    ca-certificates
ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
RUN echo "bf7abfaa4397ef961e9336fdd4d11e8696aa27bf34cc46174e9fc9e6b8bfd19b  /tmp/pb.zip" | sha256sum -c -
RUN unzip /tmp/pb.zip -d /pb/
WORKDIR /pb
COPY ./pb/pb_migrations ./pb_migrations
COPY --from=build /app/build ./pb_public
EXPOSE 8080
CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8080"]