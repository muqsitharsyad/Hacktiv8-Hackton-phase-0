// Daftar video 
const videos = [
  { id: '1', title: 'movie website' },
  { id: '2', title: 'movie website' },
  { id: '3', title: 'movie website' },
  { id: '4', title: 'movie website' },
  { id: '5', title: 'movie website' },
  { id: '6', title: 'movie website' },
  { id: '7', title: 'movie website' },
  { id: '8', title: 'movie website' },
  { id: '9', title: 'movie website' },
  { id: '10', title: 'movie website' }
];

// Fungsi pencarian
function searchVideos() {
  let input = document.getElementById('searchInput');
  let filter = input.value.toLowerCase();
  let videoList = document.getElementById('videoList');
  let videos = videoList.getElementsByClassName('video-item');
  let title;
  let filteredVideos = [];

  for (i = 0; i < videos.length; i++) {
    title = videos[i].getAttribute('data-title').toLowerCase();
    if (title.indexOf(filter) > -1) {
      videos[i].style.display = "";
      filteredVideos.push(videos[i]);
    } else {
      videos[i].style.display = "none";
    }
  }
}

  // Tampilkan hasil pencarian
  const resultsDiv = document.getElementById('resultsDiv');
  resultsDiv.innerHTML = '';
  
  if (filteredVideos.length > 0) {
      for (let i = 0; i < filteredVideos.length; i++) {
          const videoElement = document.createElement('div');
          videoElement.innerHTML = `
              <p>${filteredVideos[i].title}</p>
              <button onclick="playVideo('${filteredVideos[i].id}')">Play</button>
          `;
          resultsDiv.appendChild(videoElement);
      }
  } else {
      resultsDiv.innerHTML = '<p>No videos found</p>';
}


// Fungsi untuk memainkan video dan arahkan ke halaman playing.html
function playVideo(videoTitle) {
  // Simpan ID video ke localStorage untuk dibaca di halaman playing.html
  localStorage.setItem('selectedVideoId', videoId);

  // Arahkan ke halaman playing.html
  window.location.href = 'playing.html';
}


// function untuk menambah komentar
const form = document.getElementById("comment-form");
const commentList = document.getElementById("comment-list");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    //ngambil value dari inputan
    const commentText = document.getElementById("comment").value;
    //menambah komen ke list
    const newComment = document.createElement("li");
    newComment.className = "list-group-item";
    newComment.innerHTML = `
        <p>${commentText}</p>
        <div class="comment-actions">
        <button class="btn btn-sm btn-warning edit">Edit</button>
        <button class="btn btn-sm btn-danger delete">Delete</button>
        </div>
    `;
    commentList.appendChild(newComment);
    //reset input
    document.getElementById("comment").value = "";
});
{/* <button   button class="btn btn-sm btn-primary like">Like</button>
<button class="btn btn-sm btn-danger dislike">Dislike</button> */}