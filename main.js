/* [x] Use JavaScript to 
obtain a reference to the first section 
with the class of article_header 
and change its text with the textContent property 
to "Welcome to the {insert your name here} blog" */

let articleHeader = document.querySelector(".article__header");
articleHeader.textContent = "Welcome to the DOM Blog";

/* [x] Use JavaScript to obtain a reference to all article__header elements
and change their classList property value to article__header important. */

let allArticleHeaders = document.querySelectorAll(".article__header");
for (let i = 0; i < allArticleHeaders.length; i++) {
    allArticleHeaders[i].classList.add("important");
}

/* [x] Obtain a reference the element with a class of dashed and remove it. */
let dashed = document.querySelectorAll(".dashed");
for (let i = 0; i < allArticleHeaders.length; i++) {
    dashed[i].classList.remove("dashed");
}



/* [x] Obtain a reference the element with a class of article_footer 
and add the class of goldenrod it. */
let articleFooter = document.querySelector(".article__footer");
articleFooter.classList.add("goldenrod");
