const LibraryComponent = Vue.component('Library', {
    // this function is run AFTER the props have been passed in
    data() {
        return {
            library: [
                new LibraryItem(new Book('book1', 234),),
                new LibraryItem(new Movie('movie1', 231),),
                new LibraryItem(new Book('book2', 24),)
            ],
        }
    },

    // values/bindings passed to this component
    props: {

    },

    // functions that you want to use in your view that are triggered manually
    methods: {

    },

    // props/data that needs to be calculated when dependencies change
    computed: {

    },

    // the view
    template: `
        <div class="card-columns">
            <library-item v-for="item in library" :item="item"></library-item>
        </div>`,
});

const LibraryItemComponent = Vue.component('LibraryItem', {

    props: {
      item: {
          type: LibraryItem,
          required: true
      }
    },

    computed:{
        typeOfItem(){
            return this.item.media.constructor.name;
        }
    },

    template:
    `<div class="card" :class="{'border-success' : item.isAvailable()}">
        <div class="card-body">
            <component :is="typeOfItem" :item="item.media"></component>
        </div>
        <div class="card-footer">
            <button v-if="item.isAvailable()" @click="item.checkOut()">Check Out</button>
            <button v-else @click="item.checkIn()">Check In</button>
            <button @click="item.addToCart()">Add to cart</button>
        </div>
    </div>`


})

const BookComponent = Vue.component('Book', {
    props: {item: Book},
    template:`
    <div class="book">
        <h3 class="card-title">{{item.title}}</h3>
        <p class="card-text">Pages: {{item.pages}}</p>
    </div>
    `
})

const MovieComponent = Vue.component('Movie', {
    props: {item: Movie},
    template:`
    <div class="movie">
        <h3 class="card-title">{{item.title}}</h3>
        <p class="card-text">Runtime: {{item.runtime}}</p>
    </div>
    `
})