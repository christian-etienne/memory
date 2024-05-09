import React, { useState, useEffect } from 'react';
import image1 from '../assets/as_carte.jpg';
import image2 from '../assets/Dos_carte.jpg';
import image3 from '../assets/king_carte.jpg';
import image4 from '../assets/queen_carte.jpg';
import gagneVideo from '../assets/gagne.mp4'; 
import './Card.css';

const images = [
  { id: 1, recto: image2, verso: image1 },
  { id: 2, recto: image2, verso: image1 },
  { id: 3, recto: image2, verso: image3},
  { id: 4, recto: image2, verso: image4 },
  { id: 5, recto: image2, verso: image3 },
  { id: 6, recto: image2, verso: image4 },
  { id: 7, recto: image2, verso: image1 },
  { id: 8, recto: image2, verso: image4 },
  { id: 9, recto: image2, verso: image3 },
];

const Card = ({ image, onCardClick, matched }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    if (!flipped && !matched) {
      setFlipped(true);
      onCardClick(image);
    }
  };

  useEffect(() => {
    let timeoutId;
    if (flipped && !matched) {
      timeoutId = setTimeout(() => {
        setFlipped(false);
      }, 3000);
    }
    return () => clearTimeout(timeoutId);
  }, [flipped, matched]);

  useEffect(() => {
    setFlipped(false);
  }, [image, matched]);

  return (
    <div className={`card ${flipped || matched ? 'flipped' : ''}`} onClick={handleClick}>
      <img src={(flipped || matched) ? image.verso : image.recto} alt="Carte" />
    </div>
  );
};

const MemoryGame = () => {
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (clickedCard) => {
    setFlippedCards((prevFlippedCards) => [...prevFlippedCards, clickedCard]);
  };

  useEffect(() => {
    if (flippedCards.length === 3) {
      const allHaveSameVerso = flippedCards.every(
        (card, index, array) => card.verso === array[0].verso
      );
      if (allHaveSameVerso) {
        setMatchedCards((prevMatchedCards) => [...prevMatchedCards, ...flippedCards]);
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 3000);
      }
    }

    if (matchedCards.length === images.length) {
      setGameOver(true);
    }
  }, [flippedCards, matchedCards, images]);

  const handleRestart = () => {
    setFlippedCards([]);
    setMatchedCards([]);
    setGameOver(false);
  };

  return (
    <div className="container">
      <div className="row">
        {images.map((image) => (
          <div className="item" key={image.id}>
            <Card image={image} onCardClick={handleCardClick} matched={matchedCards.includes(image)} />
          </div>
        ))}
      </div>
      {gameOver && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <video autoPlay loop muted>
              <source src={gagneVideo} type="video/mp4" /> {/* Mettez à jour cette ligne */}
              
            </video>

            <button className="restart-btn" onClick={handleRestart}>Recommencer</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemoryGame;
