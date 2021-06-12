Issue: Loading a page (that was created via mapping and routing for example) a second time, either via refreshing or trying to directly access the page url.

Solution: I added a 'urlName' to each object (in AllCharacters and AllGames) then listened to the url I liked to in order to match it with the 'urlName' in the object - so it loads and 'constructs the page' from the url rather than the link

Installed the React Helmet package to interact with each 'Pages' head when needed
