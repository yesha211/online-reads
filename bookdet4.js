const bookArray = [
    {
        bookName:"Alan turning",
        bookDesc:"Alan Turing: The Enigma (1983) is a biography of the British mathematician, codebreaker, and early computer scientist, Alan Turing (1912–1954) by Andrew Hodges. The book covers Alan Turing's life and work. The 2014 film The Imitation Game is loosely based on the book, with dramatization",
         author : "Author: Andrew Hodges",
        published : "Originally published: 1983",
        bookImage:"img/balanturning.jpg",
        LetsReadLink:'https://www.goodreads.com/en/book/show/150731'
    },
    {
        bookName:"Barracoon",
        bookDesc: "arracoon: The Story of the Last Black Cargo is a non-fiction work by Zora Neale Hurston. It is based on her interviews in 1927 with Oluale Kossola (also known as Cudjoe Lewis) who was presumed to be the last survivor of the Middle Passage.",
        author : "Zora Neale Hurston",
        published : "Originally published:May 8, 2018",
        bookImage:"img/bbaracoon.jpg",
        LetsReadLink:'https://www.goodreads.com/en/book/show/16130'
    },
    {
        bookName:"Beatiful mind",
        bookDesc:" A Beautiful Mind (1998) is an unauthorized biography of Nobel Prize-winning economist and mathematician John Nash by Sylvia Nasar, professor of journalism at Columbia University. It won the National Book Critics Circle Award in 1998 and was nominated for the Pulitzer Prize in biography.The novel A Beautiful Mind chronicles John Nash's decades-long battle with disease and his recovery. Author Sylvia Nasar brings us into the mind of a brilliant man tortured by his inability to distinguish paranoia from reality.",
        author : "Author:sylvia nasar ",
        published : "Originally published: 1998",
        bookImage:"img/bbeatifulmind.jpg",
        LetsReadLink:'https://www.goodreads.com/en/book/show/17986419'
    },
    {
        bookName:"Becoming",
        bookDesc:"Becoming” is an autobiography detailing the highs and lows of Michelle Obama's incredible journey from humble beginnings in the less glamourous South Side of Chicago, to the grandeur of the White House and life as America's first African-American First Lady.",
        author : "Author: Michelle obama",
        published : "Originally published: 	November 13, 2018",
        bookImage:"img/bbecoming.jpg",
        LetsReadLink:'https://www.goodreads.com/en/book/show/17986419'
    },
    {
        bookName:"Churchill",
        bookDesc:"Roy Jenkins' Churchill is an exhaustive biographical picture of one of the most enigmatic and important figures of the 20th century. From the Admiralty to the miners' strike, from the Battle of Britain to the Nobel Prize, Churchill oversaw some of the most important events the world has ever seen.",
        author : "Author:winston Churchill ",
        published : "Originally published: 1898",
        bookImage:"img/bchurchill.jpg",
        LetsReadLink:'https://www.goodreads.com/en/book/show/17986419'
    },
    {
        bookName:"E=mc2",
        bookDesc:"Bodanis begins by devoting chapters to each of the equation's letters and symbols, introducing the science and scientists forming the backdrop to Einstein's discovery—from Ole Roemer's revelation that the speed of light could be measured to Michael Faraday's pioneering work on energy fields.",
        author : "Author: David Bodanis",
        published : "Originally published: may ,2000",
        bookImage:"img/be=mc2.jpg",
        LetsReadLink:'https://www.goodreads.com/en/book/show/17986419'
    },
    {
        bookName:"Frida",
        bookDesc:"Frida: A Biography of Frida Kahlo” is an intimate portrayal of one of the most important and influential artists of the 20th century. The book explores Frida's life, from her childhood and marriage to Diego Rivera to her struggles with physical and mental health, political activism, and artistic achievements.",
        author : "Author: Frida Kahlo",
        published : "Originally published: 1983",
        bookImage:"img/bfrida.jpg",
        LetsReadLink:'https://www.goodreads.com/en/book/show/17986419'
    },
    {
        bookName:"Mao",
        bookDesc:"Mao: The Unknown Story is a 2005 biography of the Chinese communist leader Mao Zedong (1893–1976) that was written by the husband-and-wife team of the writer Jung Chang and the historian Jon Halliday, who detail Mao's early life, his introduction to the Chinese Communist Party, and his political career.",
        author : "Author: Jung Chang , Jon Halliday",
        published : "2 June 2005",
        bookImage:"img/bmao.jpg",
        LetsReadLink:'https://www.goodreads.com/en/book/show/17986419'
    },
    {
        bookName:"The anarchy",
        bookDesc:"The Anarchy: The Relentless Rise of the East India Company is a 2019 history book by William Dalrymple. It recounts the rise of the East India Company in the second half of the 18th century, against the backdrop of a crumbling Mughal Empire and the rise of regional powers.",
        author : "Author:William Dalrymple",
        published : "2019",
        bookImage:"img/btheanarchy.jpg",
        LetsReadLink:'https://www.goodreads.com/en/book/show/17986419'
    },
    {
        bookName:"Alexander Hamilton",
        bookDesc: "This story of Alexander Hamilton details a true story of an American Revolutionary war hero that was a true founding father. Hamilton was born in disarray in the British West Indies. He escaped a life of meaninglessness and moved to New York as a teenager where he set his feet in political and military prowess.",
        author : "Author: Ron Chernow",
        published : "Originally published: April 26,2004",
        bookImage:"img/balexanderhamilton.jpg ",
        LetsReadLink:'https://www.goodreads.com/en/book/show/16130'
    },

]



let bookHtmlCollection=[];
for(let i =0 ; i<bookArray.length ; i++)
{
    bookHtmlCollection[i] = document.getElementById(i);
    console.log("THIS IS BOOKCOLLECTIONHTML",bookHtmlCollection);
    bookHtmlCollection[i].addEventListener("click",()=>{
        setBookData(bookArray[i].bookName,bookArray[i].bookDesc,bookArray[i].author,bookArray[i].published,bookArray[i].bookImage,bookArray[i].LetsReadLink);
    })
}



function setBookData(bookName,bookDesc,author,published,bookImage,LetsReadLink){
    const bookData = {
        bookName,
        bookDesc,
        author,
        published,
        bookImage,
        LetsReadLink
    }
    localStorage.setItem("BookData",JSON.stringify(bookData));
}