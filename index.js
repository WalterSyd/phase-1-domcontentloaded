// Your code goes here
/*The DOMContentLoaded event fires when your page's DOM is fully parsed from the underlying html
The load event fires when a resource and all its dependent resources (including CSS and JavaScript) have finished loading
In this lesson, we'll be focusing on DOMContentLoaded.*/


document.addEventListener("DOMContentLoaded", () => {
//select element("p") to modify text displayed
const p = document.querySelector("p");
//modify the text by attaching the text content to the element(p)
p.textContent = "This is really cool!"
    }
  );
