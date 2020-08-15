import React,{ Component } from 'react';
import Topic from './component/Topic';
import Recommend from './component/Recommend';
import List from './component/List';
import Writer from './component/Writer';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt = 'banner' className = 'banner-image' src="//upload-images.jianshu.io/upload_images/4422113-5a851559c43c6d0c.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/640/format/webp"></img>
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
      </HomeWrapper>
    )
  }
}

export default Home;