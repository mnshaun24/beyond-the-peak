async function upVoteHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
    ];

    const response = await fetch("/api/comments/upvote", {
        method: "PUT",
        body: JSON.stringify({
            post_id: id
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
};

async function downVoteHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
    ];

    const response = await fetch("/api/comments/downvote", {
        method: "PUT",
        body: JSON.stringify({
            post_id: id
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}

document.querySelector(".up-vote").addEventListener("click", upVoteHandler);
document.querySelector(".down-vote").addEventListener("click", downVoteHandler);