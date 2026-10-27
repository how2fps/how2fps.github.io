(() => {
    const dialog = document.getElementById("image-viewer");
    const image = document.getElementById("image-viewer-image");
    const title = document.getElementById("image-viewer-title");
    const closeButton = document.getElementById("image-viewer-close");
    let opener;

    document.addEventListener("click", (event) => {
        const target = event.target.closest("#content a, #content img");
        if (!target) return;
        const link = target.closest("a");
        const thumbnail = target.closest("[data-screenshot]");
        const selected = thumbnail?.closest(".screenshot-gallery").querySelector(".screenshot-full img");
        const sourceImage = selected || (target.matches("img") ? target : target.querySelector("img"));
        const source = selected?.src || link?.href || sourceImage?.src;
        if (!source || !/\.(?:png|jpe?g|webp|gif|svg|avif)(?:[?#]|$)/i.test(source)) return;
        event.preventDefault();
        opener = thumbnail || link || document.activeElement;
        image.src = source;
        image.alt = sourceImage?.alt || "Project image";
        title.textContent = target.closest(".screenshot-gallery")?.querySelector(".screenshot-title")?.textContent || image.alt;
        dialog.showModal();
        closeButton.focus();
    });
    closeButton.addEventListener("click", () => dialog.close());
    dialog.addEventListener("cancel", (event) => { event.preventDefault(); dialog.close(); });
    dialog.addEventListener("click", (event) => {
        if (event.target !== dialog) return;
        const bounds = dialog.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
    });
    dialog.addEventListener("close", () => {
        image.removeAttribute("src");
        if (opener?.isConnected) opener.focus();
    });
    window.addEventListener("hashchange", () => { if (dialog.open) dialog.close(); });
})();
