import jinxpic0 from '../../img/characters/JinxBunny0.png'
import minxpic0 from '../../img/characters/MinxBunny0.png'
import baglepic0 from '../../img/characters/Bagle0.png'
import pepperpic0 from '../../img/characters/Pepper0.png'
import pixiepic0 from '../../img/characters/Pixie0.png'
import jasperpic0 from '../../img/characters/Jasper0.png'
import lolapic0 from '../../img/characters/Lola0.png'
import misselpic0 from '../../img/characters/Missel0.png'
import appapic0 from '../../img/characters/Appa0.png'
import mollypic0 from '../../img/characters/Molly0.png'
import tumblepic0 from '../../img/characters/Tumble0.png'
import chipspic0 from '../../img/characters/Chips0.png'
import trottpic0 from '../../img/characters/Trott0.png'
import lumipic0 from '../../img/characters/Lumi0.png'
import flakepic0 from '../../img/characters/Flake0.png'
import bleupic0 from '../../img/characters/Bleu0.png'
import lilpic0 from '../../img/characters/Lil0.png'
import debrapic0 from '../../img/characters/Debra0.png'
import chloepic0 from '../../img/characters/Chloe0.png'
import dexpic0 from '../../img/characters/Dex0.png'
import boopic0 from '../../img/characters/Boo0.png'
import clinxIcon from '../../img/characters/icons/clinx.png'
import clinxpic0 from '../../img/characters/Clinx0.png'
import penguinIcon from '../../img/characters/icons/penguin.png'
import solpic0 from '../../img/characters/Sol0.png'

const AllCharacters = [
    {
        id: 0,
        name: "JinxBunny",
        animal: "Rabbit",
        img1: "https://www.jmkit.com/images/characters/jinxbunny.png",
        img2: jinxpic0,
        info: [
            "Jinx is a friendly plush bunny rabbit with one missing eye and no tail!",
            "He was first found along with Minx Bunny as the last pair of a new toy range called Bunny Buddies, they were left sitting damaged on a shelf until someone like you took them into their heart.",
            "He always tries to be helpful (even though he can sometimes be a little clumsy) and he's always trying his best to impress Minx and catch her eye."
        ],
        traits: [
            "Loyal",
            "Adventurous",
            "Silly"
        ],
        likes: [
            "Vegan Pizza (With Extra Carrots)",
            "Video Games",
            "Rock Music"
        ],
        dislikes: [
            "Can't stand bullies",
            "Everything about celery",
            "Being talked over (even though he rarely talks)"
        ],
        trivia: [
            `Jinx was the first ever JMKit character`,
            `The name JMKit comes from Jinx and Minx's name 'JM' with 'Kit' being another word for a baby rabbit - and the site came to be because of the characters and so JMKit was born!`,
        ],
        urlName: "jinxbunny"
    },
    {
        id: 1,
        name: `MinxBunny`,
        animal: `Rabbit`,
        img1: `https://www.jmkit.com/images/characters/minxbunny.png`,
        img2: minxpic0,
        info: [
            `Minx is a plush toy bunny rabbit who was discovered as an imperfect "Bunny Buddy," but left unwanted because of her missing eye. Then, a kind little girl found her and stitched her a new heart-shaped eye and showed her what it was like to be loved.`,
            `She likes to be cheeky and playfully flirty but deep down knows she'll always like Jinx best.`,
            `She likes to try and coordinate her big bow colour to match her outfits!`,
        ],
        traits: [
            `Loving`,
            `Lively`,
            `Picky`,
        ],
        likes: [
            `Carrot cake + gingerbread`,
            `Dressing Up (or down depending on the occasion)`,
            `Hugs`,
        ],
        dislikes: [
            `Dishonesty`,
            `The taste Peas`,
            `Rudeness`,
        ],
        trivia: [
            `She was first introduced with a green bow before she changed to the baby blue shade she prefers these days.`,
            `Minx's original design had her with an X eye on the left (opposite of Jinx) but was then re-designed with a large heart instead.`,
            `In 2019 Minx became the first JMKit character to talk, and featured in a short animated video (talking about the fact she could talk) declaring "I wasn't sure until I tried and, it worked!"`
        ],
        urlName: "minxbunny"
    },
    {
        id: 2,
        name: `Bagle`,
        animal: `Dog`,
        img1: `https://www.jmkit.com/images/characters/bagle.png`,
        img2: baglepic0,
        info: [
            `Bagle is a dopey yet lovable boy puppy who would chew on almost anything given the chance`,
            `He's been known to get himself into trouble so needs to be watched when he plays`,
        ],
        traits: [
            `Devoted`,
            `Goofy`,
            `Happy`,
        ],
        likes: [
            `Long Walks`,
            `Belly Scratches`,
            `Digging (getting as dirty as possible)`,
        ],
        dislikes: [
            `The Smell of Lemons`,
            `Fireworks`,
            `Being Alone`,
        ],
        trivia: [
            `Bagle was the first JMKit Dog, and set up as the pet of Jinx and Minx`,
            `He never talks, only communicating via excited barks and tail wags.`
        ],
        urlName: "bagle"
    },
    {
        id: 3,
        name: `Pepper`,
        animal: `Cat`,
        img1: `https://www.jmkit.com/images/characters/pepper.png`,
        img2: pepperpic0,
        info: [
            `Pepper is a black boy cat`,
        ],
        traits: [
            `Wary`,
            `Protective`,
            `Generous`,
        ],
        likes: [
            `Boxes`,
            `Climbing Trees`,
            `Playing Hide and Seek`,
        ],
        dislikes: [
            `Thunder`,
            `Being separated from Pixie`,
            `Bones`,
        ],
        trivia: [
            `Pepper was loosely based on a realworld cat called Salem`,
        ],
        urlName: "pepper"
    },
    {
        id: 4,
        name: `Pixie`,
        animal: `Cat`,
        img1: `https://www.jmkit.com/images/characters/pixie.png`,
        img2: pixiepic0,
        info: [
            `Pixie is a White Girl Cat`,
        ],
        traits: [
            `Affectionate`,
            `Innocent`,
            `Sensitive`,
        ],
        likes: [
            `Boxes`,
            `Balencing on Branches`,
            `Playing Hide and Seek`,
        ],
        dislikes: [
            `Lightning`,
            `Being Seporated from Pepper`,
            `Bones`,
        ],
        trivia: [
            `Pixie was loosely based on a realworld cat called Lola`,
        ],
        urlName: "pixie"
    },
    {
        id: 5,
        name: `Jasper`,
        animal: `Cat`,
        img1: `https://www.jmkit.com/images/characters/jasper.png`,
        img2: jasperpic0,
        info: [
            `A simple yet curious kitty who loves attention, he's very friendly even though he often looks grumpy`,
            `Jasper is the Ginger (orange with stripes) boy cat`,
        ],
        traits: [
            `Smart`,
            `Innovative`,
            `Strong Willed`,
        ],
        likes: [
            `Naps in front of an open fire`,
            `Scraps to show he's top cat`,
            `Drinking water from anything except his water bowl`,
        ],
        dislikes: [
            `Dry biscuits`,
            `Being ignored`,
            `Dogs`,
        ],
        trivia: [
            `Jasper is based on a realworld cat (of the same name)`,
            `He and Lola traveled thousands of miles from Hawaii to England`,
        ],
        urlName: "jasper"
    },
    {
        id: 6,
        name: `Lola`,
        animal: `Cat`,
        img1: `https://www.jmkit.com/images/characters/lola.png`,
        img2: lolapic0,
        info: [
            `Lola is older than jasper and therefore (in her mind) wiser, always there to be the voice of reason - whether Jasper wants to listen or not!`,
            `Lola or Lo (for short) is a calico girl cat`,
        ],
        traits: [
            `Spirited`,
            `Thoughtful`,
            `Logical`,
        ],
        likes: [
            `Naps, preferably up high`,
            `Behind the ear scratches`,
            `Playing with Appa (for a while)`,
        ],
        dislikes: [
            `Being Groomed (She has that covered)`,
            `Having to jump too high`,
            `Confrontation`,
        ],
        trivia: [
            `Lola is based on a realworld cat (of the same name)`,
            `Lola is often refered to as Lo`,
        ],
        urlName: "lola"
    },
    {
        id: 7,
        name: `Missel`,
        animal: `Cat`,
        img1: `https://www.jmkit.com/images/characters/missel.png`,
        img2: misselpic0,
        info: [
            `Missel is a pretty kitty. A friend of Pepper and Pixie, she likes to think of herself - and therefore be treated - as a princess, you have been warned.`,
            `She's fancy but also friendly and can always find time to share styling tips with anyone who will listen `,
        ],
        traits: [
            `Self-Aware`,
            `Confident`,
            `Fussy`,
        ],
        likes: [
            `Pampering`,
            `Sparkly Things`,
            `Lobster Thermidor`,
        ],
        dislikes: [
            `Old Tuna (It Stinks!)`,
            `The Dark`,
            `Dogs`,
        ],
        trivia: [
            `Missel makes her first appearence in portraits in the Jinx&Minx Tower Escape Game`,
            `She is based on a friends real world cat of the same name`,
        ],
        urlName: "missel"
    },
    {
        id: 8,
        name: `Appa`,
        animal: `Dog`,
        img1: `https://www.jmkit.com/images/characters/appa.png`,
        img2: appapic0,
        info: [
            `Appa is a giddy and cute Girl Pomeranian pup who is very playful and adventurous - and loves a good nap afterwards.`,
            `She used to be a show dog, but even though she won awards she didn't enjoy being judged, prodded and poked and much prefers doing her own doggy thing away from shows.`,
        ],
        traits: [
            `Giddy`,
            `Loving`,
            `Silly`,
        ],
        likes: [
            `Chewing on Toys (Her own or the cats')`,
            `Chasing things (Or the cats)`,
            `Naps (Sometimes in the Cats' bed!)`,
        ],
        dislikes: [
            `Being surrounded`,
            `Dog Shows`,
            `Being left alone for too long`,
        ],
        trivia: [
            `Appa is based on our own real world Pomeranian pup.`,
            `You can follow Appa's adventures on instagram @appa_pompom`,
            `She is named after the flying bison character from the TV show Avatar: The Last Air Bender`,
        ],
        urlName: "appa"
    },
    {
        id: 9,
        name: `Molly`,
        animal: `Doll`,
        img1: `https://www.jmkit.com/images/characters/molly.png`,
        img2: mollypic0,
        info: [
            `Molly is no ordinary dolly, she may like to dress up girlie but she likes to think of herself as a tomboy`,
            `Halloween is easily her favorite holiday, bring on the skeletons and pumpkins!`
        ],
        traits: [
            `Superstitious`,
            `Mischievous`,
            `Imaginative`,
        ],
        likes: [
            `Skulls (That she draws or makes)`,
            `Buttons`,
            `Milkshake (Dairy free)`,
        ],
        dislikes: [
            `High Heels`,
            `Glitter (it gets Everywhere!)`,
            `Cheaters`,
        ],
        trivia: [
            `She was origianlly called Lolly`,
            `Molly's first design had her with a button for an eye!`,
        ],
        urlName: "molly"
    },
    {
        id: 10,
        name: `Tumble`,
        animal: `Bear`,
        img1: `https://www.jmkit.com/images/characters/tumble.png`,
        img2: tumblepic0,
        info: [
            `Tumble is an energetic carefree teddy bear..`,
            `He just loves to roll, cartwheel and generally tumble around`
        ],
        traits: [
            `Lively`,
            `Impatient`,
            `Fun Loving`,
        ],
        likes: [
            `Gymnastics`,
            `Berries`,
            `Camping`,
        ],
        dislikes: [
            `Waiting Around`,
            `Cauliflower (Eating or smelling!)`,
            `Too Much Water (He doesn't like getting soggy)`,
        ],
        trivia: [
            `Tumble's character started out as an idea for a pre-school mascot`,
        ],
        urlName: "tumble"
    },
    {
        id: 11,
        name: `Chips`,
        animal: `Squirrel`,
        img1: `https://www.jmkit.com/images/characters/chips.png`,
        img2: chipspic0,
        info: [
            `Chips is a cheeky young Boy squirrel who enjoys collecting acorns`,
            `He often enlists the help of his giraffe pal Chloe to reach up to the higher branches`
        ],
        traits: [
            `Determined`,
            `Messy`,
            `Excitable`,
        ],
        likes: [
            `Pecan Pie`,
            `Treasure Hunting`,
            `Spring Time`,
        ],
        dislikes: [
            `Bees`,
            `Peanuts (because they are fraud nuts!)`,
            `Cold Water`,
        ],
        trivia: [
            `Chips was the first character (after Jinx and Minx) to have a game based on him - Chips Balloon Ride`,
            `He was designed at the same time as Chloe to be her companion`
        ],
        urlName: "chips"
    },
    {
        id: 12,
        name: `Trott`,
        animal: `Fox`,
        img1: `https://www.jmkit.com/images/characters/trott.png`,
        img2: trottpic0,
        info: [
            `Trott is a wise but shy young Boy fox but given the chance once he gets to know someone they'll see him coming out of his shell.`,
        ],
        traits: [
            `Introverted`,
            `Patient`,
            `Curious`,
        ],
        likes: [
            `Reading`,
            `Roast Chicken`,
            `Halloween`,
        ],
        dislikes: [
            `Large Crowds`,
            `Pushiness`,
            `Getting twigs in his tail`,
        ],
        trivia: [
            `Trott's name comes from the dance "The Foxtrott"`
        ],
        urlName: "trott"
    },
    {
        id: 13,
        name: `Lumi`,
        animal: `Fox`,
        img1: `https://www.jmkit.com/images/characters/lumi.png`,
        img2: lumipic0,
        info: [
            `Lumi is a sweet female Arctic Fox, she is proud to be geeky and is always looking to learn new things.`,
        ],
        traits: [
            `Kind`,
            `Geeky`,
            `Inquisitive`,
        ],
        likes: [
            `Berries (Once she's researched if they are edible)`,
            `Reading`,
            `Exploring`,
        ],
        dislikes: [
            `Hot Weather`,
            `Sticky Paws`,
            `Bad Smells`,
        ],
        trivia: [
            `The name Lumi comes from the Finnish and Estonian word for Snow`,
            `Her name is pronounced 'Loo-Me'`
        ],
        urlName: "lumi"
    },
    {
        id: 14,
        name: `Flake`,
        animal: `Bear`,
        img1: `https://www.jmkit.com/images/characters/flake.png`,
        img2: flakepic0,
        info: [
            `Flake is a bubbly girlie polar bear who's often seen hanging out with her playmate, Bleu.`,
        ],
        traits: [
            `Cheerful`,
            `Optimistic`,
            `Reliable`,
        ],
        likes: [
            `Hanging out with Bleu`,
            `Hot Cocoa`,
            `Arts & Crafts`,
        ],
        dislikes: [
            `Coffee (Mainly the smell)`,
            `Getting Sandy`,
            `Scary Movies`,
        ],
        trivia: [
            `Flake's hair tufts were designed to look like small pigtails`,
            `Her name comes from the word snowflake`
        ],
        urlName: "flake"
    },
    {
        id: 15,
        name: `Bleu`,
        animal: `Bear`,
        img1: `https://www.jmkit.com/images/characters/bleu.png`,
        img2: bleupic0,
        info: [
            `Bleu is a chunky cuddly polar bear who is also Flake's playmate`,
            `Despite the different spelling, he prefers his name to be pronounced 'Blue'`
        ],
        traits: [
            `Playful`,
            `Sincere`,
            `Active`,
        ],
        likes: [
            `Snowball Fights`,
            `Fishing`,
            `Sledging`,
        ],
        dislikes: [
            `Rain`,
            `Bugs`,
            `Christmas Songs`,
        ],
        trivia: [
            `The spelling of Bleu's name is the French word for Blue`,
            `When refering to him you'd pronounce his name like blue`
        ],
        urlName: "bleu"
    },
    {
        id: 16,
        name: `Lil`,
        animal: `Penguin`,
        img1: `https://www.jmkit.com/images/characters/lil.png`,
        img2: lilpic0,
        info: [
            `Lil is the lost little baby Girl penguin`,
            `Never really sure how she got where she ends up but she always finds fun when she's there`
        ],
        traits: [
            `Ditzy`,
            `Fidgety`,
            `Carefree`,
        ],
        likes: [
            `Jelly Beans`,
            `Slides (The wetter the better!)`,
            `Swimming`,
        ],
        dislikes: [
            `Loud Music`,
            `Vegetables`,
            `Bed Time`,
        ],
        trivia: [
            `Lil first appeared as an un-named small penguin in the Make-A-Scene game: At The North Pole`,
        ],
        urlName: "lil"
    },
    {
        id: 17,
        name: `Debra`,
        animal: `Zebra`,
        img1: `https://www.jmkit.com/images/characters/debra.png`,
        img2: debrapic0,
        info: [
            `Debby, Deb or Debra - she's a girlie zebra. This style conscious zebra decided to give her self a couple of unique stripes to stand out from the herd.`,
        ],
        traits: [
            `Impulsive`,
            `Sassy`,
            `Funny`,
        ],
        likes: [
            `Being Noticed`,
            `Red Apples`,
            `Dancing`,
        ],
        dislikes: [
            `Style Faux-pas`,
            `Flip Flops`,
            `When someone replies to a text with "K" (even more so when it shows the dots for ages)`,
        ],
        trivia: [
            `Debra was first seen (without her trade mark stripes) unnamed in the Make-A-Scene game: in the Jungle`,
            `She is named Debra to rhyme with the UK pronunciation of Zebra (pronounced like Zeb-ra rather than the American Zee-bra)`,
        ],
        urlName: "debra"
    },
    {
        id: 18,
        name: `Chloe`,
        animal: `Giraffe`,
        img1: `https://www.jmkit.com/images/characters/chloe.png`,
        img2: chloepic0,
        info: [
            `Chloe is tall giraffe, she is the helpful sort, always there to lend a hand (or neck) to any animal in need`,
        ],
        traits: [
            `Considerate`,
            `Neat`,
            `Dependable`,
        ],
        likes: [
            `A Hearty Salad`,
            `Sun Bathing`,
            `Cleaning`,
        ],
        dislikes: [
            `Mess`,
            `Selfishness`,
            `Turtle-neck sweaters (No neck shaming please!)`,
        ],
        trivia: [
            `Chloe started out as Chips' side kick, carrying him around on her head`,
            `she was first seen, then nunnamed, in the Make-A-Scene game: in the Jungle`,
        ],
        urlName: "chloe"
    },
    {
        id: 19,
        name: `Dex`,
        animal: `Dinosaur`,
        img1: `https://www.jmkit.com/images/characters/dex.png`,
        img2: dexpic0,
        info: [
            `Dex is a friendly T-Rex who is always looking for fun and games, although he can be a bit of a scaredy cat`,
        ],
        traits: [
            `Gentle`,
            `Cautious`,
            `Pleasant`,
        ],
        likes: [
            `Watermelon`,
            `Playing the ukulele`,
            `Playing Tag`,
        ],
        dislikes: [
            `Making his bed`,
            `Surprises`,
            `Meanies`,
        ],
        trivia: [
            `Dex is the first prehistoric character in the JMKit world`,
            `Jinx spoke for the first time after reading Dex's thoughts on carrots!`,
        ],
        urlName: "dex"
    },
    {
        id: 20,
        name: `Boo`,
        animal: `Bear`,
        img1: `https://www.jmkit.com/images/characters/boo.png`,
        img2: boopic0,
        info: [
            `Boo is a large Boy panda`,
            `He has a piece missing from his left ear that he doesn't like to talk about. Maybe we will never know why, but he never lets it bother him.`
        ],
        traits: [
            `Relaxed`,
            `Independent`,
            `Calm`,
        ],
        likes: [
            `Bamboo and Green Tea`,
            `Lounging`,
            `Box Sets`,
        ],
        dislikes: [
            `Nosiness`,
            `Mornings`,
            `Cherry Tomatoes (Very suspicious)`,
        ],
        trivia: [
            `Boo's name comes from the plant Bamboo - which pandas love to eat`,
        ],
        urlName: "boo"
    },
    {
        id: 21,
        name: `Clinx`,
        animal: `Unknown`,
        img1: clinxIcon,
        img2: clinxpic0,
        info: [
            `Not a lot is known about this mysterious character, most of what is said can only be put down to speculation - so far no harm has come from his presense around other characters...`,
        ],
        traits: [
            `Quiet`,
            `Still`,
            `Brooding`,
        ],
        likes: [
            `${`[`}REDACTED${`]`}`,
            `Ticks & Tocks`,
            `${`[`}REDACTED${`]`}`,
        ],
        dislikes: [
            `Alarms`,
            `${`[`}REDACTED${`]`}`,
            `${`[`}REDACTED${`]`}`,
        ],
        trivia: [
            `First sighted in the attic of the 'My Home Makeover' game`,
            `Has been sighted appearing in the background of Minx's ASMR video during a flash of lightning at midnight`,
        ],
        urlName: "clinx"
    },
    {
        id: 22,
        name: `Sol`,
        animal: `Penguin`,
        img1: penguinIcon,
        img2: solpic0,
        info: [
            `The definition of a go-getter, this plucky penguin will try his fins at any new business idea, from selling cave side supplies in icey climets to ice creams in sunny parks`,
        ],
        traits: [
            `Independent`,
            `Conscientious`,
            `Patient`,
        ],
        likes: [
            `A Good Deal`,
            `Money`,
            `Magic Cups`
        ],
        dislikes: [
            `Forged vouchers`,
            `Not having enough stock`,
            `Fish heads`,
        ],
        trivia: [
            `Made his first apperence on the plane ride in Jinx's Xmas Adventure`,
            `He has become the designated 'shop keeper' character`,
        ],
        urlName: "sol"
    },
]

export default AllCharacters;