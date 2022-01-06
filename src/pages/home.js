import React, { Component } from 'react';
import Cover from '../components/cover';
class Home extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    // this.projects = this.props.projectData;
    // this.resume = this.props.resumeData;
    // console.log('PROJECTS',this.projects);
    // console.log('RESUME',this.resume);

  }

  render() {
    return (
      <article>

        <section className="cover__wrapper">
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
