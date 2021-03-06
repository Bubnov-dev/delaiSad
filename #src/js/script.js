$(document).ready(function () {

    $('.services__list').slick({
        // centerMode: true,
        arrows: true,
        // centerPadding: '26%',
        slidesToShow: 4,

        infinite: false,
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.69963 15.49C8.69527 15.3054 8.61812 15.13 8.48499 15.002L1.97991 8.49688L8.48499 1.99181C8.55204 1.92657 8.60534 1.84856 8.64174 1.76238C8.67814 1.6762 8.69689 1.5836 8.6969 1.49005C8.69686 1.35079 8.6553 1.21472 8.57752 1.09921C8.49974 0.983702 8.38928 0.894016 8.26026 0.841616C8.13124 0.789216 7.98953 0.776483 7.85324 0.805046C7.71694 0.833609 7.59227 0.902169 7.49514 1.00196L0.495141 8.00196C0.363916 8.13324 0.290198 8.31126 0.290198 8.49688C0.290198 8.6825 0.363916 8.86053 0.495141 8.99181L7.49514 15.9918C7.5929 16.0935 7.71908 16.1632 7.85716 16.192C7.99524 16.2207 8.13877 16.207 8.26896 16.1528C8.39916 16.0986 8.50993 16.0063 8.58678 15.888C8.66363 15.7698 8.70296 15.631 8.69963 15.49V15.49Z" fill="#5B5B5B" /></svg></button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Previous" type="button"><svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.290416 1.50683C0.294782 1.69147 0.371934 1.86691 0.505065 1.99492L7.01014 8.5L0.505065 15.0051C0.438009 15.0703 0.384708 15.1483 0.34831 15.2345C0.311913 15.3207 0.293157 15.4133 0.293151 15.5068C0.293188 15.6461 0.334753 15.7822 0.412533 15.8977C0.490312 16.0132 0.600772 16.1029 0.72979 16.1553C0.858809 16.2077 1.00052 16.2204 1.13682 16.1918C1.27311 16.1633 1.39779 16.0947 1.49491 15.9949L8.49491 8.99492C8.62614 8.86364 8.69985 8.68562 8.69985 8.5C8.69985 8.31438 8.62614 8.13635 8.49491 8.00507L1.49491 1.00507C1.39715 0.903415 1.27097 0.833652 1.13289 0.804924C0.994813 0.776196 0.851277 0.789842 0.721086 0.844076C0.590895 0.89831 0.48012 0.990602 0.403273 1.10886C0.326425 1.22712 0.287089 1.36584 0.290416 1.50683Z" fill="#5B5B5B" /></svg></button>',
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2.5,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1.3,
                }
            },

            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });

    $('.gallery__show-switch .more').on('click', function () {
        $('.gallery__show-switch .less').removeClass('hidden')
        $(this).addClass('hidden')
        $('.gallery__grid.not-first').removeClass('hidden')
    });

    $('.gallery__show-switch .less').on('click', function () {
        $('.gallery__show-switch .more').removeClass('hidden')
        $(this).addClass('hidden')
        $('.gallery__grid.not-first').addClass('hidden')
    });
});