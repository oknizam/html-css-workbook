# 1. Responsive Design
  Responsive design meaing layout get fluidlly adjust on screen , we can achive this using flexbox, grid, percentage, vh, vw, em, rm and media queries

  one layout automatically resize for all screen

# 2. Adaptive design
  These are static layouts , for diffrent screen size diffrent layouts will be created based on screen size

  muyltiple layouts

  1. 320px -> mobile
  2. 768px -> tablex
  3. 1024 -> desktop

  handle using device detection

# 3. layout 
  Layout means arragemnt of elements text, image, buttons forms etc


# 4. layout building
  1. css model 
  content + padding + border + margin
  2. postioning
    absolute, relative, static, sticky, fixed

# 5. Absolute and relative units
  1. Absolute units -> pixels px

  2. relative untis -> % , vh,vw, em, rm

# 6. Selectors in css 

  1. id selctor
  2. tag selector
  3. class selector
  4. * universe selector
  5. attribute selectors 
      input[type="text"] { border: 1px solid; }
  6. Pseudo class selectors
      p:hover, p:first-child, p:focus
  7. Pseudo element selctors
    p::before, p::after , p::first-letter, p::selection

 # 7. Specificity orders css

  1. inline css
  2. id
  3. class, attribute, psuedoclasses
  4. element
  5. universal selctor

 # 8. Pseudo element
  1. ::before
  2. ::after
  3. ::selction
  4. ::placeholder
  5. ::first-letter
  6. ::first-line

# 9. Flexbox (flex) 
  1. One dimensional
  2. used for responsive design
  3. Direction row and cloumn
  4. properties
    1. display:flex
    2. flex-direction: row, column, row-reverse, column-reverse
    3. justify-content: affect on main axis row/column
    4. alignItems: cross axis -> center, flex-start, flex-end
    5. flex-grow: adjust all elements in layot
    6. flex-shrink: size small of flexbox , elements will shrink
    7. flex-wrap: element will come next line
    8. gap : equally give space elemnts in flexbox
    10. use menu, centering elements,
    11. not for full page layouts

# 10. Grid
  1. Two dimensional (row and cloumn both)
  2. perfect for Full page layouts
  3. used for responsive design
  4. layout adjust fluidly for every screen
  5. propoties 
    1. display: grid
    2. grid-template-columns: 200px 1fr 200px; // 3 columns 
    3. grid-template-rows: auto 300px auto; // 3rows
    4. gap : equally give space elemnts in grid


# 11. rem vs em

  1. rem -> root level fontsize (html) if don't set explicitly, browser set by default 
  2. em -> parent font-size if no root


  example: html{ 
    font-size: 16px;
  }

  .p{
    font-size: 2rem means 32px
  }


  .parent-em{
     font-size: 20px;
  }

  .child{
    font-size: 2em;  -> 1rem -> 40 px 
  }

# 12. Position

  1. Static -> defualt postion , normal flow of document ,left,right,top,bottom will not work
  2. relative -> element will not be removed from its normal flow , we can move element here
  3. absolute -> Element will be removed from normal flow, we can move element here
  4. fixed ->  removed from normal flow, postioned to viewport
  5. sticky -> acts as relative , when we scroll then fixed

# 13. Z-index 
  used to stack one element over other
  z-inde: 2 > z-index : 1
  work with absolute, relative ,sticky, and fixed






