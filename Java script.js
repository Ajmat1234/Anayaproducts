function sortProducts() {
    console.log("Sorting triggered"); // Debugging: Check if function is called
    const sortOption = document.getElementById("sort-options").value;
    const gallery = document.getElementById("product-gallery");
    const products = Array.from(gallery.getElementsByClassName("product-item"));

    products.sort((a, b) => {
        if (sortOption === "name") {
            // Sort by name (alphabetical order)
            return a.getAttribute("data-name").localeCompare(b.getAttribute("data-name"));
        } else if (sortOption === "date") {
            // Sort by date (most recent first)
            return new Date(b.getAttribute("data-date")) - new Date(a.getAttribute("data-date"));
        } else if (sortOption === "popular") {
            // Sort by popularity (highest first)
            return b.getAttribute("data-popularity") - a.getAttribute("data-popularity");
        }
    });

    // Clear existing product items
    gallery.innerHTML = "";

    // Re-add sorted product items
    products.forEach(product => gallery.appendChild(product));
}

// Default sorting by date on page load
document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded"); // Debugging: Check if page load triggers function
    document.getElementById("sort-options").value = "date";
    sortProducts();
});
