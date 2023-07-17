document.addEventListener('DOMContentLoaded', function() {
    const galleryData = [
        {
            title: 'Darbas 1',
            img_url: 'pics/img.jpg',
            tags: ['js', 'html', 'css', 'python'],
        },
        {
            title: 'Darbas 2',
            img_url: 'pics/img.jpg',
            tags: ['js', 'python'],
        },
        {
            title: 'Darbas 3',
            img_url: 'pics/img.jpg',
            tags: ['python'],
        }
    ];

    let galleryDOMelement = document.querySelector('#work_gallery');

    for (let DataofGalery of galleryData) {
        const div = document.createElement('div');
        const img = document.createElement('img');
        const span = document.createElement('span');

        img.src = DataofGalery.img_url;
        img.alt = DataofGalery.title;
        span.innerText = DataofGalery.title;

        div.append(img);
        div.append(span);

        galleryDOMelement.append(div);
    }
});