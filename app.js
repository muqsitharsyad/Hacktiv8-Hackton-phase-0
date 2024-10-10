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
const film = [
  { image: 'https://i.ytimg.com/vi/Qr4hzcJxNl0/maxresdefault.jpg', 
      title: 'Warkop DKI Kesempatan Dalam Kesempitan', 
      description: 'Kesempatan dalam Kesempitan mengisahkan Dono yang bekerja di agen rokok, sementara Kasino bekerja di bengkel, menganjurkan supaya Indro diterima di tempat kos Tina (diperankan oleh Lydia Kandou) dan Santi (diperankan oleh Lia Waroka).', 
      link: 'playing.html?title=Warkop DKI Kesempatan Dalam Kesempitan',
      youtube: 'https://www.youtube.com/embed/Qr4hzcJxNl0?si=Z41woBqR9uuvs0zF'},

  { image: 'https://cdn.antaranews.com/cache/1200x800/2024/04/03/Menjelang-Ajal_Official-Poster.jpg', 
      title: 'Menjelang Ajal', 
      description: 'Menjelang Ajal menampilkan kisah mencekam mengenai seorang tokoh ibu bernama Sekar yang berjuang keras untuk menyambung hidup dengan membuka warung makan. Demi menghidupi keluarganya tersebut, Sekar rela memasang penglaris untuk warung makannya.', 
      link: 'playing.html?title=Menjelang Ajal',
      youtube: 'https://www.youtube.com/embed/3yQEVKB5mAY?si=2vxbJpD44Buqa_5q'},

  { image: 'https://m.media-amazon.com/images/M/MV5BOGI2OWYyOWYtMWE4NS00MzE5LWFiMjItODc3ZjhlNzJhNjAwXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg', 
      title: 'Pamali', 
      description: 'Film ini berkisah tentang lima orang yang ditugaskan untuk membantu sebuah dusun terpencil yang sedang dilanda wabah mematikan. Tiga orang di antaranya adalah petugas medis, yaitu Gendis, Mila, dan Puput. Dua orang lainnya adalah penggali kubur, yaitu Cecep dan Iwan.', 
      link: 'playing.html?title=Pamali',
      youtube: 'https://www.youtube.com/embed/6beLNO4OmLk?si=WKjyn2MJM90xPHcP'},

  { image: 'http://img.youtube.com/vi/6MUYMofmo5Y/maxresdefault.jpg', 
      title: 'Anak Muda Palsu', 
      description: 'Anak Muda Palsu adalah sebuah film Indonesia yang dirilis pada tahun 2019. Film ini menceritakan tentang kisah persahabatan empat mahasiswa yang berjuang menyelesaikan studi mereka. Pemain utama di film ini adalah Abu, Tumming, Reo Ramadhan dan masih banyak lagi.',
      link: 'playing.html?title=Anak Muda Palsu',
      youtube: 'https://www.youtube.com/embed/joM-AFmK3KQ?si=Uz_Oq5xrnIRNyXf'},
      
  { image: 'https://tse4.mm.bing.net/th?id=OIP.eEF4MSJdCraDSODNF7o1BgHaEK&pid=Api&P=0&h=180', 
      title: 'Kapan di Dalam Kapan di Luar', 
      description: 'Kadir dan Doyok sahabat yang memiliki sifat saling bertolak belakang. Kadir yang sangat alim, sementara Doyok suka main cewek.', 
      link: 'playing.html?title=Kapan di Dalam Kapan di Luar',
      youtube: 'https://www.youtube.com/embed/Qxwjcb7g2z0?si=408A9H2wk5F-5pez'},

  { image: 'https://upload.wikimedia.org/wikipedia/id/a/a6/Serendipity_%282018%29.jpeg', 
      title: 'Serendipity', 
      description: 'Rani menjadi seorang lady escort, demi kehidupan yang lebih baik. Apalagi ketika ayahnya wafat, Rani harus berjuang untuk hidupnya sendiri dan ibunya.', 
      link: 'playing.html?title=Serendipity',
      youtube: 'https://www.youtube.com/embed/4fiire8P6Uc?si=Il9vPAxVK14yqoOd'},

  { image: 'https://tse3.mm.bing.net/th?id=OIP.rESJg3TOzx6XcDkNU3TJiQHaEK&pid=Api&P=0&h=180', 
      title: 'Maju Kena Mundur Kena', 
      description: 'Dono dan Indro adalah teman satu kos dan anak buah Kasino di bengkel. Kasino melarang Dono dan Indro untuk tidak tertarik oleh wanita.', 
      link: 'playing.html?title=Maju Kena Mundur Kena',
      youtube: 'https://www.youtube.com/embed/qdPbKrR0s80?si=8UR4zhjzhJEUKrvN'},

  { image: 'https://tse1.mm.bing.net/th?id=OIP.6nsF01vrd2hIeBSjjqJfTAHaEK&pid=Api&P=0&h=180', 
      title: 'Bunga Cinta Kasih', 
      description: 'Gita (Astri Ivo) anak keluarga terpandang dan Trisna (Rano Karno) anak seorang janda (Ellya Rosa) yang harus kos di kota untuk sekolah.', 
      link: 'playing.html?title=Bunga Cinta Kasih',
      youtube: 'https://www.youtube.com/embed/29U2cn8QdSE?si=kt5zbx5n1hK8OVaF'}
];


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const title = urlParams.get('title')

function getData (title) {
    for (let i = 0; i < film.length; i++) {
        if (title === film[i].title) {
            return film[i].youtube
        }
    }       
}
//console.log (getData(title));

let linkYT = getData(title)
let yt = document.getElementById('youtube')
yt.innerHTML = `<div class="ratio ratio-21x9"><iframe src="${linkYT}" title="${title}" allowfullscreen></iframe></div><br><h3>${title}</h3>`

// // Fungsi pencarian
// function searchVideos() {
//   let input = document.getElementById('searchInput');
//   let filter = input.value.toLowerCase();
//   let videoList = document.getElementById('videoList');
//   let videos = videoList.getElementsByClassName('video-item');
//   let title;
//   let filteredVideos = [];

//   for (i = 0; i < videos.length; i++) {
//     title = videos[i].getAttribute('data-title').toLowerCase();
//     if (title.indexOf(filter) > -1) {
//       videos[i].style.display = "";
//       filteredVideos.push(videos[i]);
//     } else {
//       videos[i].style.display = "none";
//     }
//   }
// }



// // Fungsi untuk memainkan video dan arahkan ke halaman playing.html
// function playVideo(videoTitle) {
//   // Simpan ID video ke localStorage untuk dibaca di halaman playing.html
//   localStorage.setItem('selectedVideoId', videoId);

//   // Arahkan ke halaman playing.html
//   window.location.href = 'playing.html';
// }


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