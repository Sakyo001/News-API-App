import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

const Carousel = () => {
    const [fetchedArticles, setFetchedArticles] = useState([]);

    useEffect(() => {
        const fetchNewsArticles = async () => {
            const apiKey = import.meta.env.VITE_NEWS_API_KEY;
            const apiUrl = 'https://newsapi.org/v2/everything';
            const query = 'solo leveling anime english';
            const pageSize = 10;

            const url = `${apiUrl}?q=${query}&pageSize=${pageSize}&apiKey=${apiKey}`;
            try {
                const response = await axios.get(url);
                const data = response.data;

                if (data.status === 'ok') {
                    setFetchedArticles(data.articles);
                } else {
                    throw new Error('Failed to fetch news articles');
                }
            } catch (error) {
                console.error('Error fetching news articles:', error);
            }
        };

        fetchNewsArticles();
    }, []);

    const settings = {
        dots: true,
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
                breakpoint: 600,
                settings: {
                    slidesToShow: 1, 
                    slidesToScroll: 1,
                    initialSlide: 0 
                }
            }
        ]
    };

    return (
        <div className="mt-11 mb-16 container mx-auto px-2 md:px-4"> 
            <h1 className="text-3xl font-semibold mb-8 text-center">Latest News</h1>
            <Slider {...settings}>
                {fetchedArticles.filter(article => article.title && article.description && article.author).map((article, index) => (
                    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                        {article.urlToImage && (
                            <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover" />
                        )}
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                            <p className="text-gray-600 mb-4">{article.description}</p>
                            <p className="text-gray-500">{article.author}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
