import React from 'react';
import Article from "./Article"; //Articleコンポーネントを使うようにするための記述

class Blog extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    // const authorName = "Torahack"
    return(
      <>
        <Article title={"Reactの使い方"} />
        <Article title={"JSXの使い方"} />
        <Article title={"コンポーネントの使い方"} />
      </> // Articleというコンポーネントを呼び出す
    )
  }
}

export default Blog
//Blogクラスがエクスポートしてやらないと他のコンポーネントから参照されない