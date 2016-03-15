BBVA OFFICES
 =============

 docker build -t ymedlop/ymedlop-front-demo .
 docker run -p 8080:8080 --name front-offices ymedlop/ymedlop-front-demo


oc login --insecure-skip-tls-verify=true
oc project bbva-offices
oc new-app --strategy=docker https://github.com/ymedlop/ymedlop-front-demo.git

http://172.30.228.228