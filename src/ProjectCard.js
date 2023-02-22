import "./CSS/ProjectCard.css"

function ProjectCard({ title, description, imageSrc, programmingLang, link}) {
  return (
    <div className="project-card">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />
      {/* <img src={imageSrc} alt={title} /> */}
      <h2>{title}</h2>
      <ul>
        <li><span className="project-text">Description: </span>{description}</li>
        <br />
        <li><span className="project-text">Language Used: </span>{programmingLang}</li>
      </ul>
      <a href={link}><i class="fa-brands fa-github"></i></a>
    </div>
  );
}

export default ProjectCard;