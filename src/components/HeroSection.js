import CustomImage from "./CustomImage";

export default function HeroSection() {
    const images = [
        "/images/foodgallery/img1.jpeg",
        "/images/foodgallery/img2.jpeg",
        "/images/foodgallery/img3.jpeg",
        "/images/foodgallery/img4.jpeg",
        "/images/foodgallery/img5.jpeg",
        "/images/foodgallery/img6.jpeg",
        "/images/foodgallery/img7.jpeg",
        "/images/foodgallery/img8.jpeg",
        "/images/foodgallery/img9.jpeg"
        
    ]
  return (
    <div className="section hero">
      <div className="column typography">
        <h1 className="title">What do we stand for</h1>
        <p className="info">
          TasteTales is a user-friendly recipe book app that allows users to
          explore, save, and share a diverse collection of recipes from around
          the world. With its intuitive interface and personalized
          recommendations, TasteTales makes cooking enjoyable and accessible for
          everyone.
        </p>
        <button className="btn">Explore now</button>
      </div>
      <div className="column gallery">
        {images.map((src, index) =>(
           <CustomImage key={index} imgSrc={src} pt={"90%"}/>
        ) )}
        
      
      </div>
    </div>
  );
}
