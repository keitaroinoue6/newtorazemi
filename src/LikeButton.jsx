import React, { useState, useEffect } from "react";

const LikeButton = (props) =>{
  const [count, counter] = useState(0); //countというstateとcounterというstateの変更用のfunction
  const [limit, release] = useState(true); //いいねを何回もクリックしたい実装

  const countUp = () => { //一つずつカウントアップする関数の形
    counter (count + 1)
  }

  useEffect(() => {
    document.getElementById('counter').addEventListener('click',countUp) //id,counterっていうボタンにcpuntUpイベントリスナーを設定
    if(count>=10) {
      counter (0);
    }
    return() => {
      document.getElementById('counter').removeEventListener('click', countUp)//componentWillUnmountの部分
    }
    
  }, [limit]);




  return(
    <>
      <button id="counter">いいね数: {count}</button>
      <button onClick={() => release(!limit)}>もっといいねしたい</button>
    </>
  )
}

export default LikeButton