# 1.Doctype 
  1. Doctype will tell version  of html we are using 
  2. tell browser to use HTML5 which is latest verison
  3. This is not case sensitive 
      syntax : `<!doctype html>`

  4. without using this browser render page using odl, non-standard ,buggy behaviour
  5. doctype is not tag , it is html declartaion
  6. This is not mandatory, but if we dont use we face bugs in rendering html

# 2. div and span

  1. div is block element , element start with new line and takes full width
  2. span is inline element , starts in same line

# 3. Semantic elements 
  
  1. <Header> -> header conetent will come here
  2. <footer> -> footer
  3. <artcile> -> any product details 
  4. <main> -> page main content
  5. <nav> 
  6. <figure>
  7. <figureCaption>
  8. <section> 
  9. <aside> -> artile aside like related data
  
  -> These elements give menaing to the content inside them
  -> Improve SEO (web crowels do read web page they can easily understand)
  -> Improve accessability, readability
  -> Search engine easy to understand structure of web page

# 4. Async and defer keyword in script tag

  Async 
  ------
  1. async what it will do is it start rendering script parallely when html parsing is happeining, when it get loaded
  2. As soon as script get downloaded it start running script, `pause` html parsing
  3. after script execution completed 
  4. html parsing get `resumed`
  5. html parsing means browser reads html from top - bottom and construct DOM tree

  defer
  -----
  1. Html parsing and script download starts parallely
  2. after script get downloaded it will not execute it immeditely
  3. wait for html pasring to complete
  4. run downloaded script

# 5. HTMLCollection vs NodeList

  HTMLCollection
  --------------
  1. Both are array of objects
  2. Html collections only html elements div, span, p etc , no comments and text nodes
  3. Live collection dom changes collection updates automatically
  4. below will return html collections
     document.getElementsByTagName("div");
     document.getElementsByClassName("item");
     document.forms;
     document.images;
     document.links;

  Nodelist
  ---------

  1. Nodelist will include all comments, text nodes , elements
  2. node list is static , autometically will not update when any change happens
  3. document.querySelectorAll(".item");  // static


# 6. Accessablity
  Meaning website should designed to everyone, including people who disabled like visual disabalities, hearing difficulties etc

  how can we achive them
  ----------------------
  1. Using semantic tags, so screen readers can read them easily
  2. screen readers are softwares used by people who are visually disabled
  3. using alternate name for images <img alt="building" src="building.png"/>
  4. Forms acceablity
     using label tags
     <label for="email">Email</label>
     <input id="email" type="email">
  5. keyboard navigation
     tab, enter , space
  6. ARIA (Accessible Rich Internet Applications)
     use only when needed
     <button aria-label="Close menu"></button>
     <nav aria-label="Main Navigation"></nav>

     1. role
     2. aria-label
     3. aria-labelledby
     4. aria-hidden 
     5. aria-expanded - navigation

  7. Color contrast 

  8. automatically focused elements (Keyboard accessment)
  <button>,<a href="">,<input>,<select>,<textarea>,<details>,<summary>

  <div>,<span>,<p> achived using tabindex=0

  css
  -----
  :focus {
    outline: 2px solid blue;
  }

  order
  -------
  Header → Nav → Main → Footer

# 7. Viewport mettag
  It is used to mobile device , without this websites are looks like zoomed out in mobile

  <meta name="viewport" content="width=device-width initial-scale=1.0">

# 8. Viewport 
  Visbale area of webpage inside browser window, part of webpage user can see currently

# 9. Content security policy (CSP) and XSS (Cross site scripting)

  XSS-> it allows attakers to inject milicious javascript code
  1. which can have access to token / cookies
  2. Use application 
  3. redirect to milicieos sites
  4. unsafe patterns
  element.innerHTML = userInput; // ❌ vulnerable
  document.write(location.search); // ❌ vulnerable

  CSP -> 
  1. security headers -> which comes from server in response headers
  2. it can prevent xss 
  3. if we don't have server for our website we can use it in meta tags 
  4. csp blocks milicious code
  5. blocks inline js
  6. CSP allows only trusted domains
  7. CSP can't fully replace secure coding but greatly reduces XSS impact.







    








