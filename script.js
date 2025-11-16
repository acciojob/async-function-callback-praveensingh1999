const url = "https://jsonplaceholder.typicode.com/posts/1";

// your JS code here
async function fetchData(url, callback) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        callback(data);
    } catch (error) {
        console.error("Error fetching:", error);
    }
}

fetchData(url, (data) => {
    console.log(data);

    const output = document.querySelector("#output");
    output.innerText = JSON.stringify(data, null, 2);
    output.style.display = "block";
});
