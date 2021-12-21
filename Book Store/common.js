function Common() {
let self = this;
this.promoBar = {
    promoItems: null, currentItems: 0, numberOfItems: 0,
};
this.initialisePromo = function () {
    let promoItems = $('#promo > div');
    this.promoBar.promoItems = promoItems;
    this.promoBar.numberOfItems = promoItems.length;
    this.startDelay();
} 
this.startDelay = fumction () {
    setTimeout(function () {
        self.showNextPromoItem()
    }, 4000);
}
}
$(document).ready(function () {
    app.common = new Common();
});