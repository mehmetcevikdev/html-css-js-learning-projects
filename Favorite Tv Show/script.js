document.addEventListener("DOMContentLoaded", () => {
    const bookmarks = document.querySelectorAll(".bookmark");

    bookmarks.forEach((btn) => {
        const episode = btn.closest(".episodes-item");
        const episodeId = episode.getAttribute("data-id");
        const isBookmarked = localStorage.getItem(`bookmark-${episodeId}`) === "true";

        if (isBookmarked) {
            btn.classList.add("active");
            btn.innerHTML = '<i class="bi bi-bookmark-fill"></i>'; // Dolu ikon
        }

        btn.addEventListener("click", () => {
            const isActive = btn.classList.toggle("active");
            localStorage.setItem(`bookmark-${episodeId}`, isActive);

            // İkon değiştir
            btn.innerHTML = isActive
                ? '<i class="bi bi-bookmark-fill"></i>'
                : '<i class="bi bi-bookmark"></i>';
        });
    });
});