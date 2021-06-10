var audio;
function doSound() {
    try{
        audio.pause();
    }catch(err){

    }
    audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3');
    audio.play();
}
var bestBuyTimer = parseInt(localStorage.getItem('best-buy-count'))
var secondsToRefresh = 1
bestBuyTimer = isNaN(bestBuyTimer) ? 1 : bestBuyTimer
setTimeout(() => {
    //links to xbox, ps5
	var bestBuyXboxPath = '/en-ca/product/xbox-series-x-1tb-console-new-model-online-only/14964951'
    var bestBuyPS5Path = '/en-ca/product/playstation-5-console-online-only/14962185'
	//links to 3060ti, 3060
	var bestBuy3060Path = '/en-ca/product/evga-nvidia-geforce-rtx-3060-xc-12gb-dddr6-video-card/15318940'
	var bestBuy3060tiPath = '/en-ca/product/nvidia-geforce-rtx-3060-ti-8gb-gddr6-video-card/15166285'
	
    //link below is no good
	var confirmNoWarranty = '/en-ca/required-parts'
	//requires user to be logged in
    var paymentChoice = '/en-ca/basket'
    console.log('Checking Xbox Page...')
    if(
        location.pathname.indexOf(bestBuyXboxPath) > -1 ||
        location.pathname.indexOf(bestBuyPS5Path) > -1
    ){
        const el = document.querySelector('.addToCartButton');
        console.log('Is Xbox Series X page')
        if(el.disabled){
            ++bestBuyTimer
            secondsToRefresh = (70 + bestBuyTimer)
            console.log(`Out of Stock... Reloading in ${secondsToRefresh} seconds`)
            localStorage.setItem('best-buy-count',`${bestBuyTimer}`)
            setTimeout(() => {
                location.reload();
                if(bestBuyTimer > 9){
                    localStorage.setItem('best-buy-count',`1`)
                }
            },1000 * secondsToRefresh)
        }else{
            doSound()
            el.click()
        }
    }else if(location.pathname.indexOf(confirmNoWarranty) > -1){
        doSound()
        const el = document.querySelector('[data-automation="go-to-cart"]');
        console.log('Is Confirm Adding Page')
        if(el.disabled){
            console.log('Error on Page')
            setTimeout(() => {
                location.reload();
            },1000 * 20)
        }else{
            console.log('Going to Cart!')
            el.click()
        }
    }else if(location.pathname.indexOf(paymentChoice) > -1){
        alert('BUY THE XBOX MAN!')
        doSound()
    }else{
        console.log('Wrong Page : ' + location.href)
    }
},5000)
