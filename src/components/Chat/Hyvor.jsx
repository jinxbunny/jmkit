import React, {useContext} from 'react';
import { Context } from '../ThemeProvider'

import HyvorTalk from 'hyvor-talk-react';

import AdLinks from '../Ads/AdLinks';

const Hyvor = ({WEBSITE_ID, PAGE_ID}) => {
    const [thisTheme] = useContext(Context);

    const lightTheme = {
        accent: "#F91B70",
        accentText: "#FFFFFF",
        footerHeader: "#F1F0F0",
        footerHeaderText: "#272727",
        box: "#FFFFFF",
        boxText: "#111111",
        boxLightText: "#AAAAAA",
        backgroundText: "#111111",
      }
       
      const darkTheme = {
        accent: "#F91B70",
        accentText: "#FFFFFF",
        footerHeader: "#363636",
        footerHeaderText: "#FFFFFF",
        box: "#242424",
        boxText: "#E7E7E7",
        boxLightText: "#AAAAAA",
        backgroundText: "#CCCCCC",
      }


      setTimeout(function(){
        if (typeof window.hyvor_talk !== "undefined"){
          if (thisTheme === 'dark') {
          window.hyvor_talk.setPalette( darkTheme );
          } else {
            window.hyvor_talk.setPalette( lightTheme );
          }
        } else {
          console.log('noChat')
        }
       }, 1000);
      
      return (
      <div>
        <AdLinks />
        <HyvorTalk.Embed
        websiteId={WEBSITE_ID}
        id={PAGE_ID}
        loadMode="scroll"
        />
        </div>
      )
}

export default Hyvor;