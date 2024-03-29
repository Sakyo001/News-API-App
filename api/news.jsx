// api/news.js
export default async function handler(req, res) {
    const { query } = req.query;

    try {
        const apiKey = process.env.NEWS_API_KEY;
        const apiUrl = 'https://newsapi.org/v2/everything';
        const pageSize = 10;

        const url = `${apiUrl}?q=${query}&pageSize=${pageSize}&apiKey=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.status === 'ok') {
            res.status(200).json({ status: 'ok', articles: data.articles });
        } else {
            res.status(500).json({ status: 'error', message: 'Failed to fetch news articles' });
        }
    } catch (error) {
        console.error('Error fetching news articles:', error);
        res.status(500).json({ status: 'error', message: 'Failed to fetch news articles' });
    }
}
