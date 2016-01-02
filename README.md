# Timeline

A beautiful life tracker to see where you've been and when you've been there.

---

### Tech Specs

* **Technologies used:**
  - Built with node and express
  - Databasing with MongoDb & Mongoose
  - Dependencies:
    - bcrypt - Secures and authenticates users
    - body-parser - Middleware that parses JSON object
    - express-JWT and jsonwebtoken - Tokens 
    - morgan - Logging tool
    - path - File sourcing
    - socket.io - Began to implement socket feature so that maps would update with use locations in realtime
  - [Google Maps API](https://developers.google.com/maps/documentation/javascript/)
  
* **Models:**
  - User: 
    - Full CRUD
    - Authentication required to access moments
  - Moment:
    - Create and Read functionality
      - We felt that update could allow a user to skew his data by updating locations and times that didn't really happen
    - Mixed data type to "future proof" application 
      - Allows for different types of moments: location data, tweets, instagram posts, etc.
      
* **Deployed to Digital Ocean as [timeline.cool](http://timeline.cool/)**
  - Note: Server is not always running 
  
---

### User Stories

In our app a user is able to:
  - login or create an account
  
(once logged in):
  - See a Google Map with all the places she's been marked
  - Be able to click each location to see more detailed view, such as time, date, and address
  - Interact with a horizontal representation of dates that, when clicked, will highlight the appropriate pointer on the map
  
---

### Our Team and Strategy:
- Cort Harlow - [GitHub](https://github.com/cortharlow)

- Marco Pariente-Cohen - [GitHub](https://github.com/Markypc3)

- Nicole Peters - [GitHub](https://github.com/napeters)

  
  | Team Member | Responsibilities |
  |-------------|------------------|
  | Cort | Wireframes, front end design, HTML/CSS, user and moment model design, database design, securing user passwords, backend routing |
  | Marco | Socket functionality, deployment to Digital Ocean |
  | Nicole | VanillaJS DOM manipulation, Google Maps API access and implementation, displaying data based on database, login/signup functionality |
  
---

### Installation Instructions:
* **None** 
   - We needed to install our dependencies

---

### Styling
  - Bright, fun colors (including primary, secondary, and tertiary) attract users
  - Shadows add additional depth and affordancy to buttons
  - Responsive design ensures the ability to add location on mobile
  
The aesthetic of timeline attempts to display as much information as possible in as little space as possible. 
This meant making the Map the main feature of each page; when a user logs in, the first thing she will see is a map of all her locations. 
Below this is a sidescrolling section with dates. 
Within each date is a red circle, signifying the user recorded a location on that date, known as a Moment.
Hovering over a red circle will highlight the related pointer on the Map as well as display additional information about that Moment.

### Screenshots
![Main](http://i.imgur.com/eC0TVoM.png?1)

---

#### Copyright notice:

The media and information used in this app is for educational purposes.

Project created with ♥ at General Assembly's Web Development Immersive.

