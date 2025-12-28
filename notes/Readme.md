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


