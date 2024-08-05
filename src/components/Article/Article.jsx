import React from "react";

import "./styles.css";

//export function Article(props) usando o props como parametro teria que passar props.title, props.description... essa forma abaixo esta desestruturando o props
export function Article({ title, description, thumbnail, provider }) {
  return (
    <article id="article">
      <img src={thumbnail} alt={title} />

      <div className="article-infos">
        <h2>{title}</h2>
        <h3>{provider}</h3>

        <p>{description}</p>
      </div>
    </article>
  );
}
