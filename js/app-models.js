// The 'Model' is responsible for managing the data of the application.
// You can define your models in the 'data' section of each Vue component
// or define them separately if they might be used by multiple components.

function LibraryItem(media){
    const STATUSES = {CHECKED_IN: 'in', CHECKED_OUT: 'out'}

    this.status = STATUSES.CHECKED_IN;
    this.media = media;

    this.checkIn = function (){
        this.status = STATUSES.CHECKED_IN;
    }
    this.checkOut = function (){
        this.status = STATUSES.CHECKED_OUT;
    }
    this.isAvailable = function(){
        return this.status === STATUSES.CHECKED_IN;
    }
}

// Models are usually prototypes (similar to classes if you are familiar with those)
function Book(title, pages){

    this.title = title
    this.pages = pages
}

// or ES6 syntactic sugar (these are not really classes in the traditional sense)
class Movie{
    title = '';
    runtime = 0;

    constructor(title,runtime) {
        this.title = title;
        this.runtime = runtime;
    }
}

