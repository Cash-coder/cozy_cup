

export default function PostBanner({ img, text }) {

  return (
    <section className="post-banner">
      <div className="post-image-container">
        <img
          src={img.src}
          alt={img.alt}
        />
      </div>
      <div className="post-text-container">
        <h1>{text.title}</h1>
        <p>{text.paragraph}</p>
      </div>
    </section>
  )
}