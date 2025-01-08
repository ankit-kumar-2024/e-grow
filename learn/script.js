document.getElementById("loadContentButton").onclick = async function() {
    // Fetch content from the first HTML file (e.g., "page1.html")
    try {
        const response1 = await fetch("page1.html");
        if (!response1.ok) {
            throw new Error(`Failed to load page1.html: ${response1.status}`);
        }
        const htmlContent1 = await response1.text();
        document.getElementById("div1").innerHTML = htmlContent1;
    } catch (error) {
        console.error("Error loading page1.html:", error);
        document.getElementById("div1").innerHTML = "<p>Error loading content for div1.</p>";
    }

    // Fetch content from the second HTML file (e.g., "page2.html")
    try {
        const response2 = await fetch("page2.html");
        if (!response2.ok) {
            throw new Error(`Failed to load page2.html: ${response2.status}`);
        }
        const htmlContent2 = await response2.text();
        document.getElementById("div2").innerHTML = htmlContent2;
    } catch (error) {
        console.error("Error loading page2.html:", error);
        document.getElementById("div2").innerHTML = "<p>Error loading content for div2.</p>";
    }
};
