var computed = new Vue({
el: '#compute',
data: {
firstName: "Ngoc",
lastName: "Nguyen"
},
computed: {
    fullName() {
        return this.firstName+' '+this.lastName
    }
}
})