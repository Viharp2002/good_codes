//6) Sometimes our page is so lengthy and that time script is running without any content on page. So we simply use,
//7) $(document).ready(function() { //There is a shortcut of document.ready function, just write: $(function() {} )
//Your jQuery code here 
//})

$(document).ready(function() {

    //1) console.loeg($); //$ is the shortcut of jQuery
    //2) Syntax of jQuery: $('selector').action()
    //3) $('p').click(); //Click on p (this will be clicked automatically when we execute this file)

    //4)
    // $('p').click(function() {
    //         console.log("Cliked on p", this);
    //         // $('p').hide(); //This will hide the element
    //         // $(this).hide(); //This will hide one perticuler clicked element
    //         // $("#id").hide(); //This will hide the element of given id
    //         // $(".class").hide(); //This will hide the element of given class
    // }) //do when we click on p (this will be executed when we clicked)

    //8)There are 3 main types of selectors in jQuery
    //(i)element selector (Ex: 3rd line)
    //(ii)id selector
    //(iii)class selector

    //9)Example of ID selector
    //$('#vihar').click()

    //10)Example of Class selector
    //$('.saum').click(); //If we execute this line and (4th)function then what happens that this line's code will execute and aslo that function's code will aslo execute because that function is executing whenever 'p' tag is clicked

    //11)Other Selectors
    //$('*').click() //Clicks on all elements
    //$('p.saum').click(); //clicks on p whose class is 'saum'
    //$('p:first').click(); //clicks on first p element

    //12)Events in jQuery
    // Mouse Events = click,dblclick,mouseenter,mouseleave,...
    // Keyboard Events = keyPress,keydown,keyup,...
    // form Events = submit,change,focus,blur,input,...
    // document/window Events = load,resize,scroll,unload,...

    //Ex.
    // $('p').dblclick(function() {
    //     console.log("Double Cliked on p", this);
    //     // $('p').hide(); //This will hide the element
    //     // $(this).hide(); //This will hide one perticuler clicked element
    //     // $("#id").hide(); //This will hide the element of given id
    //     // $(".class").hide(); //This will hide the element of given class
    // })

    // $('p').mouseup(function() {
    //     console.log("MouseUp on p", this); //Mouse thi click kariye e che
    // $('p').hide(); //This will hide the element
    // $(this).hide(); //This will hide one perticuler clicked element
    // $("#id").hide(); //This will hide the element of given id
    // $(".class").hide(); //This will hide the element of given class
    //})

    // $('p').hover(function() {
    //     console.log("MouseHover on p", this);
    //     // $('p').hide(); //This will hide the element
    //     // $(this).hide(); //This will hide one perticuler clicked element
    //     // $("#id").hide(); //This will hide the element of given id
    //     // $(".class").hide(); //This will hide the element of given class
    // })

    // Note: We can also empty the value of any tag
    // $('#wiki').empty();
    // Note: We can aslo remove whole element from dom
    // $('#wiki').remove();

    //13)Demoing the 'on' method: This method can handle multiple events
    // $('p').on({
    //     click: function() {
    //         console.log("Click: ", this);
    //     },
    //     mouseleave: function() {
    //         console.log("MouseLeave: ", this);
    //     }
    // })


    //14)$("#wiki").hide(2000, function() { //This function will execute when div element will be hidden
    //     console.log("Hide");
    // }); //It will hide the div element after 2sec

    //15)Another method is 'show'
    // $("#wiki").show(2000, function() {
    //     console.log("Show");
    // });

    //16)Good Example of button toggling:
    // $("#btn").click(function() {
    //     $("#wiki").toggle(2000); //Toggle means hide and show the content
    // })

    //Another Examples which help in animation
    //(i)fadeIn() //When content is hide,we can use
    //(ii)fadeOut() //When content is displayed,we can use for hide 
    //(iii)fadeToggle() //Similar
    //(iv)fadeTo()

    // $("#btn").click(function() {
    //     $("#wiki").fadeOut(2000);
    // })

    //17)Sliders:slideUp(),slideDown(),slideToggle()
    // $("#wiki").slideToggle(1000);
    /*Try it yourself*/
    // $("#btn").click(function() {
    //     $("#wiki").slideToggle(1000);
    // })

    //We can also give second argument as callback function
    // $("#wiki").slideToggle(1000, function() {
    //     console.log("Done");
    // });

    //18)Animate Function in jQuery
    //$("#wiki").animate({ opacity: 0.1 }, 2000);

    // Many Functions can be added
    // $("#wiki").animate({
    //     opacity: 0.2,
    //     height: '150px',
    //     width: '350px'
    // }, 'slow');

    //Execution one by one(queue)
    // $("#wiki").animate({ opacity: 0.3 }, 3000);
    // $("#wiki").animate({ opacity: 1 }, 2000);
    // $("#wiki").animate({ width: '350px' }, 2000);

    //For stop the execution of animation(put it in console)
    // $("#wiki").stop();

    //19)Set the innerHtml of any Element
    //$("#wiki").html("Hello World!"); //or:$("#wiki").text("Hello World!");
    // $("body").html("Vihar loves Vihar");

    //20)Working with Form
    // $('#text').val(); //Gives the value of text input(in consol)
    // $('#textarea').val("Hii"); //We can set the value of input field
    //Note: If we are working with form elements and if we want to change it's val then write .val() function because .html() or .text() doesn't work 

    //21)We can also add class
    // $("#wiki").addClass('myClass');

    //Remove Class
    // setTimeout(() => {
    //     $("#wiki").removeClass('myClass');
    // }, 3000);

    //ToggleClass: It will add and remove
    // setInterval(() => {
    //     $("#wiki").toggleClass('myClass');
    // }, 500)

    //22)We can add CSS
    // $("#wiki").css('background-color', 'red');
    // //We can also determine which is the Backgroun-color of div element 
    // $("#wiki").css('background-color'); //(in console)

    //23)We can play with AJAx in jQuery(in console)
    // $.get('https://api.github.com/users',function(data,status){
    //    alert(data);   
    // })
    //The above code explains the get request..we simply get the data from api

    // $.post('https://api.github.com/users', { login: "Vihar" },
    //     function(data, status) {
    //         alert(status);
    //     })
    //The above code explains the post request..we simply post(insert) the data to api
    //(this api doesn't alllow post request so it will throw error)

    //24)Some extra methods

    //(i)off method
    //We can set off methods for specific events to be off from point number 13)
    //(ii)Append and prepend method
    //We can set append method to add some text or any other tag 'in' specific tag - at last
    //We can set prepend method to add some text or any other tag 'in' specific tag - at first
    //(iii)after and before
    //Similar as above method
    //We can set after method to add some text or any other tag 'after' specific tag - at last
    //We can set before method to add some text or any other tag 'before' specific tag - at first
    //(iv)AppendTo and PrependTo 
    //similar as Append and Prepend but slight syntax change
    //Benefitial when working with clone method
    //(v)clone method
    //To copy inner tags or text from one element to another element
    //(vi)ReplaceWith and ReplaceWithAll
    //Replaces one to another element
    //(vii)Wrap() and UnWrap()
    //It wraps one tag into another tag
    //Ex. <h1>
           //<span>Hello</span>
        //</h1>
        //So we wrap span tag into h1 tag
        //Reverse process is called unwrap
    //(viii)wrapAll and wrapInner methods
    //if we have 2 span tags and we want to wrap them in one single tag then use wrapAll
    //If we want to,<span><b>Hello</b></span> (tage inside tag) then we use wrapInner
    //(xi)Width and Height methods
       //(1)Width():gives the width of our text in one line
       //(2)innerWidth():gives the innerWidth if text is inside a div tag and it has a border
       //(3)outerWidth():gives the whole width of that tag
       //(4)outerWidth(true):gives the whole width if we give margin to that tag...it calculates margin also
       //It also same for Height
    //(x)position and offset
    //it gives its position from its parent and offset gives the exact position from its parent
    //(ix)scrollTop and scrollLeft
    //it gives window vertical value and window horizontal value respectively
    //(xi)hasClass()
    //If any tag has class name like example "vihar" and we want to find weather it there or not
    //(xii)Method Chaining
    //Ex. $('#wiki').css('color','red').slideUp().slideDown();
    //(xiii)Others Methods: first(),last(),eq(),filter(),not(),slice()
    //(xo)has() method finds some specific tags inside any tag
        //is() method finds any tag which contains (ex. "vihar") class given by us
    //(xoo)each() Method :Iterate as for,while loop on elements
    //(xv)pageX and pageY: It gives cursor position from x-axis and y-axis
    //(xvi)Event Which(),Event Target(),Event preventDefault()
    //(xvii)Event.stopPropogation() : If we click on any tag inside div element then first event will be fired of that tag and after that the 2nd event will be of div element...so we can stop event of div element
})