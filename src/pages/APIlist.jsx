import React, { useEffect, useState } from "react";

export default function APIList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("technology"); // default search term

  const API_KEY = "pub_daabc66bc30547fb9dc8ed8b86e06dbe";

  const fetchArticles = async (searchTerm = "technology") => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://newsdata.io/api/1/news?apikey=${API_KEY}&language=en&q=${searchTerm}`
      );

      if (!res.ok) throw new Error("Network response was not ok");

      const data = await res.json();

      if (data.results) {
        setArticles(data.results);
      } else {
        setArticles([]);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchArticles(query);
  };

  if (loading) return <div className="p-4 text-center">Loading articles…</div>;
  if (error) return <div className="p-4 text-center text-red-600">Error: {error}</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* 🔍 Search Bar */}
      <form onSubmit={handleSearch} className="mb-6 flex items-center gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for news topics (e.g. AI, sports, health)"
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* 📰 Articles List */}
      {articles.length === 0 ? (
        <p className="text-center text-gray-600">No articles found.</p>
      ) : (
        <div className="space-y-4">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg"
            >
              <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {article.description || article.content || "No description available."}
              </p>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
