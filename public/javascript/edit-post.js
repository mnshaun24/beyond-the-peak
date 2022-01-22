async function editPostHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="drink-name"]').value.trim();
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/comments/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/commentboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.edit-drink').addEventListener('submit', editPostHandler);
  