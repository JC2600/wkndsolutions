// Function to load content into specific elements
async function loadContent(id, file) {
    try {
        // Calculate path prefix dynamically
        const pathDepth = window.location.pathname.split('/').length - 2;
        const pathPrefix = pathDepth > 0 ? '../'.repeat(pathDepth) : '';

        const response = await fetch(pathPrefix + file);

        if (!response.ok) {
            throw new Error(`Failed to load ${file}: ${response.status}`);
        }

        const content = await response.text();
        document.getElementById(id).innerHTML = content;
    } catch (error) {
        console.error(`Error loading ${file}:`, error);
    }
}

window.onload = function () {
    loadContent("header", "header.html");
    loadContent("footer", "footer.html");
};
