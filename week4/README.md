### Essential CSS concepts
    # Box Model
        Margin & Padding
        all sides
        tb lr
        t lr b
        t r b l

    ->when max width and max height is used the width and height that we mentioned in the selector will incresae up to the point of max widtha and height
    ->to make the border as a circle make the width and height as same values and add make the border-radius as 50%

### Text Styles
    fonts 
    colors
        -> rgb color format
        ->hexadecimal format
        ->hsl format
    size
        ->default size 32px
        ->use font-size property
        ->use font-family property
            -web safe fonts=support all kinds
            -google fonts

->Use class property for adding different properties for the same tags ,the class property allows to differentiate between the same tags
    eg:<h1 class="heading1"></h1>, <h1 class="heading2"></h1>
->for the common properties use the below example
    eg:<h1 class="heading1 heading"></h1>,<h1 class="heading2 heading"></h1> 

### Image Styles
    ->to get the img to right and left use float
    ->to get in the center use display:"block";margin:"auto";

### Pseudo Classes
    ->Hover-when curser is over the data the properties that is used in the hover will be activated
    ->nth-child can be used to color the child data like lists 
        eg:nth-child(number)-for the specific number
           th-child(odd)-for the odd numbered data
           th-child(even)-for the even numbered data

### Form
    ->It contains default validation in HTML

### Flex properties
    ->Flex Container
    ->Flex Direction
    ->justify content-horizontal
    ->align items-vertical
    ->make the display as flex in the properties
    ->also can add properties like justify-content,gap

### Font Size Units
    ->em and rem are the recomended units for the font size in css
        -em means font size of parent element
        -rem means font size of root element
            -it deped upon the size of the root i.e. <html>
    ->Pixel changes depending upon the resloution of the display devices

### View Port Units
    ->It always depends upon the width and height of the device
    ->units ar vw-viewport width and vh-viewport height

->For responsiveness of the text use clamp() function and also can use flex-wrap property
->For the displaying in different devics or to be displayed differnetly in differ widths use @media property

### Grid properties
    ->make the display property as grid
    ->and assign the grid-template-columns and grid-tempalte-rows
    ->The example is presint in grid file

### Make the UI user interactive
    ->Imperative programming
        -It is previous of method of making the UI interactive and we need to specify each and every instruction with the  javaScript to make it interactive and
        it became the major drawback for the developers
    ->Decelarative Programming
        ->It is the modern method of makking the UI interactive with the help of reactjs and it makes easy for the developer to make it interactuive
    ->Reactjs makes the copy of the actual DOM from the browser to in the memory called as virtual DOM and makes the changes wihich we applied and after applying changes to the virtual DOM and it changes the DOM in the browser

->To create react run this command in the command line  "npm create vite@latest"