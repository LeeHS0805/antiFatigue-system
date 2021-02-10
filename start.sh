docker stop fatigue
git pull
yarn
yarn build
docker rm -f fatigue
docker run -d --restart=on-failure:5\
    -p 8081:80 \
    -v $PWD/dist:/usr/share/nginx/html \
    --name fatigue nginx
