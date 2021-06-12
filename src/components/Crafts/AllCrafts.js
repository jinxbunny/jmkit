import JinxCubee from '../../img/crafts/jinxcubee1_tn.png'
import JinxCubee_PDF from '../../pdfs/cubeecraft_jinx_template.pdf'

import MinxCubee from '../../img/crafts/minxcubee1_tn.png'
import MinxCubee_PDF from '../../pdfs/cubeecraft_minx_template.pdf'

import BooCubee from '../../img/crafts/boocubee1_tn.png'
import BooCubee_PDF from '../../pdfs/cubeecraft_boo_template.pdf'

import FlakeCubee from '../../img/crafts/flakecubee1_tn.png'
import FlakeCubee_PDF from '../../pdfs/cubeecraft_flake_template.pdf'

import ZombieJinxCubee from '../../img/crafts/zombiejinxcubee1_tn.png'
import ZombieJinxCubee_PDF from '../../pdfs/cubeecraft_zombiejinx_template.pdf'

import ZombieMinxCubee from '../../img/crafts/zombieminxcubee1_tn.png'
import ZombieMinxCubee_PDF from '../../pdfs/cubeecraft_zombieminx_template.pdf'

import JinxGhostCubee from '../../img/crafts/ghostjinxcubee_tn.png'
import JinxGhost_PDF from '../../pdfs/Jinx_Sheet_Ghost.pdf'

import MinxGhostCubee from '../../img/crafts/ghostminxcubee_tn.png'
import MinxGhost_PDF from '../../pdfs/Minx_Sheet_Ghost.pdf'

import CuteGhosts from '../../img/crafts/cuteghosts_tn.png'
import CuteGhosts_PDF from '../../pdfs/cuteghosts.pdf'

import CuteSkulls from '../../img/crafts/cuteskulls_tn.png'
import CuteSkulls_PDF from '../../pdfs/cuteskulls.pdf'

import HappyPaper from '../../img/crafts/happypaper_1_tn.png'
import HappyPaper_PDF from '../../pdfs/happypaper1.pdf'

import HappyPaperF from '../../img/crafts/happypaper_2_tn.png'
import HappyPaperF_PDF from '../../pdfs/happypaper2.pdf'

const cubeeDescription = "Print out on thin card for best results, carefully cut and fold to create your very own Cubee character"
const cubee2Description = "Print out on thin card for best results, carefully cut and fold to create your very own Cubee accessory"

const AllCrafts = [
    {
        id: 0,
        Name: "Jinx",
        Thumb: JinxCubee,
        About: cubeeDescription,
        File: JinxCubee_PDF,
        Type: 'Cubee',
        gTags: [
            "Cubee",
        ],
        cCharacters: [
            "JinxBunny", "MinxBunny"
        ],
    },
    {
        id: 1,
        Name: "Minx",
        Thumb: MinxCubee,
        About: cubeeDescription,
        File: MinxCubee_PDF,
        Type: 'Cubee',
        gTags: [
            "Cubee",
        ],
        cCharacters: [
            "MinxBunny"
        ],
    },
    {
        id: 2,
        Name: "Boo",
        Thumb: BooCubee,
        About: cubeeDescription,
        File: BooCubee_PDF,
        Type: 'Cubee',
        gTags: [
            "Cubee",
        ],
        cCharacters: [
            "Boo"
        ],
    },
    {
        id: 3,
        Name: "Flake",
        Thumb: FlakeCubee,
        About: cubeeDescription,
        File: FlakeCubee_PDF,
        Type: 'Cubee',
        gTags: [
            "Cubee",
        ],
        cCharacters: [
            "Flake"
        ],
    },
    {
        id: 4,
        Name: "Zombie Jinx",
        Thumb: ZombieJinxCubee,
        About: cubeeDescription,
        File: ZombieJinxCubee_PDF,
        Type: 'Cubee',
        gTags: [
            "Halloween", "Cubee", "Zombie"
        ],
        cCharacters: [
            "JinxBunny"
        ],
    },
    {
        id: 5,
        Name: "Zombie Minx",
        Thumb: ZombieMinxCubee,
        About: cubeeDescription,
        File: ZombieMinxCubee_PDF,
        Type: 'Cubee',
        gTags: [
            "Halloween", "Cubee", "Zombie"
        ],
        cCharacters: [
            "MinxBunny"
        ],
    },
    {
        id: 6,
        Name: "Ghost for Jinx",
        Thumb: JinxGhostCubee,
        About: cubee2Description,
        File: JinxGhost_PDF,
        Type: 'Cubee',
        gTags: [
            "Halloween", "Cubee", "Ghost"
        ],
        cCharacters: [
            "JinxBunny"
        ],
    },
    {
        id: 7,
        Name: "Ghost for Minx",
        Thumb: MinxGhostCubee,
        About: cubee2Description,
        File: MinxGhost_PDF,
        Type: 'Cubee',
        gTags: [
            "Halloween", "Cubee", "Ghost"
        ],
        cCharacters: [
            "MinxBunny"
        ],
    },
    {
        id: 8,
        Name: "Cute Ghosts",
        Thumb: CuteGhosts,
        About: "Print out and carefully cut out, then stick them around your house for some fun ghostly decorations",
        File: CuteGhosts_PDF,
        Type: 'Cubee',
        gTags: [
            "Halloween", "Decoration", "Ghost"
        ],
        cCharacters: [
            ""
        ],
    },
    {
        id: 9,
        Name: "Cute Skulls",
        Thumb: CuteSkulls,
        About: "Print out and carefully cut out, then stick them around your house for some fun skull decorations",
        File: CuteSkulls_PDF,
        Type: 'Printable',
        gTags: [
            "Halloween", "Cubee", "Skull"
        ],
        cCharacters: [
            ""
        ],
    },
    {
        id: 10,
        Name: "Happy Paper",
        Thumb: HappyPaper,
        About: 'Print your very own sheet of "Happy Paper" - just for fun!',
        File: HappyPaper_PDF,
        Type: 'Printable',
        gTags: [
            "Halloween", "Cubee",
        ],
        cCharacters: [
            "MinxBunny"
        ],
    },
    {
        id: 11,
        Name: "Happy Paper Faded",
        Thumb: HappyPaperF,
        About: 'Print your very own sheet of "Happy Paper" - faded so you can use it for notes and sketches!',
        File: HappyPaperF_PDF,
        Type: 'Printable',
        gTags: [
            "Halloween", "Cubee",
        ],
        cCharacters: [
            "MinxBunny"
        ],
    },
]

export default AllCrafts