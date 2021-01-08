//1) Select the section with an id of container without using querySelector.
document.getElementById("container");

//2) Select the section with an id of container using querySelector.
document.querySelector("#container");

//3) Select all of the list items with a class of "second".
document.getElementsByClassName("second");

//4) Select a list item with a class of third, but only the list item inside of the ol tag.
document.getElementsByClassName("third")[1];

//5) Give the section with an id of container the text "Hello!".
document.getElementById("container").innerHTML = "<p>Hello!</p>";

//6) Add the class main to the div with a class of footer.
document.getElementsByClassName("footer")[0].innerHTML =
  "<div class='main'></div>";

// 7) Remove the class main on the div with a class of footer.
document.getElementsByClassName("footer")[0].innerHTML = "";

// 8) Create a new li element.
let el = document.createElement("li");

// 9) Give the li the text "four".
el.innerText = "four";

// 10) Append the li to the ul element.
document.getElementsByTagName("ul")[0].appendChild(el);

// 12) Loop over all of the lis inside the ol tag and give them a background color of "green".
let allEl = document.querySelector("ol").getElementsByTagName("li");
for (let i = 0; i < allEl.length; i++) {
  allEl[i].style = "background-color:green";
}

// 13) Remove the div with a class of footer.
document.body.lastElementChild.remove;
