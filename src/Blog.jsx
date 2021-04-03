import React from 'react';
import Article from "./Article"; //Articleコンポーネントを使うようにするための記述
import * as ForBar from "./components/ForBar.jsx"; //相対パスでかく
import Hoge from "./components/Hoge.jsx";

class Blog extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isPublished: false, //チェックがついていない状態がfalse
      count: 0
    }
  }

  componentDidMount(){
    //ボタンがクリックされたらカウントをcountUpする
    document.getElementById('counter').addEventListener('click', this.countUp)
  }

  //いいね数が10まで行ったら0に戻す
  componentDidUpdate(){
    if (this.state.count >= 10){
      this.setState({count: 0})
    }
  }

  componentWillUnmount(){
    document.getElementById('counter').removeEventListener('click', this.countUp)
  }

  //これは公開状態を反転させる関数
  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished //!は反転させるという意味になる。falseー> trueになる
    })
  };

  countUp = () => {
    this.setState({ count: this.state.count + 1})
  }

  render(){
    return(
      <>
        <Article 
          title={"Reactの使い方"} 
          isPublished={this.state.isPublished} 
          toggle={() => this.togglePublished()}
          count={this.state.count}
        />
        <ForBar.For/>
        <ForBar.Bar/>
        <Hoge/>
      </> // Articleというコンポーネントを呼び出す
    )
  }
}

export default Blog
//Blogクラスがエクスポートしてやらないと他のコンポーネントから参照されない