const { createApp } = Vue;
const options = {
    data: function () {
        return {
            slides: [
                {
                    immagine: 'https://img.freepik.com/free-photo/close-up-friendly-looking-happy-positive-lucky-young-female-wearing-checked-shirt-t-shirt-smiling-broadly-delighted-feeling-awesome-joyful-day-enjoying-life-standing-white-background_176420-34722.jpg',
                    titolo: 'Esperienza fantastica!',
                    contenuto: 'Ho apprezzato molto il servizio e la qualità del prodotto. Sicuramente tornerò!',
                    autoreNome: 'Marco',
                    autoreCognome: 'Rossi'
                },
                {
                    immagine: 'https://img.freepik.com/free-photo/portrait-young-handsome-man-jean-shirt-smiling-with-crossed-arms_176420-12083.jpg',
                    titolo: 'Prodotto eccezionale!',
                    contenuto: 'Il prodotto supera le aspettative, funziona benissimo e ha un ottimo design.',
                    autoreNome: 'Laura',
                    autoreCognome: 'Bianchi'
                },
                {
                    immagine: 'https://img.freepik.com/free-photo/mand-holding-cup_1258-340.jpg',
                    titolo: 'Servizio impeccabile!',
                    contenuto: 'Il personale è cordiale e attento alle esigenze del cliente. Consigliato!',
                    autoreNome: 'Giovanni',
                    autoreCognome: 'Verdi'
                }
            ],
            slideNumber: 0
        }
    },

    methods: {
        forward() {

            if(this.slideNumber < this.slides.length-1) {
                this.slideNumber++;
            } else {
                this.slideNumber = 0;
            }
        },

        backward() {

            if(this.slideNumber > 0) {
                this.slideNumber--;
            } else {
                this.slideNumber = this.slides.length-1;
            }
        }

    },

    mounted() {
        console.log(this.slides);
    },

};

createApp(options).mount('#app')





