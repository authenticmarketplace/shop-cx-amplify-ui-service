export const contentList = [
    {
      url: 'https://www.youtube.com/embed/pwDr7yfuErE',
      type: 'Music'
    },
    {
      url: 'https://www.youtube.com/embed/UqrW0-OUExc',
      type: 'Music'
    },
    {
      url: 'https://www.youtube.com/embed/fwmrAgmfVk8',
      type: 'Music'
     },
     { 
       url: 'https://www.youtube.com/embed/UOrv5ZSbTIY',
       type: 'Music'
     }
    ];

export const settings = {
    autoplay: false,
    autoplaySpeed: 5000,
    dots: false,
    pauseOnHover: true,
    pauseOnFocus: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
          breakpoint: 800,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
          }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    };