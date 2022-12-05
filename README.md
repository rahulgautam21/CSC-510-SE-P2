# CSC-510 Software Engineering 
[![DOI](https://zenodo.org/badge/568535000.svg)](https://zenodo.org/badge/latestdoi/568535000)
[![Build Status](https://github.com/rahulgautam21/CSC-510-SE-P2/actions/workflows/action.yml/badge.svg)](https://github.com/rahulgautam21/CSC-510-SE-P2/actions/workflows/action.yml)
[![SonarQube Analysis](https://github.com/rahulgautam21/CSC-510-SE-P2/actions/workflows/sonarcloud.yml/badge.svg)](https://github.com/rahulgautam21/CSC-510-SE-P2/actions/workflows/sonarcloud.yml)
[![Code Linting Analysis Report](https://github.com/rahulgautam21/CSC-510-SE-P2/actions/workflows/lint.yml/badge.svg)](https://github.com/rahulgautam21/CSC-510-SE-P2/actions/workflows/lint.yml)
[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
[![Documentation Status](https://readthedocs.org/projects/ansicolortags/badge/?version=latest)](https://github.com/rahulgautam21/CSC-510-SE-P2/blob/main/README.md)
[![GitHub issues](https://img.shields.io/github/issues/rahulgautam21/CSC-510-SE-P2)](https://github.com/rahulgautam21/CSC-510-SE-P2/issues?q=is%3Aopen)
[![GitHub closed issues](https://img.shields.io/github/issues-closed/rahulgautam21/CSC-510-SE-P2)](https://github.com/rahulgautam21/CSC-510-SE-P2/issues?q=is%3Aclosed)
[![Github pull requests](https://img.shields.io/github/issues-pr/rahulgautam21/CSC-510-SE-P2)](https://github.com/rahulgautam21/CSC-510-SE-P2/pulls)
[![Github closed pull requests](https://img.shields.io/github/issues-pr-closed/rahulgautam21/CSC-510-SE-P2)](https://github.com/rahulgautam21/CSC-510-SE-P2/pulls?q=is%3Apr+is%3Aclosed)
[![Github Repo size in bytes](https://img.shields.io/github/languages/code-size/rahulgautam21/CSC-510-SE-P2)](https://github.com/rahulgautam21/CSC-510-SE-P2)
[![codecov.io Code Line Coverage](https://img.shields.io/badge/code%20coverage-63%25-green)](https://github.com/rahulgautam21/CSC-510-SE-P2/blob/main/backend_node/Test%20Results%20-%20Backend_Test.html)

# Project Description
In today's customer centric economy, products tweaked to the customer needs and desires have the highest market value. The recent boom in social media advertisement, has led to huge increase in demand for customized merchandise from small/local businesses. And most of the times these local businesses cannot get registered to world wide e-commerce sites due to local supply of the product.

We design a custom e-commerce site that can be run by any local business owner free of cost to sell the merchandise at a large scale. One can add any kind of product on the site be it tshirts, customized planners, wallpapers (How about some fresh organic produce!). All you need to do is setup the project and use it to increase your product reach!

<img align=center src="https://github.com/Sneha1b/CSC-510-SE/blob/main/backend_node/misc/poster.png" width="900">

The project is hosted on AWS ec2, completely scalable by adding more instances when the customer growth increases by adding more instances and adding a load balancer. The basic version of the app is available [here](http://54.190.102.173)


# Demo
[Click here to check the demo video](https://drive.google.com/file/d/1RdRbiGIPSofx5wDev_UIDP-WZddjx8gi/view?usp=drivesdk)

# RoadMap
[Click here to check the roadmap](https://github.com/users/Sneha1b/projects/1/views/1)

# Technical Description
The project was taken up as a part of the course work for CSC 510 Software Engineering during Masters. The project aims at creating a microservice, build it ground up and understand various aspects of software development in the industry.

We designed a one-stop marketplace that helps the customers buy customized merchandise. New users can use the sign-up functinality to create an account.
 
There are 2 allowed roles in the system :  
- Admin - Has capability of performing CRUD operations on merchandise. This allows him to add/remove different merchandise as well as classify them into categories.

- Buyer/User - Has the capability of selecting a merchandise and proceeding to checkout by adding it to cart.

# Installation Steps
- Clone the repository:
```
git clone https://github.com/Sneha1b/CSC-510-SE.git
```
- Install node n mongo in the system:
```
https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/
https://www.guru99.com/download-install-node-js.html
```
- Run backend:
```
cd backend_node
npm install
npm start
```
- Run frontend:
```
cd frontend
npm install
npm start
```
- Navigate using a browser to [site](http://localhost:3000/signin) and host your very own customized e-commerce site.


# Tech stack
We have used the MERN stack, a free and open-source JavaScript software stack for building dynamic full-stack web applications. This involves using:  
- MongoDB : A document-oriented, No-SQL database used to store the application data.

- ExpressJS : A framework layered on top of NodeJS, used to build the backend of a site using NodeJS functions and structures.

- ReactJS : A library used to build UI components that create the user interface of the single page web application.

- NodeJS : The JavaScript runtime environment. It is used to run JavaScript on a machine rather than in a browser.  

# Software used
- Code development: We use visual studio code. Installation steps can be found [here](https://code.visualstudio.com/)

- Database: We use MongoDB community edition as the database for the project. Installation steps can be found [here](https://www.mongodb.com/docs/manual/administration/install-community/)

- Testing: We use Postman to test backend APIs. Installation steps can be found [here](https://www.postman.com/downloads/)

- Database View: We use Studio3T to check the data stored in the database. Installation steps can be found [here](https://studio3t.com/download/)

# Group members
* Chirrag Nangia
* Saswat Priyadarshan
* Sneha Madle
* Yugalee Vijay Patil


Phase 2
* Shubham
* Rahul
* Shreya
* Chetana
* Sarika
* Sri Lekha

# Getting help

To get help contact us at rahul.gautam21@gmail.com or shubhamdua2@gmail.com or raise a github issue.