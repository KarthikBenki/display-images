import "./App.css";

import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/card/Card";

let start = 1;
let end = 10;

function App() {
  const [photos, setPhotos] = useState([]);
  const [showPhotos, setShowPhotos] = useState([]);

  const getPhotos = () => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      setPhotos(res.data);
      setShowPhotos(
        res.data.filter((photo) => {
          return photo.id >= start && photo.id <= end;
        })
      );
    });
  };

  useEffect(() => {
    getPhotos();
  }, []);

  const renderNext = () => {
    if (end <= 4990) {
      start = start + 10;
      end = end + 10;
      setShowPhotos(
        photos.filter((photo) => {
          return photo.id >= start && photo.id <= end;
        })
      );
    }
  };

  const renderPrevious = () => {
    if (start >= 10) {
      start = start - 10;
      end = end - 10;
      setShowPhotos(
        photos.filter((photo) => {
          return photo.id >= start && photo.id <= end;
        })
      );
    }
  };
  return (
    <div className="App">
      <h1>{showPhotos.length}</h1>
      <div className="gallery">
        {showPhotos.map((photo) => {
          return (
            <div key={photo.id}>
              <Card id={photo.id} name={photo.title} url={photo.url} />
            </div>
          );
        })}
      </div>
      <div className="button-container">
        <button className="prev-button" onClick={renderPrevious}>
          previous
        </button>
        <button className="next-button" onClick={renderNext}>
          next
        </button>
      </div>
    </div>
  );
}

export default App;
