import React, { useState } from 'react';
import image1 from '../assets/as_carte.jpg';
import image2 from '../assets/Dos_carte.jpg';
import image3 from '../assets/king_carte.jpg';
import image4 from '../assets/queen_carte.jpg';
import './card.css';

const images = [
  { id: 1, recto: image2, verso: image1 },
  { id: 2, recto: image2, verso: image3 },
  { id: 3, recto: image2, verso: image4 },
  { id: 4, recto: image2, verso: image1 },
  { id: 5, recto: image2, verso: image3 },
  { id: 6, recto: image2, verso: image4 },
];

const Card = ({ image }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(true);
    setTimeout(() => setFlipped(false), 60000); // Retourne à l'endroit après 60 secondes
  };

  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleClick}>
      <img src={flipped ? image.verso : image.recto} alt="Carte" />
    </div>
  );
};

const MemoryGame = () => {
  return (
    <div className="container">
      <div className="row">
        {images.map(image => (
          <div className="col-md-3 mb-4" key={image.id}>
            <Card image={image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;
