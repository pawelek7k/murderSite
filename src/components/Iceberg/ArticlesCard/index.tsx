import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ErrorComp } from "../../Error";
import { Loader } from "../../Loader";
import { InputComponent } from "../Input";
import { CardContainer, CardsList, Container } from "./Styles";

interface Article {
  id: number;
  title: string;
  description: string;
}

interface ApiResponse {
  total: number;
  limit: number;
  skip: number;
  data: Article[];
}

export const ArticlesCard = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3030/articles");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result: ApiResponse = await response.json();

        const articlesData = result.data.map((article) => ({
          id: article.id,
          title: article.title,
          description: article.description,
        }));

        setArticles(articlesData);
        setFilteredArticles(articlesData);
      } catch (error) {
        console.error(error);
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (searchTerm: string) => {
    if (searchTerm.trim() === "") {
      setFilteredArticles(articles);
    } else {
      const filtered = articles.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredArticles(filtered);
    }
  };

  return (
    <Container>
      <InputComponent onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorComp />}
      {!loading && !error && (
        <CardsList>
          {filteredArticles.map((article) => (
            <CardContainer key={article.id}>
              <Link
                to={`/Iceberg/id=${article.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </Link>
            </CardContainer>
          ))}
        </CardsList>
      )}
      {!loading && !error && articles.length === 0 && <p>No articles found</p>}
    </Container>
  );
};
