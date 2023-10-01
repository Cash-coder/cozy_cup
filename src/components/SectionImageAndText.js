


export default function SectionImageAndText( {title, text, imageUrl, imageAlt} ) {
  return (
    <section>
      <h3>{title}</h3>
      <p>{text}</p>
      <img src={imageUrl} alt={imageAlt} />
    </section>

  )
}