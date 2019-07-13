import React, { Component } from 'react';
//import Docs from '../assets/postData';
import Posts from '../components/Posts';
import '../assets/css/Postlist.css';

class Postlist extends Component{
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Mauricio Silva',
          avatar: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=robohash&f=y'
            },
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eum cumque, voluptatibus nulla exercitationem, modi aliquam recusandae error possimus, incidunt provident? Similique earum recusandae unde fugit id tempora, delectus omnis."
          }
        ],
      },
      {
        id: 1,
        author: {
          name: 'Teste',
          avatar: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=wavatar&f=y'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Teste 2',
              avatar: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=robohash&f=y'
            },
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis saepe numquam asperiores soluta quis qui corrupti iste, facere amet assumenda eum consectetur consequuntur? Nulla cumque eum excepturi delectus obcaecati explicabo!"
          }
        ],
      }
    ]
  };
  render(){
    const post = this.state.posts;
    return(
      <div className="postList">
        {post.map(pot => (
          <Posts key={pot.id} data={pot} />
        ))}        
      </div>
    )
  }
}

export default Postlist;