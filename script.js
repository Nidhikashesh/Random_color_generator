let form=document.querySelector("form");
let inputs=document.querySelectorAll("input");
let main=document.querySelector("#main");

form.addEventListener("submit",function(info){
    info.preventDefault();

    let h1=document.querySelector("h1");
    h1.textContent=`Welcome ${inputs[0].value}!`;

    // create profile card on click "submit" btn
    let card=document.createElement("div");
    card.classList.add("card");

    let profile=document.createElement("div")
    profile.classList.add("profile");

    let img=document.createElement("img");
    img.setAttribute('src',inputs[2].value);

    let h3=document.createElement("h3");
    h3.textContent=inputs[0].value;
    let h5=document.createElement("h5");
    h5.textContent=inputs[1].value;
    let p=document.createElement("p");
    p.textContent=inputs[3].value;

    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);

    main.appendChild(card);
    // To Display null after submit
    inputs.forEach(function(inp){
        if(inp.type !=="submit"){
            inp.value="";
        }
    });
});
