class Book{
    //class properties
    title;
    author;
    pages;
    isAvailable=true;

    //constuctors
    constructor(title,author,pages,isAvailable){
        this.title=title;
        this.pages=pages;
        this.author=author;
        this.isAvailable=isAvailable;
    }

    //methods
    borrow(){
        if(this.isAvailable==true){
            return "Book can be Borrowed"
        }
        return "Book Not Available"
    }

    returnBook(){
        return "Book is Returned"
    }

    getInfo(title){
        console.log(`Title:${this.title},Author:${this.author}`)
    }

    isLongBook(){
        if(this.pages>300){
            return "Long Book"
        }
        return "Short Book"
    }
}

//creting obj for class
let b1=new Book("Harry Potter","JK Rowling",400,true)
let b2=new Book("Marvel","StanLee",100,true)
let b3=new Book("One Piece","Eichiro Oda",1005,false)
