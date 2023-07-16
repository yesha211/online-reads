const bookArray = [
    {
        bookName:"Birdbox",
        bookDesc:"Something is out there, something terrifying that must not be seen. One glimpse of it, and a person is driven to deadly violence. No one knows what it is or where it came from.Five years after it began, a handful of scattered survivors remains, including Malorie and her two young children. Living in an abandoned house near the river, she has dreamed of fleeing to a place where they might be safe. Now that the boy and girl are four, it's time to go, but the journey ahead will be terrifying: twenty miles downriver in a rowboat—blindfolded—with nothing to rely on but her wits and the children's trained ears. One wrong choice and they will die. Something is following them all the while, but is it man, animal, or monster?",
        author : "Author: Josh Malerman",
        published : "Originally published: 27 March,2014",
        bookImage:"img/hbirdbox.jpg",
        LetsReadLink:'https://www.goodreads.com/book/show/44646576-bird-box',
    },
    {
        bookName:"Carrie",
        bookDesc:"A modern classic, Carrie introduced a distinctive new voice in American fiction -- Stephen King. The story of misunderstood high school girl Carrie White, her extraordinary telekinetic powers, and her violent rampage of revenge, remains one of the most barrier-breaking and shocking novels of all time.",
        author : "Author: Stephen Edwin King",
        published : "Originally published: 1 January,1974",
        bookImage:"img/hcarrie.jpg",
        LetsReadLink:'https://www.goodreads.com/book/show/10592.Carrie',
    },
    {
        bookName:"Coraline",
        bookDesc:"Coraline Jones moves into a new apartment with her parents. As a curious and adventurous 9-year-old girl, Coraline quickly becomes bored of her new surroundings even though she has some eccentric neighbors to keep her company.One rainy day, Coraline becomes interested in a strange door that opens up to a brick wall. Mysteriously, the brick wall vanishes the next day and the door leads to an eerie corridor. When Coraline explores it, she finds that on the other side is a parallel universe that is a mirror image of the one she just left behind. ",
        author : "Author: Neil Gaiman",
        published : "Originally published: 2 Jult,2002 ",
        bookImage:"img/hcoraline.jpg",
        LetsReadLink:'https://study.com/academy/lesson/coraline-book-summary-themes.html',
    },
    {
        bookName:"Dracula",
        bookDesc:"Sometime in the late nineteenth century, Jonathan Harker, a young English lawyer, is traveling to the Castle Dracula, which is located in Transylvania, in order to finalize a transfer of real estate in England to Count Dracula. Harker becomes extremely nervous when all of the local peasants react in fear after they hear of his destination; nevertheless, he continues on to the castle until he meets an emissary of the Count in the Borgo Pass. The mysterious coach driver continues on to the castle, arriving in pitch darkness, to the accompaniment of howling wolves.",
        author : "Author: Bram Stoker",
        published : "Originally published: 26 May,1897",
        bookImage:"img/hdracula.jpg",
        LetsReadLink:'https://www.cliffsnotes.com/literature/d/dracula/book-summary',
    },
    {
        bookName:"Ghost story",
        bookDesc:"For four aging men in the terror-stricken town of Milburn, New York, an act inadvertently carried out in their youth has come back to haunt them. Now they are about to learn what happens to those who believe they can bury the past -- and get away with murder.",
        author : "Author: Peter Straub",
        published : "Originally published: 1 January,1997",
        bookImage:"img/hghoststory.jpg",
        LetsReadLink:'https://www.goodreads.com/en/book/show/19581',
    },
    {
        bookName:"Horrorstor",
        bookDesc:"Something strange is happening at the Orsk furniture superstore in Cleveland, Ohio. Every morning, employees arrive to find broken Kjerring bookshelves, shattered Glans water goblets, and smashed Liripip wardrobes. Sales are down, security cameras reveal nothing, and store managers are panicking.To unravel the mystery, three employees volunteer to work a nine-hour dusk-till-dawn shift.",
        author : "Author: Grady Hendrix",
        published : "Originally published: 23 September,2014",
        bookImage:"img/hhorrorstor.jpg",
        LetsReadLink:'https://www.goodreads.com/en/book/show/13129925',
    },
    {
        bookName:"It",
        bookDesc:"It’s a small city, a place as hauntingly familiar as your own hometown. Only in Derry the haunting is real.They were seven teenagers when they first stumbled upon the horror. Now they are grown-up men and women who have gone out into the big world to gain success and happiness. But none of them can withstand the force that has drawn them back to Derry to face the nightmare without an end, and the evil without a name.",
        author : "Author: Stephen Edwin King",
        published : "Originally published: September 15, 1986",
        bookImage:"img/hit.jpg",
        LetsReadLink:'https://www.goodreads.com/book/show/830502.It',
    },
    {
        bookName:"Ring",
        bookDesc:"A mysterious videotape warns that the viewer will die in one week unless a certain, unspecified act is performed. Exactly one week after watching the tape, four teenagers die one after another of heart failure.Asakawa, a hardworking journalist, is intrigued by his niece's inexplicable death. His investigation leads him from a metropolitan tokyo teeming with modern society's fears to a rural Japan--a mountain resort, a volcanic island, and a countryside clinic--haunted by the past.",
        author : "Author: Suzuki Kōji",
        published : "Originally published: january 1, 1991",
        bookImage:"img/hring.jpg",
        LetsReadLink:'https://www.goodreads.com/book/show/38379.Ring',
    },
    {
        bookName:"The shining",
        bookDesc:"Jack Torrance's new job at the Overlook Hotel is the perfect chance for a fresh start. As the off-season caretaker at the atmospheric old hotel, he'll have plenty of time to spend reconnecting with his family and working on his writing. But as the harsh winter weather sets in, the idyllic location feels ever more remote...and more sinister. And the only one to notice the strange and terrible forces gathering around the Overlook is Danny Torrance, a uniquely gifted five-year-old.",
        author : "Author: Stephen Edwin King",
        published : "Originally published: January 28, 1977",
        bookImage:"img/htheshining.jpg",
        LetsReadLink:'https://www.goodreads.com/book/show/11588.The_Shining',
    },
    {
        bookName:"The stand",
        bookDesc:"First came the days of the plague. Then came the dreams. Dark dreams that warned of the coming of the dark man. The apostate of death, his worn-down boot heels tramping the night roads. The warlord of the charnel house and Prince of Evil. His time is at hand. His empire grows in the west and the Apocalypse looms.For hundreds of thousands of fans who read The Stand in its original version and wanted more, this new edition is Stephen King's gift. ",
        author : "Author: Stephen Edwin King ",
        published : "Originally published: January 1, 1978",
        bookImage:"img/hthestand.jpg",
        LetsReadLink:'https://www.goodreads.com/book/show/149267.The_Stand',
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
