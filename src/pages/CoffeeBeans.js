import { ArticleTable } from "../index";
import { articleTableData } from "../data/const";

export default function CoffeeBeans(){
  return (
    <ArticleTable
      title="best coffe beans in the world"
      tableTitle="Product table"
      productTableData={articleTableData}
    />
  )
}