import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ErrorComp } from "../components/Error";
import { Heading } from "../components/Heading/h2";
import { HeadingH3 } from "../components/Heading/h3";
import { Loader } from "../components/Loader";
import { Main } from "../components/Main";
import { Paragraph } from "../components/Paragraph";
import {
  DataWrapper,
  DetailsContainer,
  Victims,
  VictimsList,
} from "./styles/styles";

export const ArticleDetails = () => {
  const { id } = useParams<{ id: string }>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`http://localhost:3030/articles/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setArticle(result);
        setLoading(false);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorComp />;
  }

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <Main>
      <DetailsContainer>
        <Heading $visually={true}>{article.title}</Heading>
        <DataWrapper>
          <p>{article.date}</p>
          <p>{article.location}</p>
        </DataWrapper>
        <Paragraph>{article.description}</Paragraph>
        <HeadingH3>Victims:</HeadingH3>
        <VictimsList>
          {article.victims.map((victim: string, index: number) => (
            <Victims key={index}>{victim}</Victims>
          ))}
        </VictimsList>
        <HeadingH3>Details</HeadingH3>
        <p>{article.details}</p>
        <HeadingH3>Psychological Background</HeadingH3>
        <p>{article.psychologicalBackground}</p>
        <HeadingH3>Lawsuit</HeadingH3>
        <p>{article.lawsuit}</p>
        <HeadingH3>Social Reaction</HeadingH3>
        <p>{article.socialReactions}</p>
        <HeadingH3>Legacy and Impact</HeadingH3>
        <p>{article.legacyAndImpact}</p>
      </DetailsContainer>
    </Main>
  );
};
