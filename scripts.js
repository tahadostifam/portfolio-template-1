const GITHUB_API_URL = "https://api.github.com/users/"
const GITHUB_USERNAME = "tahadostifam"

window.lazyImageLoader = (e) => {
    e.parentElement.classList.add('loaded')
}

window.onload = () => {
    fetch_github_repos()
}

function fetch_github_repos() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        let result = JSON.parse(this.responseText)
        document.getElementById('repos_count').innerText = result["public_repos"];
    }
    xhttp.open("GET", GITHUB_API_URL + GITHUB_USERNAME);
    xhttp.send();
}