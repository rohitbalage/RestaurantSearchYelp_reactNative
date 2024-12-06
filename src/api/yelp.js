import axios  from "axios";

export default axios.create(
    {
baseURL: 'https://api.yelp.com/v3/businesses',
headers: {   
    Authorization: 'Bearer q3wNPx6-g9K0lt-vy203s4RyPJ_bC6cOf1ZSx6x3URBr3bJHV1vd7j8Fqar75xpxeLiyItkcJqusyXFApEW1zfd-PZM4VRRyraQrVcF4XTo_KOv7Aw1p3UGHI9pLZ3Yx'
}
    }
);

