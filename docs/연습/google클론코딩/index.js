const darkmode = document.querySelector(".dark-mode");
const body = document.querySelector("body"); 

darkmode.addEventListener("click", function(e){
    body.classList.toggle("darkmode-bg")
    e.target.classList.toggle("darkmode-bg");
    console.log(e);
    console.log(body);

})
const sch = document.querySelector(".sch-input")

sch.addEventListener("keyup",function(e){
    if(e.code ==="Enter"){
        if(e.target.value ===""){
            alert("검색어를 입력해주세요");
        }
        else{
            window.open(`https://www.google.com/search?q=${e.target.value}`,"_blank");
        }
    }
})
const add_bookmark=document.querySelector("button.bookmark-circle");
add_bookmark.addEventListener("click", function(e){
    const bookmarks = document.querySelectorAll(".bookmark-container");
    if(bookmarks.length < 8){
        const clone = bookmarks[bookmarks.length-2].cloneNode(true);
        bookmarks[bookmarks.length-2].after(clone);
    }
    else{
        const clone = bookmarks[bookmarks.length-2].cloneNode(true);
        bookmarks[bookmarks.length-1].remove();
        bookmarks[bookmarks.length-2].after(clone);
    }
})