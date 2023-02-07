import cubCadet from '../assets/cubCadet.jpg';
import Lt2000 from '../assets/Lt2000.jpg';
import Poulan from '../assets/Poulan.jpg';
import Snapper from '../assets/Snapper.jpg';
import kungfuMowing from '../assets/kungfuMowing.jpg';

export const FORSALE = [
    {
        id: 0,
        name: 'Craftsman LT2000',
        price: '$1000',
        seller: 'Harry Peasron',
        sellerContact: '123@gmail.com',
        image: Lt2000,
        cut: '42',
        ready: 'yes',
        description: 'Good mower cuts grass and stuff.'
    },
    {
        id: 1,
        name: 'Cub Cadet',
        price: '$250',
        seller: 'Joe Johns',
        sellerContact: '(509)555-1212',
        image: cubCadet,
        cut: '46',
        ready: 'no',
        description: 'Needs new engine est $500.' 
    },
    {
        id: 2,
        name: 'Poulan',
        price: '$800',
        seller: 'MowerTech',
        sellerContact: '(509)555-2121',
        image: Poulan,
        cut: '38',
        ready: 'yes',
        description: 'Great for your cabin.'
    },
    {
        id: 3,
        name: 'Snapper',
        price: '$200',
        seller: 'MowerTech',
        sellerContact: '(509)555-2121',
        image: Snapper,
        cut: '22',
        ready: 'yes',
        description: 'Perfect for the back yard.'
    },
    {
        id: 4, 
        name: 'This could be your machine Listed Here!',
        price: '',
        seller: 'MowerTech',
        sellerContact: '(509)555-2121',
        image: kungfuMowing,
        cut: 'List Cut Size',
        ready: 'List if its good to go!',
        description: 'Save time by listing here will allow you to seperate your mow time and KungFu training!'
    }
];

// const forSaleSchema = new Schema({
//     id: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     name: {
//         type: String,
//         required: true,
//     },
//     price: {
//         type: Currency,
//         required: true,
//         min: 0
//     },
//     seller: {
//         type: String,
//         required: true
//     },
//     sellerContact: {
//         type: String,
//         required: true
//     },
//     image: {
//         type: String,
//         required: true
//     },
//     cut: {
//         type: Number,
//     },
//     ready: {
//         type: Boolean,
//         required: true
//     },
//     description {
//         type: String,
//         required: true
//     }
// })