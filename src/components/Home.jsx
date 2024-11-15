import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const fetchNews = async () => {
    try {
      const response = await axios.get("https://newsapi.org/v2/top-headlines", {
        params: {
          country: "us",
          apiKey: import.meta.env.VITE_NEWS_API_KEY, // Replace with your actual API key
        },
      });
      setArticles(response.data.articles);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (loading) {
    return <div className="text-center my-5">Loading...</div>;
  }

  const getCategoryBadge = (article) => {
    const title = article.title.toLowerCase();
    const description = article.description?.toLowerCase() || "";
    let category = "General";

    if (title.includes("technology") || description.includes("technology")) {
      category = "Technology";
    } else if (title.includes("business") || description.includes("business")) {
      category = "Business";
    } else if (title.includes("sports") || description.includes("sports")) {
      category = "Sports";
    } else if (title.includes("politics") || description.includes("politics")) {
      category = "Politics";
    } else if (title.includes("health") || description.includes("health")) {
      category = "Health";
    }

    return category;
  };

  const filteredArticles = articles
    .filter((article) => {
      if (filter === "All") return true;
      return getCategoryBadge(article) === filter;
    })
    .filter((article) => {
      const query = searchQuery.toLowerCase();
      return (
        article.title.toLowerCase().includes(query) ||
        (article.description && article.description.toLowerCase().includes(query))
      );
    });

  return (
    <div>
      <Navbar setFilter={setFilter} setSearchQuery={setSearchQuery} />
      <div className="container my-5">
        <h1 className="mb-4 pt-4 text-center">{filter} News</h1>
        <div className="row">
          {filteredArticles.map((article, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="card h-100 shadow-sm border-0">
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    className="card-img-top"
                    alt={article.title}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text text-muted">{article.description}</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-warning btn-sm"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
