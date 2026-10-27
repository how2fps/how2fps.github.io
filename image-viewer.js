(() => {
    const dialog = document.getElementById("image-viewer");
    const image = document.getElementById("image-viewer-image");
    const title = document.getElementById("image-viewer-title");
    const closeButton = document.getElementById("image-viewer-close");
    const previous = document.getElementById("image-viewer-previous");
    const next = document.getElementById("image-viewer-next");
    const position = document.getElementById("image-viewer-position");
    let opener;
    let shots = [];
    let index = 0;
    let gallery;

    function showImage() {
        const shot = shots[index];
        image.src = shot.src;
        image.alt = shot.alt || "Project image";
        title.textContent = shot.title || image.alt;
        const multiple = shots.length > 1;
        previous.hidden = next.hidden = !multiple;
        previous.disabled = index === 0;
        next.disabled = index === shots.length - 1;
        position.textContent = multiple ? `${index + 1} / ${shots.length}` : "";
        // Keep the page gallery at the same image when the preview is closed.
        gallery?.querySelector(`[data-screenshot="${index}"]`)?.click();
        if (dialog.open && (index === 0 || index === shots.length - 1)) closeButton.focus();
    }
    function step(delta) {
        const destination = index + delta;
        if (destination < 0 || destination >= shots.length) return;
        index = destination;
        showImage();
    }

    document.addEventListener("click", (event) => {
        const target = event.target.closest("#content a, #content img");
        if (!target) return;
        if (target.closest("[data-screenshot]")) return;
        const link = target.closest("a");
        const thumbnail = target.closest("[data-screenshot]");
        const selected = thumbnail?.closest(".screenshot-gallery").querySelector(".screenshot-full img");
        const sourceImage = selected || (target.matches("img") ? target : target.querySelector("img"));
        const source = selected?.src || link?.href || sourceImage?.src;
        if (!source || !/\.(?:png|jpe?g|webp|gif|svg|avif)(?:[?#]|$)/i.test(source)) return;
        event.preventDefault();
        opener = thumbnail || link || document.activeElement;
        gallery = target.closest(".screenshot-gallery");
        const projectId = gallery?.closest("[data-project]")?.dataset.project;
        shots = window.portfolioData.projects.find(project => project.id === projectId)?.screenshots || [];
        index = shots.findIndex(shot => new URL(shot.src, location.href).href === new URL(source, location.href).href);
        if (index < 0) {
            gallery = null;
            shots = [{src: source, alt: sourceImage?.alt || "Project image"}];
            index = 0;
        }
        showImage();
        dialog.showModal();
        closeButton.focus();
    });
    closeButton.addEventListener("click", () => dialog.close());
    previous.addEventListener("click", () => step(-1));
    next.addEventListener("click", () => step(1));
    dialog.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            step(event.key === "ArrowLeft" ? -1 : 1);
        }
    });
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
