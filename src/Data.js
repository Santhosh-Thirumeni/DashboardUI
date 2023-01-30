import {faFileLines, faFilePen, faFile, faUser, faUsers, faAddressCard, faTriangleExclamation, faBookmark, faWrench, faBrain, faBookOpen, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import OtherUserImage from "./assets/other people img.png";
export const menuOptions = [{
    key: 1,
    icon: faFileLines,
    option: "Buzz home",
    link: "/"
},
{
    key: 2,
    icon: faFileLines,
    option: "My Buzz Posts",
    noOfContents: 8,
    link: "/mybuzzposts"
},
{
    key: 3,
    icon: faFilePen,
    option: "Draft Posts",
    noOfContents: 2,
    link: "/draftposts"
},
{
    key: 4,
    icon: faUser,
    option: "My Followers",
    noOfContents: 33,
    link: "/myfollowers"
},
{
    key: 5,
    icon: faUser,
    option: "Iam Following",
    noOfContents: 33,
    link: "/iamfollowing"
},
{
    key: 6,
    icon: faUsers,
    option: "My Teams",
    noOfContents: 12,
    link: "/myteams"
},
{
    key: 7,
    icon: faAddressCard,
    option: "My Reportees",
    noOfContents: 12,
    link: "/myreportees"
},
{
    key: 8,
    icon: faBookmark,
    option: "Saved Posts",
    noOfContents: 7,
    link: "/savedposts"
},
{
    key: 9,
    icon: faTriangleExclamation,
    option: "Spam",
    noOfContents: 7,
    link: "/spam"
},
{
    key: 10,
    icon: faWrench,
    option: "Settings",
    noOfContents: 7,
    link: "/settings"
}];

export const recentlyAddedMenuOptions = [{
    key: 1,
    icon: faFileLines,
    option: "New Artefacts",
    noOfContents: 82,
    link: "/newartefacts"

},
{
    key: 2,
    icon: faBookOpen,
    option: "New Modules",
    noOfContents: 42,
    link: "/newmodules"
},
{
    key: 3,
    icon: faBrain,
    option: "New Skills",
    noOfContents: 23,
    link: "/newskills"
},
{
    key: 4,
    icon: faFile,
    option: "New Posts",
    noOfContents: 7,
    link: "/newposts"
},
{
    key: 5,
    icon: faCartShopping,
    option: "Cart",
    noOfContents: 8,
    link: "/cart"
},
{
    key: 6,
    icon: faFile,
    option: "My Posts",
    noOfContents: 12,
    link: "/myposts"
}];




export const SAMPLE_POST_DATA = [{
    key: 1,
    name: "Jonas",
    designation: "Marketing Expert",
    profilePic: OtherUserImage,
    createdAt: "1d",
    message: "Marketing tips are here: Reach Influencers, Decision and I... Marketing tips are here: Reach Influencers, Decision and I... Marketing tips are here: Reach Influencers, Decision and I... Marketing tips are here: Reach Influencers, Decision and I..."
},
{
    key: 2,
    name: "Jonas",
    designation: "Marketing Expert",
    profilePic: OtherUserImage,
    createdAt: "1d",
    message: "Marketing tips are here: Reach Influencers, Decision and I... Marketing tips are here: Reach Influencers, Decision and I... Marketing tips are here: Reach Influencers, Decision and I... Marketing tips are here: Reach Influencers, Decision and I..."
},
{
    key: 3,
    name: "Jonas",
    designation: "Marketing Expert",
    profilePic: OtherUserImage,
    createdAt: "1d",
    message: "Marketing tips are here: Reach Influencers, Decision and I... Marketing tips are here: Reach Influencers, Decision and I... Marketing tips are here: Reach Influencers, Decision and I... Marketing tips are here: Reach Influencers, Decision and I..."
}]