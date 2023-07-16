const heading = document.getElementById("heading")
const para  =document.getElementById("para")
const auth = document.getElementById("author")
const pub = document.getElementById("published")
const img = document.getElementById("image")
const link = document.getElementById("link")

if(localStorage.getItem("BookData"))
{
    const bookData = JSON.parse(localStorage.getItem("BookData"));
    heading.textContent = bookData.bookName;
    para.textContent = bookData.bookDesc;
    auth.textContent = bookData.author;
    pub.textContent = bookData.published;
    img.src = bookData.bookImage;
    link.href = bookData.LetsReadLink;
}
// else
// {
//     const para =  document.createElement("p");
//     para.textContent = "Data Not Found 404";
//     document.body.appendChild(para);
// }