let
    gallery = document.querySelector(".gallery"),
    home = document.querySelector(".home"),
    news = document.querySelector(".news");

function GalleryShow(){
    home.style.display = 'none';
    news.style.display = 'none';
    gallery.style.display = 'flex';
}

function HomeShow(){
    news.style.display = 'none';
    gallery.style.display = 'none';
    home.style.display = 'flex';
}

function NewsShow(){
    home.style.display = 'none';
    gallery.style.display = 'none';
    news.style.display = 'flex';
}