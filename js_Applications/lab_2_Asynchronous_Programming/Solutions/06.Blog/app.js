function attachEvents() {
  const loadPostsBtn = document.getElementById('btnLoadPosts');
  const viewPostBtn = document.getElementById('btnViewPost');
  const url = 'http://localhost:3030/jsonstore/blog';

  const postSelect = document.getElementById('posts');
  
  loadPostsBtn.addEventListener('click', requestData);
  viewPostBtn.addEventListener('click', viewData);

  async function requestData() {
    postSelect.replaceChildren();
    const res = await fetch(`${url}/posts`);
    const data = await res.json();

    for (const entry of Object.entries(data)) {
      const [key, value] = entry;
      const newOptionsEl = document.createElement('option');
      newOptionsEl.value = key;
      newOptionsEl.textContent = value.title;
      postSelect.appendChild(newOptionsEl);
    }
  }

  async function viewData() {
    const selectedPostId = postSelect.value;

    if (!selectedPostId) {
      alert('Please select a post before viewing!');
      return;
    }
    const res = await fetch(`${url}/comments/${selectedPostId}`);
    const data = await res.json();
    console.log(data);
  }
}

attachEvents();
