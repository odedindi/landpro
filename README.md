LandPro prototype
==============================

based on our climate_hackathon little project for the cool farm alliance challenge

# Introduction

# pull both front and back end sides


# BACKEND

* have docker on your system
* try from the root project folder to run the command docker-compose up

if it works great, now we got the server running,
in order to get into the admin control panel you gotta create a super user,
from the terminal locate the land_pro container by running the command: docker ps
copy the container id (it should look like: 5ce56d598053)
enter in to the container with the commande docker exec -ti <containerID> bash
and from within the container run the command python manage.py createsuperuser
and follow the instructions

if the container is up you should be able to access it via the browser at http://0.0.0.0:8000
and to get into it and to see the basic data of the data base go to http://0.0.0.0:8000/api/admin/
and use the information you just created.


* if needed
## Creating and running requirement file
fron the backend folder run the command:
conda env create -f requirements.yml
then you can activate it from any where really, using the command: conda activate land_pro


# FRONTEND

from the frontend forlder run yarn install
if you dont have yarn you can (and totally should) add it globally with npm install --global yarn
to run the app using: yarn start

if both frontend and backend are running locally they should be able to communicate and pass the polygons data between each other 


folder structure and specifications of the diffrent files will be added in the near future.

good luck for now
:D
