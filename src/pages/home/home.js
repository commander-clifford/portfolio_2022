import React, { Component } from 'react';
import Cover from '../../components/cover';
import { gsap } from "gsap";
import './home.scss';

class Home extends Component {

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount(){
    let cover = document.getElementById("cover");
    let timeline = new gsap.timeline({
      delay: 2,
      paused: true
    });
    timeline.to(cover,{
      y: -200
    });
    timeline.to(cover,{
      y: 0,
      ease: "back.out(4)",
    });
  }

  render() {
    return (
      <article className="home">

        <section id="cover__wrapper" className="cover__wrapper full">
          <Cover></Cover>
        </section>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <p>-Coming Soon-</p>

        <section>
          {this.props.projectData.map((data, key) => {
            return (
              <div key={key}>
                {data.title}
              </div>
            );
          })}
        </section>


        <section>
          <img src="https://drive.google.com/uc?id=1ubBHG_8dIMnaFI2hRh5cLiIg-JNBxCWV" alt="clifford avater"/>
        </section>

      </article>
    );
  }
}

export default Home;
