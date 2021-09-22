 document.body.onload = createSection;

function createSection(){
    let section = document.createElement("section");
    
    let figure = document.createElement("figure");
    let image = document.createElement("img");
    image.src = "../bilder/äpple.jpg";

    let caption = document.createElement("figcaption");
    let figText = document.createTextNode("Äpple");

    let article = document.createElement("article");
    let text = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam laboriosam ratione pariatur labore optio quod. Natus temporibus, beatae nulla dignissimos libero officia nisi quos voluptatem omnis nobis nostrum quo?");
   
    section.appendChild(figure); 
    figure.appendChild(image);

    section.appendChild(article);
    article.appendChild(text);

    section.appendChild(caption);
    caption.appendChild(figText);

    document.getElementById("article1").appendChild(section);
}
for(let i = 0; i < 3; i++) createSection();