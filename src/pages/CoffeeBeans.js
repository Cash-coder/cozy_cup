import { ArticleTable } from "../index";
import { articleTableData } from "../data/const";
import Layout from "./Layout";

// https://www.homegrounds.co/best-coffee-beans-bucket-list/

export default function CoffeeBeans(){
  return (
    <Layout>
      <ArticleTable
        title="best coffe beans in the world"
        tableTitle="Product table"
        productTableData={articleTableData}
      />
  </Layout>
  )
}