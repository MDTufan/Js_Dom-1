// let h2 = document.getElementsByTagName("h2");
// console.log(h2);

// for(const heading of h2){
//     console.log(heading);
// }


// let p = document.getElementsByTagName("p");


// for(const para of p){
//     console.log(para.innerHTML = "This is fast para");
// }


const Div1 = document.getElementsByClassName("Div1");
// console.log(Div);
for(const blog of Div1){
    blog.style.border = "2px solid green";
    blog.style.margin = "30px";
    blog.style.padding = "30px";
    blog.style.backgroundColor = "beige";
};


const section = document.getElementById("section");
section.style.padding = "20px";
section.style.margin = "20px";

const btn = document.querySelectorAll("button");
// console.log(btn);
for(const Btn of btn){
    // Btn.style.backgroundColor = "blue";
    // Btn.style.padding = "15px";

    Btn.classList.add("mybtn");
}

let head = document.getElementById("head");
// console.log(head);

head.style.backgroundColor="green";
head.style.padding="20px";


function Hide(){
  head.style.display = "none";
}
function Show(){
  head.style.display = "block";
}






let section1 = document.getElementById("section1");
  section1.classList.add("section1");
  let img =document.getElementById("img");
//   console.log(img);
  function Picture1(){
    img.src="img/2.jpg";
  }
  function Picture2(){
    img.src="img/3.jpg";
  }


//   createElement


// let Div5 = document.getElementById("Div5");
// let heading1 = document.createElement("h5");
// let text = document.createTextNode("This is heading 5");
// heading1.appendChild(text);
// Div5.appendChild(heading1);
