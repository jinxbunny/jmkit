import React from 'react';
import {useRouteMatch } from 'react-router';

import Hyvor from './Hyvor';
import HyvorTalk from 'hyvor-talk-react';
import { HashLink } from 'react-router-hash-link';


const ChatDen = ()=>{
    const Route = useRouteMatch();
    const TITLE = Route.url.split('/chat/').pop().replace('/', '').toLowerCase();
    const WEBSITE_ID = 1987;
    const PAGE_ID = TITLE;

    return (
        <div>
            <h1>Chat Den! for {PAGE_ID}</h1><br/>
            <HashLink
          to="#chat"
          >
            <HyvorTalk.CommentCount 
            websiteId={WEBSITE_ID}
            id={PAGE_ID} 
          />
          </HashLink>
            <div id="chat">
          <Hyvor WEBSITE_ID={WEBSITE_ID} PAGE_ID={PAGE_ID}/>
      </div>
        </div>
    )
}

export default ChatDen