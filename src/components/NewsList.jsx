import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchNewsArticles = async () => {
            const apiKey = import.meta.env.VITE_NEWS_API_KEY;
            const apiUrl = 'https://newsapi.org/v2/everything';
            const query = 'anime';
            const pageSize = 10;

            const url = `${apiUrl}?q=${query}&pageSize=${pageSize}&apiKey=${apiKey}`;
            try {
                const response = await axios.get(url);
                const data = response.data;

                if (data.status === 'ok') {
                    setArticles(data.articles);
                } else {
                    throw new Error('Failed to fetch news articles');
                }
            } catch (error) {
                console.error('Error fetching news articles:', error);
            }
        };

        fetchNewsArticles();
    }, []);

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-semibold mb-8 text-center">Headlines</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
                {articles.filter(article => article.title && article.description && article.author && article.urlToImage).map((article, index) => (
                    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:scale-105">
                        <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                            <p className="text-gray-600 mb-4">{article.description}</p>
                            <p className="text-gray-500">{article.author}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsList;
