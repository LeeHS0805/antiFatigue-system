docker stop fatigue

git pull

yarn

yarn build

#删除容器
docker rm -f fatigue

#启动容器
docker run -d --restart=on-failure:5\
    -p 8081:80 \
    -v $PWD/dist:/usr/share/nginx/html \
    --name fatigue nginx
