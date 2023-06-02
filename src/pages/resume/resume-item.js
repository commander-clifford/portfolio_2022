import React from 'react';
import FormatDate from '../../components/date';
import Tag from '../../components/tag/tag';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
const ResumeItem = (props) => {
  
    return (
      <section className="resume-item art__stagger-in art__stagger-out">
              
        <div className="resume-item__headline-block d-flex align-items-end justify-content-between">
          <h2 className="headline">{props.item.title}{props.item.educationLevel}</h2>
          <p>
            <i><FormatDate date={props.item.startDate}/></i>&nbsp;-&nbsp;<i><FormatDate date={props.item.endDate}/></i>
          </p>
        </div>

        <div className="d-flex align-items-center justify-content- resume-item__employer-block">
          <h3 className="text-uppercase">{props.item.company}{props.item.school}</h3>&nbsp;
          {props.item.secondaryCompany ? <p className=""><i>({props.item.secondaryCompany})</i></p> : null}
        </div>

        {props.item.gpa ? <p className="resume-item__description p-indent"><small>GPA:</small>&nbsp;<b>{props.item.gpa}</b></p> : null }
        <div className='resume-item__desc-block'>
          <div className="resume-item__description p-indent">
            {documentToReactComponents(props.item.description)}
          </div>

          <div className="resume-item__badges">
            <div className="wrapper">
              {props.item.tags.map((tag, j) =>
                <Tag key={j} classy={tag.type ? tag.type : "ERROR"}>{tag.title}</Tag>
              )}
            </div>
          </div>
        </div>

      </section>
    );
  
}

export default ResumeItem;
