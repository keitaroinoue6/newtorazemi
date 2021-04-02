import React from 'react';
import Article from "./Article"; //Articleコンポーネントを使うようにするための記述

class Blog extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isPublished: false //チェックがついていない状態がfalse
    }
  }

  //これは公開状態を反転させる関数
  togglePublished=()=>{
    this.setState({
      isPublished: !this.state.isPublished
    })
  }
  render(){
    return(
      <>
        <Article title={"Reactの使い方"} isPublished={this.state.isPublished} toggle={() => this.togglePublished()}/>
      </> // Articleというコンポーネントを呼び出す
    )
  }
}

export default Blog
//Blogクラスがエクスポートしてやらないと他のコンポーネントから参照されない