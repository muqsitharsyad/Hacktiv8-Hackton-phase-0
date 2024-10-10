// Daftar video 
const videos = [
  { id: '1', title: 'Warkop DKI Kesempatan Dalam Kesempitan'},
  { id: '2', title: 'Menjelang Ajal'},
  { id: '3', title: 'Pamali'},
  { id: '4', title: 'Crad title'},
  { id: '5', title: 'Kapan di Dalam Kapan di Luar'},
  { id: '6', title: 'Serendipity'},
  { id: '7', title: 'Maju Kena Mundur Kena'},
  { id: '8', title: 'Bunga Cinta Kasih' }
];

// Fungsi pencarian
function searchVideos() {
  let input = document.getElementById('searchInput');
  let filter = input.value.toLowerCase();
  let videoList = document.getElementById('videoList');
  let videos = videoList.getElementsByClassName('video-item');

  for (i = 0; i < videos.length; i++) {
    title = videos[i].getAttribute('data-title').toLowerCase();
    if (title.indexOf(filter) > -1) {
      videos[i].style.display = "";
    } else {
      videos[i].style.display = "none";
    }
  }
  // Fungsi untuk memainkan video dan arahkan ke halaman playing.html
  function playVideo(videoId) {
    const videoIds = [
      { id: '1', title: 'Warkop DKI Kesempatan Dalam Kesempitan'},
      { id: '2', title: 'Menjelang Ajal'},
      { id: '3', title: 'Pamali'},
      { id: '4', title: 'Crad title'},
      { id: '5', title: 'Kapan di Dalam Kapan di Luar'},
      { id: '6', title: 'Serendipity'},
      { id: '7', title: 'Maju Kena Mundur Kena'},
      { id: '8', title: 'Bunga Cinta Kasih' }
    ];

    for (let i = 0; i < videoIds.length; i++) {
      if (videoIds[i] === videoId) {
        console.log('Memutar Video dengan ID: ${videoID}');
        return;
      }
    }
    console.log('Video dengan ID: ${videoId} tidak ditemukan')
  }

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