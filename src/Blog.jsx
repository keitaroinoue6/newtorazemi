import React from 'react';
import Article from "./Article"; //Articleコンポーネントを使うようにするための記述
import * as ForBar from "./components/ForBar.jsx"; //相対パスでかく
import Hoge from "./components/Hoge.jsx";

const Blog = () => {

  // componentDidMount(){
  //   //ボタンがクリックされたらカウントをcountUpする
  //   document.getElementById('counter').addEventListener('click', this.countUp)
  // }

  // //いいね数が10まで行ったら0に戻す
  // componentDidUpdate(){
  //   if (this.state.count >= 10){
  //     this.setState({count: 0})
  //   }
  // }

  // componentWillUnmount(){
  //   document.getElementById('counter').removeEventListener('click', this.countUp)
  // }

  //これは公開状態を反転させる関数


  // countUp = () => {
  //   this.setState({ count: this.state.count + 1})
  // }


  return(
    <>
      <Article 
        title={"Reactの使い方"} 
        // count={this.state.count}
      />
      <ForBar.For/>
      <ForBar.Bar/>
      <Hoge/>
    </> // Articleというコンポーネントを呼び出す
  )
}


export default Blog
//Blogクラスがエクスポートしてやらないと他のコンポーネントから参照されない