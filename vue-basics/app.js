new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue Ninja',
        name: 'Batuhan Onur',
        url: 'http://www.youtube.com',
        classes: ['one', 'two'],
    },
    methods: {
        greet(time) {
            return `Hello there ${this.name}, time is ${time}`
        }
    }
});

new Vue({
    el: '#events',
    data: {
        wage: 10,
        coords: {
            x: 0,
            y: 0
        }
    },
    methods: {
        changeWage(amount) {
            this.wage += amount
        },
        logEvent(e) {
            console.log(e);
        },
        logCoords(e) {
            this.coords.x = e.offsetX
            this.coords.y = e.offsetY
        }
    }

});

new Vue({
    el: '#databind',
    data: {
        name: 'Batuhan Onur'
    }
});

new Vue({
    el: '#condition',
    data: {
        showName: true,
        items: ['Mushroom', 'Green Shells', 'Red Shells', 'Banana', 'Star']
    },
    methods: {
        toggleName() {
            this.showName = !this.showName
        }
    }

})