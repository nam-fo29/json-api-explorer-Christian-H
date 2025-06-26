
const postList = document.getElementById("postList"); 
document.addEventListener("click", function (event) {
    if (event.target.id === "fetchButton") {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                console.log(json);
                postList.innerHTML = `
                    <ul>
                        <li>Title: ${json.title}</li>
                        <li>Body: ${json.body}</li>
                    </ul>
                `;
            })
            .catch(function (error) {
                console.error("Error fetching the data:", error);
            });
    }
});