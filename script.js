document.getElementById("themeBtn").addEventListener("click", function() {
   let bodyElement = document.body;
   let bioCard = document.querySelector(".bio-card");
   let headings = document.querySelectorAll(".bio-card h1, .bio-card h2, .bio-card p, .bio-card li");
   if (bodyElement.style.backgroundColor === "rgb(240, 240, 240)" || bodyElement.classList.contains("light-theme")) {
    bodyElement.style.backgroundColor = "#242d20";
       bioCard.style.backgroundColor = "#3a4a2f";
       headings.forEach(text => text.style.color = "#ffffff"); 
       this.style.backgroundColor = "#ffffff";
       this.style.color = "#242d20";
       bodyElement.classList.remove("light-theme");
   } else {
       bodyElement.style.backgroundColor = "rgb(240, 240, 240)";
       bioCard.style.backgroundColor = "#ffffff";
       headings.forEach(text => text.style.color = "#242d20");
       this.style.backgroundColor = "#242d20";
       this.style.color = "#ffffff";
       bodyElement.classList.add("light-theme");
   }
});
