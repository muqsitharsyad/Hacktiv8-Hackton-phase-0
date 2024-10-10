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
const usernameInput = document.getElementById("username");
const storedName = localStorage.getItem('nama');

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const commentText = document.getElementById("comment").value.trim();

    if (storedName === "" || commentText === "") {
        alert("Username and comment cannot be empty.");
        return;
    }
    
    // Menambah komen ke list
    const newComment = document.createElement("li");
    newComment.className = "list-group-item";
    newComment.innerHTML = `
        <p class="pernama"> <strong>${storedName}:</strong> </p>
        <p class="komen"> ${commentText}</p>
        <div class="comment-actions">
        <button class="btn btn-sm btn-warning edit">Edit</button>
        <button class="btn btn-sm btn-danger delete">Delete</button>
        <button class="btn btn-sm btn-primary like"> 👍 (<span class="like-count">0</span>)</button>
        <button class="btn btn-sm btn-danger dislike">👎 (<span class="dislike-count">0</span>)</button>
        </div>
    `;
    commentList.appendChild(newComment);
    
    // Reset input
    document.getElementById("comment").value = "";

    addCommentActions(newComment);
});

function addCommentActions(commentElement) {
    const editButton = commentElement.querySelector(".edit");
    const deleteButton = commentElement.querySelector(".delete");
    const likeButton = commentElement.querySelector(".like");
    const dislikeButton = commentElement.querySelector(".dislike");
    const likeCount = commentElement.querySelector(".like-count");
    const dislikeCount = commentElement.querySelector(".dislike-count");
    
    // Fungsi Edit
    editButton.addEventListener("click", function() {
        const commentText = commentElement.querySelector(".komen").innerText;
        const newCommentText = prompt("Edit your comment:", commentText);
        if (newCommentText !== null && newCommentText.trim() !== "") {
            commentElement.querySelector(".komen").innerHTML = `${newCommentText}`;
        }
    });

    // Fungsi Delete
    deleteButton.addEventListener("click", function() {
        commentList.removeChild(commentElement);
    });

    // Fungsi Like
    likeButton.addEventListener("click", function() {
        let currentCount = parseInt(likeCount.innerText);
        likeCount.innerText = currentCount + 1;
    });

    // Fungsi Dislike
    dislikeButton.addEventListener("click", function() {
        let currentCount = parseInt(dislikeCount.innerText);
        dislikeCount.innerText = currentCount + 1;
    });
}