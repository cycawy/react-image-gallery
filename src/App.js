import reactDom from "react-dom";
import { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=22307881-2ce5a7717b37330e9e38a8413&q=${term}&image_type=photo&pretty=true`)
      .then(res=>res.json())
      .then(data=>{
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err=>console.log(err));
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {images.map(image=>(
          <ImageCard key={image.id} image={image}/>
        ))}
      </div>

    </div>
  );
}

export default App;
