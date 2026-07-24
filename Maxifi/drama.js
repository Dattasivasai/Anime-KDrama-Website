```javascript
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, index) => {
    const movieList = movieLists[index];

    // Prevent an error if no matching movie list exists
    if (!movieList) {
        return;
    }

    const movieItems = movieList.querySelectorAll(".movie-list-item");
    const itemWidth = 225;

    let currentPosition = 0;

    arrow.addEventListener("click", () => {
        const visibleItems = Math.max(
            1,
            Math.floor(window.innerWidth / itemWidth)
        );

        const maximumPosition = Math.max(
            0,
            movieItems.length - visibleItems
        );

        if (currentPosition < maximumPosition) {
            currentPosition++;
        } else {
            currentPosition = 0;
        }

        movieList.style.transform =
            `translateX(${-itemWidth * currentPosition}px)`;
    });
});


const profileButton = document.getElementById("profile-click");
const profileMenu = document.getElementById("profile");

if (profileButton && profileMenu) {
    profileButton.addEventListener("click", () => {
        profileMenu.classList.toggle("div2");
    });
}


// Prevent empty Watch links from jumping to the top
const watchLinks = document.querySelectorAll('a.btn[href="#"]');

watchLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        alert(
            "A valid trailer or streaming link has not been added yet."
        );
    });
});
```
