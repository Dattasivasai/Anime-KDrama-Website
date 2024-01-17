const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow,i)=>{
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter =0;
    arrow.addEventListener("click",()=>{
        clickCounter++;
        if(itemNumber-(6+clickCounter)>=0){
        
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value-225}px)`
        }
        else{
            movieLists[i].style.transform = "translateX(0)"
            clickCounter =0;
        }
    })
})
var b = document.getElementById("profile-click")
b.addEventListener("click",()=>{
    document.getElementById("profile").classList.toggle("div2")
})
