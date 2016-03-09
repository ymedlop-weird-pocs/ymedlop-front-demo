BBVA OFFICES
 =============

 docker build -t ymedlop/ymedlop-front-demo .
 docker run -p 8080:8080 --name offices ymedlop/ymedlop-front-demo

 oc new-app --strategy=docker