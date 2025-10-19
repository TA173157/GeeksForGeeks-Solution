document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('files');
    const previewContainer = document.getElementById('image-preview');
    const MAX_FILES = 10;

    fileInput.addEventListener('change', () => {
        previewContainer.innerHTML = ''; // Clear previous previews
        const files = fileInput.files;

        if (files.length > MAX_FILES) {
            alert(`You can only upload a maximum of ${MAX_FILES} images.`);
            fileInput.value = ''; // Reset the input
            return;
        }

        for (const file of files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.width = '100px'; // Set a fixed preview size
                img.style.margin = '5px';
                previewContainer.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    });
});
