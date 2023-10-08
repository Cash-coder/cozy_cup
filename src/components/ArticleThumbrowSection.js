import '../styles/articleThumbrowSection.css'
import TableArticleThumbrow from "./TableArticleThumbrow";

export default function ArticleThumbrowSection({ title, paragraph, gridData}) {
  return (
    <section className="section-article-thumbrow">
      <h2>{title}</h2>
      <p>{paragraph}</p>
      <TableArticleThumbrow
        data={gridData}
      />
    </section>
  )
}