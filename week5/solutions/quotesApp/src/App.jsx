import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [favoriteQuotes, setFavoriteQuotes] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filteredQuotes, setFilteredQuotes] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    setIsLoading(prev => !prev);
    axios
      .get('https://api.quotable.io/random')
      .then(res => {
        setQuote(res.data);
        console.log('WHAAAAT?');
        setIsLoading(prev => !prev);
      })
      .catch(e => {
        console.log(e);
        setIsLoading(prev => !prev);
      });
  };
  const handleFav = () => {
    console.log(quote);
    !favoriteQuotes.includes(quote) && setFavoriteQuotes([quote, ...favoriteQuotes]);
    // const isQuoteInArray = favoriteQuotes.some(q => q.content === quote.content);
    // console.log(isQuoteInArray);
  };
  const handleSearch = e => {
    const keyword = e.target.value;
    setSearchKeyword(keyword);

    const filtered = favoriteQuotes.filter(q =>
      q.content.toLowerCase().includes(keyword.toLowerCase()),
    );

    !keyword ? setFilteredQuotes(null) : setFilteredQuotes(filtered);
  };
  return (
    <>
      {isLoading ? (
        <div className="spinner-border text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div>
          <h2>{quote.content}</h2>
          <p>{quote.author}</p>
        </div>
      )}

      <div>
        <button onClick={fetchQuote}>New Quote</button>
        <button onClick={handleFav}>Add to Fav</button>
      </div>
      <div>
        <h2>Favorite Quotes</h2>
        <input type="text" value={searchKeyword} onChange={handleSearch} />
        <ul>
          {filteredQuotes
            ? filteredQuotes.map(q => (
                <li key={q._id}>
                  {q.content} - {q.author}
                </li>
              ))
            : favoriteQuotes.map(q => (
                <li key={q._id}>
                  {q.content} - {q.author}
                </li>
              ))}
        </ul>
      </div>
    </>
  );
}

export default App;
