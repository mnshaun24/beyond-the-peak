async function addCommentHandler(event) {
    event.preventDefault();

    const drink_name = document.querySelector("input[name='drink-name']").value.trim();
    const drink_description = document.querySelector("textarea[name='drink-description']").value.trim();

    const response = await fetch ("/api/comments", {
        method: "POST",
        body: JSON.stringify({
            drink_name,
            drink_description
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.ok) {
        console.log(drink_name);
        console.log(drink_description);
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}

document.querySelector("#comment-form").addEventListener("submit", addCommentHandler);