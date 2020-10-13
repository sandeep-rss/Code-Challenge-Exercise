/**
 * Function to initialize the main e-commerce application
 * @returns {Void}
 */
function onload() {
    const container = document.createElement('div');
    container.className = 'product-container';

    const prodElement = document.getElementById('product');
    prodElement.appendChild(container);

    const closeSpan = document.createElement('span');
    const closeControl = document.createElement('span');
    closeControl.className = 'close-control';

    const leftImage = document.createElement('div');
    leftImage.className = "left";

    const rightImage = document.createElement('div');
    rightImage.className = "right";

    data.groups.forEach(item => {

        const mainProduct = document.createElement('div');
        const heroImage = document.createElement('div');
        heroImage.className = 'view-img';
        heroImage.style = style = "background-image: url('" + item.hero.href + "')";

        const heroContainer = document.createElement('div');
        heroContainer.className = 'mask flex-center rgba-blue-light';
        mainProduct.appendChild(heroContainer);
        mainProduct.appendChild(heroImage);
        mainProduct.className = 'view';
        mainProduct.appendChild(heroImage);

        const productName = document.createElement('p');
        productName.className = "white-text";
        const nameText = document.createTextNode(item.name);
        productName.appendChild(nameText);

        const priceRange = item.priceRange;
        const price = item.price;
        let regularPrice;
        let sellingPrice;
        if (priceRange) {
            regularPrice = priceRange.regular.high;
            sellingPrice = priceRange.selling.high;
        }
        if (price) {
            regularPrice = price.regular;
            sellingPrice = price.selling;
        }

        const priceRegular = document.createElement('p');
        priceRegular.className = "regular-price";
        const regPriceText = document.createTextNode(`$${regularPrice}`);

        const priceSelling = document.createElement('p');
        priceSelling.className = "selling-price";
        const selPriceText = document.createTextNode(`$${sellingPrice}`);

        const priceContainer = document.createElement('div');
        priceContainer.className = 'price-container';

        //Appending sellingPrice anf RegularPrice to Text
        priceSelling.appendChild(selPriceText);
        priceRegular.appendChild(regPriceText);

        productName.appendChild(nameText);

        const regRating = item.reviews.averageRating;

        heroContainer.appendChild(productName);

        priceContainer.appendChild(priceSelling);
        priceContainer.appendChild(priceRegular);

        const rating = document.createElement('span');
        rating.className = 'rating';
        const rateText = document.createTextNode(regRating);
        rating.appendChild(rateText);
        priceContainer.appendChild(rating);
        mainProduct.appendChild(priceContainer);

        const thumbnailView = document.createElement('div');
        thumbnailView.className = 'view-modal';


        thumbnailView.style = style = "display:none;background-image: url('" + item.thumbnail.href + "')";
        mainProduct.onclick = function() {

            closeThumbnail(thumbnailView, mainProduct);
            thumbnailGen(thumbnailView, item, mainProduct, closeSpan, leftImage, rightImage, closeControl);
        }
        container.appendChild(thumbnailView);
        container.appendChild(mainProduct);
    });
}

/**
 * Function which enlarge the images
 * @returns {Void}
 */
function enlarge() {
    const enlarge = document.getElementById('enlarge');
    enlarge.style = "display:block;width: 50%";
}

/**
 * Function to act upon leaving display
 * @returns {Void}
 */
function leave() {
    const enlarge = document.getElementById('enlarge');
    enlarge.style = "display:none";
}

/**
 * Function which takes care of loading thumbnail on click
 * @param thumbnailView HTML Thumbnail view element
 * @param imageHref ImageHref url
 * @param mainProduct Product Container element
 * @returns {Void}
 */
function loadThumbnail(thumbnailView, imageHref, mainProduct) {
    const style = ''
    thumbnailView.style = style + "display:block;background-image: url('" + imageHref + "');background-repeat:no-repeat";
    mainProduct.style = "display:none";
    thumbnailView.className = "view thumb-nail";
}

/**
 * Function to have the images slide
 * @param item Data Item
 * @param index Carousel present Index
 * @param carouselContainer Carousel Container HTML element
 * @param thumbnailView HTML Thumbnail view element
 * @returns {Void}
 */
function generateCarousel(item, index, carouselContainer, thumbnailView) {

    let eCarousel = document.getElementsByClassName('carousel');
    carouselContainer.innerHTML = '';

    item.images.forEach((image, value) => {
        const carousel = document.createElement('span');
        const classes = ['carousel'];

        if (value == index) {
            classes.push('select');
        }
        carousel.classList = classes.join(' ');
        carouselContainer.appendChild(carousel);
    });
}

/**
 * Function which enables to close the thumbnail view
 * @param thumbnailView HTML Thumbnail view element
 * @param mainProduct Product Container element
 * @returns {Void}
 */
function closeThumbnail(thumbnailView, mainProduct) {
    thumbnailView.style = "display:none";
    mainProduct.style = "display:block";
    thumbnailView.innerHTML = '';
    const eCarousel = document.getElementsByClassName('carousel-container');

    if (eCarousel.length > 0) {
        eCarousel[0].remove();
    }
    const closeControl = document.getElementsByClassName('close-control');
    if (closeControl.length > 0) {

        closeControl[0].click();
    }
}

/**
 * Function to generate the thumbnail upon image
 * @param thumbnailView HTML Thumbnail view element
 * @param item Data Item
 * @param mainProduct Product Container element
 * @param closeSpan HTML element
 * @param leftImage Left image element
 * @param rightImage Right Image Element
 * @param closeControl Close Control Element
 * @returns {Void}
 */
function thumbnailGen(thumbnailView, item, mainProduct, closeSpan, leftImage, rightImage, closeControl) {
    thumbnailView.innerHTML = '';
    let imageHref;
    if (item.images.length > 0) {
        const availableImages = item.images;
        imageHref = availableImages[0].href;
        loadThumbnail(thumbnailView, imageHref, mainProduct);

        closeSpan.onclick = function(e) {
            closeThumbnail(thumbnailView, mainProduct);
        }

        const carouselContainer = document.createElement('div');
        carouselContainer.className = 'carousel-container';

        let count = 0;
        generateCarousel(item, count, carouselContainer, thumbnailView);

        rightImage.onclick = function(e) {
            if (count == item.images.length - 1) {
                count = -1;
            }
            ++count;
            imageHref = availableImages[count].href;

            loadThumbnail(thumbnailView, imageHref, mainProduct);
            generateCarousel(item, count, carouselContainer, thumbnailView);
            e.stopPropagation();
        };
        leftImage.onclick = function(e) {
            if (count == 0) {
                count = item.images.length;
            }
            --count;
            imageHref = availableImages[count].href;

            loadThumbnail(thumbnailView, imageHref, mainProduct);
            generateCarousel(item, count, carouselContainer, thumbnailView);
            e.stopPropagation();
        }

        closeSpan.appendChild(leftImage);
        closeSpan.appendChild(rightImage);
        closeSpan.appendChild(closeControl);

        thumbnailView.appendChild(closeSpan);
        thumbnailView.appendChild(carouselContainer);
    } else {
        thumbnailView.appendChild(document.createTextNode('No thumbnail View Available'));
    }

}

onload();