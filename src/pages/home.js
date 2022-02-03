import React, { Component } from 'react';
import Cover from '../components/cover';
import { gsap } from "gsap";
import './home.scss';

class Home extends Component {

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount(){
    // this.projects = this.props.projectData;
    // this.resume = this.props.resumeData;
    // console.log('PROJECTS',this.projects);
    // console.log('RESUME',this.resume);

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

        <section>
          <h1>Hello World! 2022</h1>
            {this.props.projectData.map((data, key) => {
              return (
                <div key={key}>
                  {data.title}
                </div>
              );
            })}
        </section>

      </article>
    );
  }
}

export default Home;
