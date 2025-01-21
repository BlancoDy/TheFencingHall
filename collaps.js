function toggleCategory(element) {
    const videoList = element.nextElementSibling;
    if (videoList.style.display === "block") {
        videoList.style.display = "none";
    } else {
        videoList.style.display = "block";
    }
}