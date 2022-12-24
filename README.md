# Image Processing API   
**UDACITY - ALX Full-Stack Developer Nanodegree program.**  
**Project 1️⃣**

## Overview   
This project is an API that can be used in two different ways namely;  
**1️⃣ As a Simple Placeholder API:** allows a user to place images into their frontend with the width and height set via URL parameters for rapid prototyping.  
**2️⃣ As a Library:** to serve properly scaled versions of images to the front end to reduce page load size rather than needing to resize and upload multiple copies of the same image to be used throughout the site.  

## ⏬ Installation  
> **_Clone repository_**  
>> Navigate to the directory you want to install the project, open command prompt from the directory and type the code below to clone this repository.  
>>  
>>```sh
>> git clone https://github.com/Nerony-Git/image_processing_api.git
>>```  
>  
> **_Open directory API was cloned to_**  
>> Navigate to the directory using the code below:  
>>  
>>```sh
>> cd image_processing_api
>>```  
>  
> **_Install Dependecies_**  
>> the code below will install all package dependencies needed to run this project  
>>  
>> ```sh
>>  npm install
>> ```  
>  
  
## 🔑 API Endpoint, Parameters & Port

> **_Port_**
>> The server listens on port **3000**.
>>
>> http://localhost:3000
>>  
>

> **_Parameters_**
>> The API accepts 3 parameters which are;
>> **1️⃣ filename**
>> **2️⃣ width**
>> **3️⃣ height**
>>  
>  

> **_API Endpoint_**
>> The endpoint for the API,
>> /api/images?filename=<filename>&width=<width>&height=<height>
>> 
>>  
>


## 📝 Scripts
> **_Run Server_**
>> To start the server, type the code below in the terminal.
>>
>>```sh
>> npm run server
>>```  
>  
> **_Prettier**
>> To format the code use the code below.
>>
>>```sh
>> npm run prettier
>>```  
>  
> **_Lint_**
>> To check for errors in the code and confirm the style of the code is consistent, type the code below in the terminal.
>>
>>```sh
>> npm run lint
>>```  
>  
> **_Test_**
>> To run a unit test, type the code below in the terminal.
>>
>>```sh
>> npm run test
>>```  
>  
> **_Build Only_**
>> To compile the typescript to javascript for production, type the code below in the terminal.
>>
>>```sh
>> npm run build
>>```  
>  
> **_Build & Run Server_**
>> To compile for production and start the server, type the code below in the terminal.
>>
>>```sh
>> npm run server
>>```  
>  
