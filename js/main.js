"use strict";

const elResult = document.querySelector(".search__result")
const elList = document.querySelector(".movie__list")
const elli = document.querySelector(".bokmarked")



elResult.textContent = films.length


let filmsRender = function(arr, htmlElement){
arr.forEach((movie)=>{

    //create
    const newLi = document.createElement("li")
    const newImg = document.createElement("img")
    const newDiv = document.createElement("div")
    const newHeading = document.createElement("h2")
    const newP = document.createElement("p")
    const newA = document.createElement("a")
    const  bookmark = document.createElement("button")



    //setatribute
    newLi.setAttribute("class", "card mb-3")
    newLi.style.width = "18rem";
    newImg.classList.add("card-img-top")
    newImg.setAttribute("src", movie.poster)
    newDiv.classList.add("card-body")
    newHeading.classList.add("card-title")
    newP.classList.add("card-text")
    newA.setAttribute("class", "btn btn-info ")
    bookmark.setAttribute("class", "bookmark btn btn-danger ms-3")
    bookmark.dataset.bookmarkId = movie.id;



    newHeading.textContent = movie.title
    newP.textContent = movie.overview
    newA.textContent = "watch trailer"
    bookmark.textContent = "bookmark"


    //append
    htmlElement.appendChild(newLi)
    newLi.appendChild(newImg)
    newLi.appendChild(newDiv)
    newDiv.appendChild(newHeading)
    newDiv.appendChild(newP)
    newDiv.appendChild(newA)
    newDiv.appendChild(bookmark)
})
}

const bookmarkedMovie = []

    elList.addEventListener("click", function(evt){
        evt.preventDefault
        const bokmarkedId = evt.target.dataset.bookmarkId

        if(evt.target.matches(".bookmark")){
            bookmarkedMovie.push(films.find(movie => movie.id === bokmarkedId).title)
        }
    })


console.log(bookmarkedMovie);


bookmarkedMovie.forEach((movie)=>{
    const p = document.createElement("li")

    p.textContent = movie

    elli.appendChild(p)
})




filmsRender(films, elList)