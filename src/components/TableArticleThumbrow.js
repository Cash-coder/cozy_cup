import '../styles/tableArticleThumbrow.css';

export default function TableArticleThumbrow({ data, dynamicId }) {
  return (
    <div id={dynamicId || undefined}>
      <div className="table-article-thumbrow">
        {data.map((item, index) => (
          <div
            className='thumbrow-article'
            key={index}>
            <a href={item.href || '#'}>
              <img
                src={item.imgSrc}
                alt={item.imgAlt || item.title}
              />
              <h5>{item.title}</h5>
            </a>
        </div>
      ))}
    </div>
    </div>
  );
}
