import React, {useState} from 'react';
import LikeButon from './LikeButton';

const Article = (props) => {
  const [isPublished, togglePublished] = useState(false);

  return (
    <div>
      <h2>{props.title}</h2>
      <label htmlFor="check">公開状態:</label>
      <input type="checkbox" checked={isPublished} id="check" onClick={()=> togglePublished(!isPublished)}/>
      <LikeButon />
    </div>
    //無限ループが起きてしまうのでこのような書き方をしている
  )
};

export default Article