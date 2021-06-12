const AllVideos = [
    {
        id: 0,
        Name: "Minx Bunny Talks",
        Thumb: "https://i3.ytimg.com/vi/08gLQKfdZRE/maxresdefault.jpg",
        Video: "https://www.youtube.com/embed/08gLQKfdZRE",
        About: `Hear Minx talking In the first of hopefully many times in this short animation! - Will she convince Jinx to join it ? `,
        Characters: [
            "JinxBunny", "MinxBunny"
        ],
        shortName: 'minxbunnytalks',
        type: 'Cartoon'
    },
    {
        id: 1,
        Name: "Minxstagram Promo",
        Thumb: "https://i3.ytimg.com/vi/thzVlbPDp8Y/maxresdefault.jpg",
        Video: "https://www.youtube.com/embed/thzVlbPDp8Y",
        About: 'This is a short collection of clips from the JMKit instagram account that Minx has taken over!',
        Characters: [
            "MinxBunny",
        ],
        shortName: 'minxstagrampromo',
        type: 'Cartoon'
    },
    {
        id: 2,
        Name: "Minx Tries ASMR",
        Thumb: "https://i3.ytimg.com/vi/5-85Plyfwhs/maxresdefault.jpg",
        Video: "https://www.youtube.com/embed/5-85Plyfwhs",
        About: "In this video MinxBunny tries something quite far out of her comfort zone to help us all chill out and relax together. Does she succeed?",
        Characters: [
            "MinxBunny", "Clinx"
        ],
        shortName: 'minxtriesasmr',
        type: 'Cartoon'
    },
    {
        id: 3,
        Name: "Welcome to 2020",
        Thumb: "https://i3.ytimg.com/vi/MMndQitWKFU/maxresdefault.jpg",
        Video: "https://www.youtube.com/embed/MMndQitWKFU",
        About: `Minx is here with her first message of 2020, but where's JMKit gone :O`,
        Characters: [
            "MinxBunny", "JinxBunny"
        ],
        shortName: 'welcometo2020',
        type: 'Cartoon'
    },
    {
        id: 4,
        Name: "Jinx Talks",
        Thumb: "https://i3.ytimg.com/vi/9DHx5F9XN40/maxresdefault.jpg",
        Video: "https://www.youtube.com/embed/9DHx5F9XN40",
        About: `Jinx talks out loud for the first time.. What what enlightening wisdom will it be!?`,
        Characters: [
            "MinxBunny", "JinxBunny"
        ],
        shortName: 'jinxtalks',
        type: 'Cartoon'
    },
    {
        id: 5,
        Name: "Pomeranian Friend",
        Thumb: "https://i3.ytimg.com/vi/VFg4hlIQxSk/maxresdefault.jpg",
        Video: "https://www.youtube.com/embed/VFg4hlIQxSk",
        About: `Mr Banana's friend Appa isn't in a talkative mood today...`,
        Characters: [
            "Appa"
        ],
        shortName: 'pomeranianfriend',
        type: 'Real'
    },
    {
        id: 6,
        Name: "Fox Trott",
        Thumb: "https://i3.ytimg.com/vi/B6YCJoeR1sc/maxresdefault.jpg",
        Video: "https://www.youtube.com/embed/B6YCJoeR1sc",
        About: `A short walk-cycle test from 2011 for one of the four legged foxy friends of JMKit.com, the shy one.. It's Trott!`,
        Characters: [
            "Trott"
        ],
        shortName: 'foxtrott',
        type: 'Animation'
    },
    {
        id: 7,
        Name: "Cat Stack",
        Thumb: "https://i3.ytimg.com/vi/cFosXNUDrYw/maxresdefault.jpg",
        Video: "https://www.youtube.com/embed/cFosXNUDrYw",
        About: `Pepper and Pixie stacking and fighting to be on top! (accompanied by some silly music i made XD) Enjoy!`,
        Characters: [
            "Pepper", "Pixie"
        ],
        shortName: 'catstack',
        type: 'Animation'
    },
    {
        id: 8,
        Name: "Jaspers Request",
        Thumb: "https://i3.ytimg.com/vi/komDoaHERSM/maxresdefault.jpg",
        Video: "https://www.youtube.com/embed/komDoaHERSM",
        About: `Here we see real life jasper requesting his pets and strokes`,
        Characters: [
            "Jasper"
        ],
        shortName: 'jaspersrequest',
        type: 'Real'
    },
    {
        id: 9,
        Name: "Lo Cookie Nom Loop",
        Thumb: "https://i3.ytimg.com/vi/8uepumahcDU/maxresdefault.jpg",
        Video: "https://www.youtube.com/embed/8uepumahcDU",
        About: `Here's Lo nomming (or at least trying to) on a Rich Tea biscuit cookie`,
        Characters: [
            "Lola"
        ],
        shortName: 'locookienomloop',
        type: 'Real'
    },
    {
        id: 10,
        Name: "Jasper Food Theif",
        Thumb: "https://i3.ytimg.com/vi/oumDixNIchU/maxresdefault.jpg",
        Video: "https://www.youtube.com/embed/oumDixNIchU",
        About: `This Ginger kitty is very handy when it comes to taking some of his buddies dinner!`,
        Characters: [
            "Jasper", "Lola"
        ],
        shortName: 'jasperfoodtheif',
        type: 'Real'
    },
    {
        id: 11,
        Name: "Xmas Adventure",
        Thumb: "https://i3.ytimg.com/vi/d10VBypzgXU/maxresdefault.jpg",
        Video: "https://www.youtube.com/embed/d10VBypzgXU",
        About: `Here is a play through of the free online cute and cool adventure game, and shows you how to complete the game!`,
        Characters: [
            "JinxBunny", "MinxBunny", "Flake", "Bleu", "Pepper", "Pixie", "Bagle", "Sol"
        ],
        shortName: 'xmasadventure',
        type: 'Game'
    },
    {
        id: 12,
        Name: "Easter Adventure",
        Thumb: "https://i3.ytimg.com/vi/2ookUWo-nkc/hqdefault.jpg",
        Video: "https://www.youtube.com/embed/2ookUWo-nkc",
        About: `Here is a play through showing you how to find and collect all the eggs, and complete all the puzzles! Don't watch it all the way to the end if you don't want spoilers`,
        Characters: [
            "MinxBunny", "Missel", "Sol"
        ],
        shortName: 'easteradventure',
        type: 'Game'
    },
    {
        id: 13,
        Name: "Tower Escape",
        Thumb: "https://i3.ytimg.com/vi/4qfWgCPcECc/hqdefault.jpg",
        Video: "https://www.youtube.com/embed/4qfWgCPcECc",
        About: `Here is a play through showing you where all the sweets are for you to collect, and also how to play through all the puzzles. Don't watch it all the way to the end if you don't want spoilers.`,
        Characters: [
            "JinxBunny", "MinxBunny", "Missel"
        ],
        shortName: 'towerescape',
        type: 'Game'
    },
]

export default AllVideos


