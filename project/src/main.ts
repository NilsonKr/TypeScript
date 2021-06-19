import { PhotoOrientation } from './General';
import Picture from './Picture';
import Album from './Album';

const myFirstAlbum = new Album(1, 'FinalProject');
const myPicture = new Picture(1, 'TS pic', new Date(), PhotoOrientation.LandScape);
const lastPicture = new Picture(1, 'Bye Bye', new Date(), PhotoOrientation.Portrait);

myFirstAlbum.addPicture(myPicture);
myFirstAlbum.addPicture(lastPicture);

console.log(myFirstAlbum);
