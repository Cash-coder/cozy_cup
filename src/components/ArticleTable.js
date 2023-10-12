import '../styles/articleTable.css';

// title, textBanner, bulletPoints, brandImg, textButton
export default function ArticleTable( {
    title, tableTitle, productTableData }) {
  return (
    <section className="article-table">
      <h2>{title}</h2>
      <table>
        <tbody>
        <tr className="tableHead">
          <th className="tableHeadTitle">
            {tableTitle}
          </th>
        </tr>
        {productTableData.map((product, index) => (
          <tr key={index}>
            <td className="nameTd">
              <span>{product.title}</span>
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
                  {product.textButton}
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