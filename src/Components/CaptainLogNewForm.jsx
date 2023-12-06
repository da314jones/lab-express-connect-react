import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL

function BookmarkNewForm() {
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const addLog = () => {
    const httpOptions = {
      "method" : "POST",
      "body" : JSON.stringify(log),
      "headers" : {
        "Content-type" : "application/json"
      }
    }
    fetch(`${API}/logs`, httpOptions)
      .then((res) => {
        console.log(res)
        alert(`Log titled '${log.title}' was added to the database!`);
        navigate('/logs');
      })
      .catch((err) => console.error(err))
      }

  const handleSubmit = (event) => {
    event.preventDefault();
    addLog();
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Captain Name:</label>
        <input
          id="captainName"
          value={log.captainName}
          type="text"
          onChange={ handleTextChange }
          placeholder="Captain's Name"
          required
        />
        <label htmlFor="url">Title:</label>
        <input
          id="title"
          type="text"
          required
          value={log.title}
          placeholder="Log Title"
          onChange={handleTextChange}
        />
        <label htmlFor="category">Post:</label>
        <input
          textarea
          id="post"
          type="text"
          value={log.post}
          placeholder="Log Post"
          onChange={handleTextChange}
        />
        <label htmlFor="isFavorite">Favorite:</label>
        <input
          id="isFavorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={bookmark.isFavorite}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={bookmark.description}
          onChange={handleTextChange}
          placeholder="Describe why you bookmarked this site"
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
          placeholder="0"
          required
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default BookmarkNewForm;
