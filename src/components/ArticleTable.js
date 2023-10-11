import '../styles/articleTable.css';

// title, textBanner, bulletPoints, brandImg, textButton
export default function ArticleTable( {
    title, productTableData }) {
  return (
    <section className="article-table">
      <h2>{title}</h2>
      <table>
        <tbody>
        {productTableData.map((product, index) => (
          <tr key={index}>
            <td className="nameTd">
              {product.title}
            </td>
            <td className="imgTd">
              <span>{product.textBanner}</span>
              <img
                src={product.prodImg}
                alt={product.title}/>
            </td>
            <td className="listTd">
              <ul>
                {product.bulletPoints.map((
                  point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </td>
            <td className="buttonTd">
              <div className="innerBtnTdDiv">
                <img
                  src={product.brandImg}
                  alt={product.title}
                />
                <a className="innerButtonTd"
                  href="#">
                </a>
              </div>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </section>
  )
}