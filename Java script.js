function sortProducts() {
    const sortOption = document.getElementById("sort-options").value;
    const productGallery = document.getElementById("product-gallery");
    const products = Array.from(productGallery.getElementsByClassName("product-item"));

    products.sort((a, b) => {
        if (sortOption === "name") {
            return a.dataset.name.localeCompare(b.dataset.name);
        } else if (sortOption === "date") {
            return new Date(b.dataset.date) - new Date(a.dataset.date);
        } else if (sortOption === "popular") {
            return b.dataset.popularity - a.dataset.popularity;
        }
    });

    // Gallery ko clean aur sorted products ko dubara add karein
    productGallery.innerHTML = "";
    products.forEach(product => productGallery.appendChild(product));
}

// Page load hone par default sorting ko 'Date Added' par set karein
document.addEventListener("DOMContentLoaded", () => {
    sortProducts();
});
