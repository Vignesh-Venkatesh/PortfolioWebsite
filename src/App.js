import Navbar from './Navbar'
import "./CSS/App.css"
import Picture from './Picture'
import ProjectCard from './ProjectCard'
import {Helmet} from "react-helmet";

function App() {

  return (
    
    <div className="App"> 
      <Helmet>
        <meta charSet="utf-8" />
        <title>Vignesh's Portfolio</title>
        <link rel="canonical" href="https://vignesh-venkatesh.github.io/PortfolioWebsite/" />
      </Helmet>
    
      <Navbar />
      <Picture />

      {/* Details */}
      <p className="typing">Hey, I'm <span className="typing-name">Vignesh</span><span className="blinker">|</span></p>
      <p className="typing">Studying <span className="typing-name">B.S. Computer Science</span><span className="blinker">|</span></p>
      <p className="typing">At the <span className="typing-name">Pennsylvania State University</span><span className="blinker">|</span></p>
      
      {/* Project Cards */}
      <div className="project-cards-container">
        <ProjectCard
          title="School Library Management System"
          description="Created a School Library Management System which includes both, admin and student UI."
          // imageSrc="https://example.com/my-project-image.jpg"
          programmingLang="Python"
          link="https://github.com/Vignesh-Venkatesh/SchoolLibraryManagementSystem"
        />
        <ProjectCard
          title="Python Photo Watermarker"
          description="Made a python program to help me with watermarking the photographs that I took, in bulk."
          // imageSrc="https://example.com/my-project-image.jpg"
          programmingLang="Python"
          link="https://github.com/Vignesh-Venkatesh/photo-watermarker"
        />
        {/* <ProjectCard
          title="MP3 Song Downloader"
          description="Made a python program to help me with downloading music from the internet and editing the metadata"
          imageSrc="https://example.com/my-project-image.jpg"
          programmingLang="Python"
        /> */}
        <ProjectCard 
          title="Spotify Exploratory Data Analysis"
          description="Conducted an Exploratory Data Analysis on the Spotify Dataset and understood trends and insights."
          // imageSrc="https://example.com/my-project-image.jpg"
          programmingLang="Python"
          link="https://github.com/Vignesh-Venkatesh/SpotifyEDA"
        />
        
      </div>

      
    </div>
    
  )
}

export default App;
