function sortProducts() {
    const sortOption = document.getElementById("sort-options").value;
    const productGallery = document.getElementById("product-gallery");
    const products = Array.from(productGallery.getElementsByClassName("product-item"));

    products.sort((a, b) => {
        if (sortOption === "name") {
            return a.getAttribute("data-name").localeCompare(b.getAttribute("data-name"));
        } else if (sortOption === "date") {
            return new Date(b.getAttribute("data-date")) - new Date(a.getAttribute("data-date"));
        } else if (sortOption === "popular") {
            return b.getAttribute("data-popularity") - a.getAttribute("data-popularity");
        }
    });

    // Sorted products ko product gallery mein add karein
    products.forEach(product => productGallery.appendChild(product));
}

// Page load hone par default sort by date lagane ke liye
document.addEventListener("DOMContentLoaded", () => {
    sortProducts();
});
