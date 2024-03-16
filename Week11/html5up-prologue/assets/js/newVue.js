var header = new Vue ({
    el: '#header',
    data: {
        yourName: "Ngoc Nguyen",
        description: "I love cats",
        link1: "Cute Cat Pictures",
        link2: "My Portofolio",
        link3: "About Me",
        link4: "Contact",
        link5: "Color of Cats",
        avatar: 'images/me.jpg'
    }

})

var portfolio = new Vue ({
    el: '#portfolio',
    data: {
        description: "I love warm weather climate and would hope I get to go to either the beach or go somewhere to relax.",
        image1: "images/maui.jpg",
        image1des: 'Maui, Hawaii',
        image2: 'images/honolulu.jpg',
        image2des: 'Honolulu, Hawaii',
        image3: 'images/vietnam.jpg',
        image3des: 'Vietnam',
        image4: 'images/pensacola.jpg',
        image4des: 'Pensacola, Florida',
        image5: 'images/sixflags.jpg',
        image5des: 'Six Flags',
        image6: 'images/idaho.jpg',
        image6des: 'Idaho?',
        
    }
})

var about = new Vue ({
    el: '#about',
    data: {
        image1: 'images/me.jpg',
        description: "This would be me as a cat. I love cats. They are so cute and fuzzy and sweet :)"
    }
})

var contact = new Vue ({
    el: '#contact',
    data: {
        description: "Contact me if you want to talk about cats!"
    }
})

var list = new Vue ({
    el: '#list',
    data: {
        colors: ['White','Black', 'Orange', 'Gray', 'Brown']
    }
})