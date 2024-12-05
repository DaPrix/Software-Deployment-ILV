# Software Deployment Lab 3
This exercise is split into 2 Parts:
 - Part 1: Creation of a Docker-Compose file which uses Wordpress and MySQL images to set up a Wordpress container infrastructure.
 - Part 2: Creation of own images based on debian for a Wordpress container installation. Both images need persistent volumes. Wordpress to manage the uploaded files and the config, MySQL to keep the database persistent.  The two containers should be able to communicate via TCP/IP.

 ## Part 1: Deployment using official Images
When navigating to the correct Directory called 'Teil 1' start the docker containers using
```
docker-compose up -d
```
Now the site is up and running on 
```
http://localhost:8080/
```
and just need to be configured!

## Part 2: Deployment using custom Images
When navigating to the correct Directory called 'Teil 1' start the docker containers using
```
docker-compose up --build
```
Now the site is up and running on 
```
http://localhost:8080/
```
and just need to be configured!

## Stopping the Containers
Following command can be used to stop the containers once they are running
```
docker-compose down --volumes
```

## Database Credentials
Following Credentials can be used during the configuration:
- Database Name: wordpress_db
- Username: userdb
- Password: passworddb
- Database Host: db:3306