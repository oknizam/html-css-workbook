1. web workers (nodejs worker threds)
 
 const worker = new Worker("./worker.js");

 worker.postMessage(10);

 worker.onmessage = (e)=>{
  console.log(e)
 }


 <!-- worker.js -->

 onmessage =(e)=>{
console.log(e.data)
 }

 2. Lazy execution 

  1. generator functions
  2. React lazy
  3. image lazy
  4. component lazy loading


3. API layer seperation 

  Keeping API calls and BE service call seperate so that we can re use the same

4. JWT Adavantages

  1. Stateless -> server soes not need to store seesion data

  2. performence -> token is verified locally , no DB hit
  
  3. portable and self carried -> toke user info carry

  4. good for microservices -> shared across multiple services

  5. cross platform also -> works with mobile, web and BE

5. JWT disadvantages

  1. once token is issued , active until it expires

    solution:  short expiry + refresh tokens

  2. security risk

    1. localstorage  XSS

    2. cookies CSRF (Cross site request forgery)

      solution :  strict for same site 

  3. No built in encryption

    JWT is encoded, not encrypted base64 -> A-Z, a-z, 0-9 and + and / -> standard printable ASCII


6. XSS (Cross site scripting)

  1. Runs on browser 
  2. Stole token
  3. hit user APIS

7. CSRF (Cross site request forgery)

  <img src="https://test.api.com/user">
   
   1. browser autometically attach cookies in request headers

   2. prevent SameSite=Strict

   3. Validate origin/referrer

8. JWT

  1. user login (username and password)
  2. server validates and generate JWT token
  3. jwt valid for 1 Hour
  4. refresh token 7 days
  5. set cokkeis but withh sameSite= strict; httpOnly; secure;
  6. when we recive 401 unauthorized
  7. interceptor call refresh api with refresh token


9. how do you review code

  1. Readability
  2. Performance
  3. Edge cases
  4. Consistency

10. Improve UI Performnce

  1. Re - rendering
  2. Large components
  3. Slow API calls
  4. code splitting
  5. suspense
  6. lazy loading
  7. react-window (virtulization)
  8. Avoide calling redudant apis
  9. React Query caching server data
  10. Avoide global state for everything
  11. split state logically
  12. compress images
  13. use standard image format webP
  14. WebP -> image format developed by google provides better compression and quality
  15. use web workers -> background processing


11. React query

  1. Used for fetching, caching , synchronizing and updating server state in react app
  2. refetching
  3. sync with server

  4. Queries used for get (GET)

  5. mutation used for update (POST, PUT and DELETE)

  6. stores data gloablly

  7. stale and fresh

    1. fresh -> no refresh data
    2. refetch in background staleTime:5000


12. Security 

  1. prevent client side attacks and avoide exposing sensitive information
  2. Avoide storing sensitive data in browser (HTTP-only, secure and sameSite:strict)
  3. avoide dangerous html
  4. CSRF (storing data in cookies)
  5. CSP -> always restrict external scripts

13. Microfrontend

  1. Large apllication will be divided into multiple applications 
  2. Each application deployed sperately and maintaned by sepearate team
  3. communicate via events
  4. connect via webpacks
  5. iframe


  6. disadvantages

    1. can't share gloabl state
    2. Increased complexity


14. Largest contentful paint

  1. meeasure how long for largest visible element (image , banner ,header)
  2. example big hero image 
  3. causes
    1. larger images
    2. slow server response
    3. render blocking css /js

  4. Improvements
    1. image compression webP formats
    2. lazy loading
    3. use cdn

15. FID (First input delay)

  1. time between user interaction (click, type etc) and browser response
  2. causes
      1. long tasks
      2. large functionality

  3. Improve
    1. split larger functions into smaller ones
    2. lazy loads
    3. web workers
    4. Bundle size reduze

      1. lazy load components
      2. tree shaking
      3. avoide larger size packages
      4. optimize assets loading="lazy"

16. CLS (Cummulative Layout shift)

    1. How much UI shifts unexpectedly while loding
    2. while loading button shifts in ui
    3. images without dimensions


17. LCP -> loading speed
    FCD -> user interaction speed
    CLS -> visual stability

17. In memory chache

  1. React query 
  2. local and session storage
  3. cdn


18. Memory management in JS
  1. garbage collection 
  2. mark and sweep
    
    1. Algorithem used to freeup memory 
    2. it will read from top to bottom
    3. any variables , closures which are reachable are in use mark it as "in use"
    4. if it finds those variables are not used like assigned null value free up space for those

  3. Memory leaks

    1. gloabal variable which are unreachable
    2. listeners 
    3. timeout 
    4. DOM refrences


19. agile vs scrum vs kanban

    1. agile methodology

      1. iterative manner
      2. customer collabration
      3. developemnt
      4. delivery frequently

    2. scrum 

      1. time (2-4 weeks)
      2. product owner
      3. scrum master
      4. developers

      5. backlogs
      6. sprint plan
      7. daily standup
      8. sprint review
      9. retrospective -> what went well, what not went well , what can be improved

    3. Kanban

      1. Ticket has status (Todo, in progress, Done)
      2. no time
      3. any time new requrement comes

    4. waterfall (phase)

      1. testing will be done late
      2. requirement -> plane -> design -> developement -> testing 

20. logging systems 

  1. Datadog
  2. AWSCloud watch
  3. statsig for logging user interactions


21. eslint rules

  1. prevent unused variables
  2. no console
  3. === equal to instead ==
  4. no var allow let and const
  5. no duplicate imports
  6. avoide using any

  

22. Angular vs react

  1. Angular -> framework (routing, http, rxjs, forms)
    1. MVC architecture
    2. typescript default
    3. two way binding
    4. heavier bundle

  2. React -> library

    1. component based architecture
    2. js / ts
    3. one way data binding
    4. virtual dom light weight


23. SSR in react

  1. Nextjs
    1. getServersideProps -> runs on server -> send html to client

  2. Advance using node + react
    1. import ReactDOMServer from "react-dom/server";
       const html = ReactDOMServer.renderToString(<App />);

  3. Hydration

    1. server send just HTML
    2. react attach listners to static html called Hydration


24. CSRF 

  1. res.cookie("token", token, {
  httpOnly: true,
  secure: true,
  sameSite: "strict"
});

 2. check origin at server level middle ware

  const allowedOrigins = ["https://your-frontend.com"];

  app.use((req, res, next) => {
    const origin = req.headers.origin;

    if (!origin || allowedOrigins.includes(origin)) {
      return next();
    }

    return res.status(403).json({ message: "Forbidden - Invalid Origin" });
  });

  
25. CSP (Content security policy)

  1. HTTP headers (recommanded) or meta tag
    Content-Security-Policy: 
    default-src 'self';
    script-src 'self';
    img-src 'self';
    style-src 'self';

  2. set at server 

    helmet package 