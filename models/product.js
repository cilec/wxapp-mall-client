const AV = require('../libs/av-weapp-min.js');
class Product extends AV.Object {
    get name() { return this.get('name'); }
    get desc() { return this.get('desc'); }
    get price() { return this.get('price'); }
    get imgUrls() { return this.imgUrls('imgUrls'); }
}
AV.Object.register(Product)
module.exports = Product;