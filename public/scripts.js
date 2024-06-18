document.addEventListener('DOMContentLoaded', function() {
    const fileList = document.getElementById('fileList');

    fetch('uploads.json')
        .then(response => response.json())
        .then(data => {
            data.files.forEach(file => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = `uploads/${file}`;
                link.textContent = file;
                listItem.appendChild(link);
                fileList.appendChild(listItem);
            });
        });
});
