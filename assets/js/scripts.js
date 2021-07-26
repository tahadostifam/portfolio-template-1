const jsonserver_address = 'https://raw.githubusercontent.com/tahadostifam/tahadostifam/main/json-server/data.json';

new Vue({
    el: "#app",
    data() {
        return {
            data: null
        };
    },
    mounted(){
        axios.get(jsonserver_address).then((response) => {
            this.$set(this.$data, 'data', response.data);
        })
    }
});

function loadImage(event) {
    event.target.classList.add("loaded");
}