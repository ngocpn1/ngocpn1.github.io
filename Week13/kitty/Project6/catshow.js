Vue.component('cat', {
    props: {
        cats: String
    },
    template: 
    `<div id="acat">
    <div id="sect1">
        <h1>{{thename}}</h1>
        <p>Origin: {{origin}}</p>
        <p>Description: {{description}}</p>
        <p>Temperament: {{temperament}}</p>
    </div>
    <div id="image">
        <img :src="image.url">
    </div>    
        <div class="bars" :style="{height:groom * 20 +'.px'}">Groom: {{groom}}</div>
        <div class="bars" :style="{height:adapt * 20 +'.px'}">Adapt: {{adapt}}</div>
        <div class="bars" :style="{height:energy * 20 +'.px'}">Energy: {{energy}}</div>
        <div class="bars" :style="{height:shedding * 20 +'.px'}">Shedding: {{shedding}}</div>
        <br>

        <button v-on:click="slideshow">click me</button>
        </div>
    `,
    data() {
        return {
            image: "",
            groom: "",
            whichcat: "abob",
            thename: "",
            allofit: [],
            i: 0,
            adapt: 0,
            description: "",
            origin: "",
            temperament: "",
            energy: "",
            shedding: "",
    }
    },
    created() {
        this.loadNextImage(this.cats);
    },
    methods: {
        async loadNextImage(breedID) {
            try {
                axios.defaults.headers.common['x-api-key'] = "5707ff43-c0b5-456f-864a-78a03c24ea46"
     let response = await axios.get('https://api.thecatapi.com/v1/images/search?breed_ids=' + breedID, {
                    params: {
                        limit: 10,
                        size: "full"
                    }
                })
     //grabs the id in order to target new url for more data
 
     let theid = response.data[0].id;
//response2 is a new variable that uses the id to get data from a URL with additional information
    let response2 = await axios.get('https://api.thecatapi.com/v1/images/' + theid, {})
    this.adapt = response2.data.breeds[0].adaptability;
    this.thename = response2.data.breeds[0].name;
    this.origin = response2.data.breeds[0].origin;
    this.description = response2.data.breeds[0].description;
    this.temperament = response2.data.breeds[0].temperament;
    this.groom = response2.data.breeds[0].grooming;
    this.energy= response2.data.breeds[0].energy_level;
    this.shedding= response2.data.breeds[0].shedding_level;




    this.allofit = response.data;
            } catch (err) {
                console.log(err)
            }
            this.slideshow()
        },
        async slideshow() {

            if (this.i >= this.allofit.length) {
                this.i = 0;
            }
            this.image = this.allofit[this.i];
            this.i++;
        }
    }
})    


    var co = new Vue ({
        el: '#cat'
    })
    
















