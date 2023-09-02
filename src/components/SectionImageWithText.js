import getUrlBaseName from '../hooks/getUrlBaseName';
import '../styles/sectionImageWithText.css';
export default function SectionImageWithText( { title, text, imageUrl, imageId, sectionClassname, sectionId } ) {

  // Apply class and id conditionally
  const sectionAttributes = {}
  const imageAttributes = {}

  if(sectionClassname) {
    sectionAttributes.className = sectionClassname;
  }
  if (sectionId) {
    sectionAttributes.id = sectionId;
  }
  if(imageId) {
    imageAttributes.id = imageId;
  }

  return (
    <section {...sectionAttributes}>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div>
        <img
          src= {imageUrl}
          alt= {getUrlBaseName(imageUrl)}
        />
      </div>
    </section>
  )
}