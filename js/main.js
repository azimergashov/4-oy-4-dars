"use strict";

const elResult = document.querySelector(".search__result")
const elList = document.querySelector(".movie__list")
const elBookmark = document.querySelector(".bokmarked")



    const localstorage = JSON.parse(window.localStorage.getItem("bookmark"))
    const bokmarkBox = localstorage || []



    const renderBookmarkBox = function(arr, htmlElement){
        arr.forEach((bookmark) => {
            //CREAT ELEMENT:
            const bookmarkLi = document.createElement("li")
            const bookmarkDeleteBtn = document.createElement("button")

            //SETATRIBUTE:
            bookmarkLi.textContent = bookmark.title
            bookmarkLi.setAttribute("class", "bookmark-li mt-3 alert alert-secondary")
            bookmarkDeleteBtn.setAttribute("class", "bookmark-delete-btn btn btn-danger ms-4")
            bookmarkDeleteBtn.textContent = "delete"


            //DATASET:
            bookmarkLi.dataset.bookmarkLiId = bookmark.id
            bookmarkDeleteBtn.dataset.bookmarkDeleteBtnId = bookmark.id

            //APPENDCHILD:
            htmlElement.appendChild(bookmarkLi)
            bookmarkLi.appendChild(bookmarkDeleteBtn)
        })
    }

    renderBookmarkBox(bokmarkBox, elBookmark)

    elList.addEventListener("click", function (evt) {

        if(evt.target.matches(".bookmark")){
         const elbookmarkId = evt.target.dataset.bookmarkId
         const foundbookmarkId = films.find((movie) => movie.id === elbookmarkId)

         if(!bokmarkBox.includes(foundbookmarkId)){
             bokmarkBox.push(foundbookmarkId)
             window.localStorage.setItem("bookmark", JSON.stringify(bokmarkBox))
         }


         window.localStorage.setItem("bookmark", JSON.stringify(bokmarkBox))
         elBookmark.innerHTML = null

         renderBookmarkBox(bokmarkBox, elBookmark)

         console.log(bokmarkBox);
        }

     })


     elBookmark.addEventListener("click", function(evt){
        if(evt.target.matches(".bookmark-delete-btn")){
            const elDleteBookmarkId = evt.target.dataset.bookmarkDeleteBtnId
            const foundDeleteBookmarkId = bokmarkBox.find((bookm) => bookm.id === elDleteBookmarkId)

            bokmarkBox.splice(foundDeleteBookmarkId, 1)

            elBookmark.innerHTML = null
            window.localStorage.setItem("bookmark", JSON.stringify(bokmarkBox))

            renderBookmarkBox(bokmarkBox, elBookmark)
        }
     })








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
    bookmark.setAttribute("class", "bookmark btn btn-warning ms-3")
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






filmsRender(films, elList)