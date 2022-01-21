async function addPostHandler(event) {
    event.preventDefault();

    const drinkName = document.querySelector("input[name='drink-name']").value.trim();
    const description = document.querySelector("input[name='description']").value.trim();

    const response = await fetch ("/api/comments", {
        method: "POST",
        body: JSON.stringify({
            drinkName,
            description
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.ok) {
        document.location.replace("/commentboard");
    } else {
        alert(response.statusText);
    }
}

document.querySelector(".add-drink").addEventListener("submit", addPostHandler);