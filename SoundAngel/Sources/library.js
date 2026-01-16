
// Load playlists from localStorage or initialize
let playlists = JSON.parse(localStorage.getItem("lib_playlists") || '{"My Playlist": []}');

function savePlaylists(){
  localStorage.setItem("lib_playlists", JSON.stringify(playlists));
}

function renderPlaylists(){
  const wrap = document.getElementById('playlistCards');
  if (!wrap) return;
  wrap.innerHTML = "";

  // New Playlist card
  const addCard = document.createElement('div');
  addCard.className = 'Add-playlist';
  addCard.innerHTML = `
  <div class="col">
    <div class="card" id="New-list" style="width: 18rem; margin-right: 0px;">
      <img src="../Images/Plus icon.png" class="card-img-top" alt="Plus icon">
      <div class="card-body">
      <div class="playlist-card-name text-center"><h5>New Playlist</h5></div>
      </div>
    </div>
  </div>
    
  `;
  addCard.onclick = () => {
    const name = prompt("Playlist name:");
    if (!name || playlists[name]) return;
    playlists[name] = [];
    savePlaylists();
    renderPlaylists();
  };
  wrap.appendChild(addCard);

  // Existing playlists
  Object.keys(playlists).forEach(name => {
    const card = document.createElement('div');
    card.className = 'col';
    card.innerHTML = `

      <div class="card" id="New-list" style="width: 18rem;">
        <img src="../Images/Note icon.jpg" class="card-img-top" alt="Note icon">
        <div class="card-body">
        <div class="playlist-card-name text-center">${name}</div>
        <button class="btn btn-danger" data-del>Delete</button>
        </div>

      
    `;
// Playlist deletion
      card.querySelector('[data-del]').onclick = (e) => {
      e.stopPropagation();
      if (!confirm(`Delete playlist '${name}'?`)) return;
      delete playlists[name];
      savePlaylists();
      renderPlaylists();
        };

    wrap.appendChild(card);
  });
}

// Initial render
document.addEventListener('DOMContentLoaded', renderPlaylists);