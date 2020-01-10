## REST HTTPS API with Spring Boot and Angular JS.

### Technology stack:


* Spring Boot Web
* Spring Boot Data Rest
* Spring Data JPA
* Spring Boot DevTools
* Maven
* MySQL Relation Database
* Angular JS, HTML, CSS

### To run this application use:

```bash
mvn spring-boot:run
  ```

### REST API :

* POST request to `/messages` with a "object" object as JSON creates a new "object";
* GET request to `/messages` returns a list of "objects";
* GET request to `/messages/{id}` returns the "object";
* PUT request to `/messages/{id}{message}` with a "object" object as JSON updates the "object"
* DELETE request to `/messages/{id}` deletes the "object";
* DELETE request to `/api/v1/objects/` deletes all the "objects".

### The view in the Postman:
https://localhost:8080

 ![alt tag](https://i.imgur.com/wZ2ReJA.png) --> GetAll
 ![alt tag](https://i.imgur.com/EI92hHa.png) --> Put
 ![alt tag](https://i.imgur.com/V7gFM5t.png) --> Post
 ![alt tag](https://i.imgur.com/9CM8tJz.png) --> GetByid
 ![alt tag](https://i.imgur.com/hmyVrzh.png) --> Delete 

### Html 
https://localhost:8080/messages.html






  
