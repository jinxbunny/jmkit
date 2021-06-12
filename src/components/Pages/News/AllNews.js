import JinxNews from '../../../img/news/JinxNews.png';
import ChatNews from '../../../img/news/chatnews.png';
import BugNews from '../../../img/news/bugsNews1.png';
import ChatNews2 from '../../../img/news/chatnews2.png';
import ChatLightDark from '../../../img/news/chatlightdark.png';
import FlashUpdate1 from '../../../img/news/flashupdate1.png';
import FlashBlock from '../../../img/news/flashblocked.png';
import NY2021 from '../../../img/news/2021.png';
import RuffleLogo from '../../../img/news/rufflelogo.png';
//short hand for links

const videos = "../../videos"
const games = "../../games"
const home = "../../"


const AllNews = [
    {
        id: 11,
        type: `Home`,
        icon: `https://www.jmkit.com/images/homepage/nav/miniicons/icon_video.png`,
        headline: `Welcome 2021!`,
        text: `Flash is gone, Hello Ruffle!`,
        text2: `So as 2021 is here, glad you could all make it..
        Along with the new year we bid a fond farewell to our old friend Flash. In the last update I let you all know I was looking into ways to preserve the games and keep them browser based at JMKit.com and thanks 'Ruffle' that dream is becoming reality! - Ruffle is a Flash Player emulator built in the 'Rust' programming language - which basically means we can see flash stuff without flash being installed. It's in it's early stages but I'm already seeing games working using it on the site - games that won't work right will have a warning but bare with us and hopefully all games can work again soon!`,
        img: NY2021,
        img2: RuffleLogo,
        link1: home,
        date: `1 Jan 2020`
    },
    {
        id: 10,
        type: "Home",
        icon: "https://www.jmkit.com/images/homepage/nav/miniicons/icon_video.png",
        headline: "JMKit Flash Games",
        text: "Click to find out about life after flash games..",
        text2: "As a lot of you already will have seen after December 30th flash will no longer be supported on browsers, meaning any content that is currently being displayed via a flash player will no longer be viewable / playable. I am however looking into ways to preserve the original games to still be browser based games and be playable on the site after December deadline for flash! If however they aren't able to be converted in time there may be gap when none of the flash games work, and then an update later on that will see them all coming back, but fingers crossed there will be a way to preserve them before that happens. Stay tuned for further updates and thank you for your ongoing support of JMKit.com!",
        img: FlashUpdate1,
        img2: FlashBlock,
        link1: home,
        date: "20 Dec 2020"
    },
    {
        id: 9,
        type: "Home",
        icon: "https://www.jmkit.com/images/homepage/nav/miniicons/icon_video.png",
        headline: "Comment Updates",
        text: "Comment sections now have Dark Mode too!",
        text2: "The comments section will now reflect the mode you choose for the site, so light with dark text in 'Day' mode or dark with light text in 'Night' mode! - Comments are also now only available to those who log in to a hyvor account, this is to help spam and trolls!",
        img: ChatNews2,
        img2: ChatLightDark,
        link1: home,
        date: "21 Oct 2020"
    },
    {
        id: 8,
        type: "Game",
        icon: "https://www.jmkit.com/images/homepage/nav/miniicons/icon_video.png",
        headline: "Game Bug Fixes",
        text: "Some HTML5 games weren't loading :o This should now be fixed!",
        text2: "All games should now load ok, flash is unfortunatly going away at the end of this year so playing the games in the browsers won't be possible soon. I will let you know what my plans are for saving the old games and letting you continue to play, as well as continuing to produce HTML5 games that will continue to be playable in a laptop / desktop browser and on mobile! - Stay tuned and feel free to report game loading bugs below",
        img: BugNews,
        link1: games,
        date: "15 Oct 2020"
    },
    {
        id: 7,
        type: "Home",
        icon: "https://www.jmkit.com/images/homepage/nav/miniicons/icon_video.png",
        headline: "New Comments!",
        text: "JMKit is now using a commenting platform called Hyvor Talk, this should be faster loading and more friendly to use.",
        text2: "I'm also putting comments in more places, like every new news update.. So please feel free to use this news article to test out the comment area! Try posting a comment, replying to thers, posting emojis, gifs, images, just remember to keep it fun and friendly!",
        img: ChatNews,
        link1: home,
        date: "14 Oct 2020"
    },
    {
        id: 6,
        type: "Home",
        icon: "https://www.jmkit.com/images/homepage/nav/miniicons/icon_video.png",
        headline: "New Site Updates 1",
        text: "You may notice the site is changing! Don't worry previous Disqus comments / pics are safe, I'm working on getting them back up as archives! Meanwhile the new Hyover chat should be faster and friendlier to use for future comments! (full rundown of the new site's features will follow soon)",
        text2: "",
        img: JinxNews,
        link1: home,
        date: "12 Oct 2020"
    },
    {
        id: 5,
        type: "Video",
        icon: "https://www.jmkit.com/images/homepage/nav/miniicons/icon_video.png",
        headline: "Jinx Talks!",
        text: "Jinx says his first ever words outloud, though they might not be what he wanted to say!",
        text2: "Voice Credits: Jinx: @bridget_lockyer Minx: @homestucktraash",
        img: "https://i3.ytimg.com/vi/9DHx5F9XN40/maxresdefault.jpg",
        link1: videos,
        link2: "https://www.youtube.com/embed/9DHx5F9XN40",
        exLink: "https://www.youtube.com/watch?v=9DHx5F9XN40",
        date: "30 Aug 2020"
    },
    {
        id: 4,
        type: "Comics",
        icon: "https://www.jmkit.com/images/homepage/nav/miniicons/icon_comics.png",
        headline: "Comics out now!",
        text: "Follow Jinx, Minx and the rest of the JMKit characters adventures in new mini-comics!",
        text2: "",
        img: "https://www.jmkit.com/images/homepage/updates/comicsnews.png",
        link1: "../../comics/",
        date: ""
    },
    {
        id: 3,
        type: "Video",
        icon: "https://www.jmkit.com/images/homepage/nav/miniicons/icon_video.png",
        headline: "Minx Welcomes you to 2020",
        text: "Minx wonders where JMKit has been while welcoming you all to the new year in this video",
        text2: "",
        img: "https://i3.ytimg.com/vi/MMndQitWKFU/hqdefault.jpg",
        link1: "../../videos/",
        link2: "https://www.youtube.com/embed/MMndQitWKFU",
        exLink: "https://www.youtube.com/watch?v=MMndQitWKFU",
        date: ""
    },
    {
        id: 2,
        type: "Craft",
        icon: "https://www.jmkit.com/images/homepage/nav/miniicons/icon_crafts.png",
        headline: "Creepy Cute Crafts",
        text: "Warm up your printer and get crafty with these creepy cool JMKit crafts, perfect for Halloween",
        text2: "",
        img: "https://www.jmkit.com/images/homepage/updates/halloweencrafts.png",
        link1: "../../crafts/",
        date: ""
    },
    {
        id: 1,
        type: "Store",
        icon: "https://www.jmkit.com/images/homepage/nav/miniicons/icon_cart.png",
        headline: "Retro 80's Vibes!",
        text: "The JMKit store now includes Retro 80's style Shirts, Hoodies, Phone cases and Stickers!",
        text2: "Check the store page for all the official JMKit merch!",
        img: "https://www.jmkit.com/images/updates/clothing1.png",
        link1: "../../store/",
        date: ""
    },
    {
        id: 0,
        type: "Game",
        icon: "https://www.jmkit.com/images/homepage/nav/miniicons/icon_game.png",
        headline: "Back To School",
        text: "Take the JMKit Characters Back To Blissville HighSchool in the Back To School PlaySets game!",
        text2: "",
        img: "https://www.jmkit.com/images/gamethumbs/new/psbts/thumb3.png",
        link1: "../../games/backtoschool",
        date: ""
    },
]
export default AllNews;