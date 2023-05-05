const app = Vue.createApp({
    //template:'<center><h1>hello from session1 vue </h1></center>',
    //data as the attriputes and properties write inside
    data() {
        return {
            title:"the black beauty ",
            name:"Anna Sewell ",
             birth:"1820",
             age:"203",
             show:true,
             x:0,
             y:0,
            //  make an array 
            books:[
                {title:"maryam" , age:"20"},
                {title:"menna" , age:"18"},
                {title:"mohamed" , age:"15"}
            ]
        }
    },
    // the method known as the functions are write inside
    methods: {
        changebookname()
        {
            // we write the word this as at belong to the data inside 
            this.title="the final embirer"
        },
        // at the end of every function we put comma
        changeauothername(nameAouther)
        {
            this.name=nameAouther
        },
        toggleshow()
        {
            this.show=!this.show
        },
        handlevent(e)
        {
            console.log(e)
        },
        handelmoveevent(event)
        {
            this.x=event.offsetX
            this.y=event.offsetY

        },
    },

})
app.mount('#application1')
// to connect the to pages together 
// to be clear to connect the div with the application 