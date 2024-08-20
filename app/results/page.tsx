import { useSearchParams } from 'next/navigation';

const ResultsPage = async () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query');

  const res = await fetch(`http://localhost:3000/api/news?query=${query}`);
  const data = await res.json();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Results for {`"{query}"`}</h2>
      <ul>
        {data.articles.map((article: any, index: number) => (
          <li key={index} className="mb-4">
            <a href={article.url} target="_blank" className="text-blue-500">
              <h3 className="text-xl font-bold">{article.title}</h3>
              <p>{article.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsPage;
