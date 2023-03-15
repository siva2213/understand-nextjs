import React from 'react'

type articleData = {
    title: string;
    description: string;
    category: string;
}

const NewsArticleList: React.FC<{articles: []}> = ({ articles}) => {
  return (
    <>
        <h1>News Article List</h1>
        {articles.map((article: articleData) => {
            return (
                <div key={article.title}>
                    <h3>{article.title} {article.description}</h3>
                    <h4>{article.category}</h4>
                    <hr/>
                </div>
            )
        })}
    </>
  )
}

export default NewsArticleList

export async function getServerSideProps() {
    const response = await fetch('http://localhost:4000/news')
    const data = await response.json()
    return {
        props : {
            articles: data
        }
    }
}