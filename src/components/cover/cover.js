import React, { useState, useEffect } from 'react';
import { gsap } from "gsap";
import './cover.scss';
import { fetchContentfulEntries, fetchContentfulAsset } from '../../contentfulAPI';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Cover = (props) => {

  const [coverData, setCoverData] = useState([]);
  const [heroImageData, setHeroImageData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const fetchData = async () => {
      try {

        const coverResponse = await fetchContentfulEntries('cover');
        const activeCoverData = coverResponse.items.find(obj => obj.fields.active);
        setCoverData(activeCoverData);

        const assetResponse = await fetchContentfulAsset('3KBuOsPb1kmB11a7mZcdDP');
        setHeroImageData(assetResponse);

        setIsLoaded(true);
      
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    
  }, []);

  useEffect(() => {
    if (isLoaded) {
      let timeline = new gsap.timeline({
        delay: 1
      });
      timeline.fromTo(
        document.getElementById("copy"),
        {
          opacity: 0
        },
        {
          duration: 0.4,
          opacity: 1
        }
      );
    }
  }, [isLoaded]);

  if (isLoading) {
    return <div>Loading...</div>
  }


  // const buildSocialLinks = () => {
  //   let navItems = props.socialLinks.map((item, key) => 
  //     <a key={key} className="footer__nav-item" href={item.link} target="_blank">
  //       <span class="material-symbols-outlined">{item.iconType}</span>
  //     </a>
  //   );
  //   return navItems
  // }

  return (
    <div className="cover">
      <div className="cover__container container">

        <div id="copy" className="cover__content">
          <div className="cover__copy">
            {/* <p className='small'>{buildSocialLinks()}</p> */}
            <div className=''>
              <h4>{coverData?.fields?.title}</h4>
              <h1>{coverData?.fields?.name}</h1>
              {documentToReactComponents(coverData?.fields?.brief)}
            </div>
          </div>
        </div>

        <div className="cover__image">
          <img src={heroImageData?.fields?.file?.url} alt=""/>
        </div>

      </div>
    </div>
  );
};

export default Cover;
