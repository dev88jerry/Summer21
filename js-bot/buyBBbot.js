/*
var audio;
function doSound() {
    try{
        audio.pause();
    }catch(err){

    }
    audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3');
    audio.play();
}
*/
var bestBuyTimer = parseInt(localStorage.getItem('best-buy-count'))
var secondsToRefresh = 1
bestBuyTimer = isNaN(bestBuyTimer) ? 1 : bestBuyTimer
setTimeout(() => {
        
	var confirmNoWarranty = '/en-ca/required-parts'
	//requires user to be logged in
    var paymentChoice = '/en-ca/basket'
	
	//test code to see if in stock items work
	
	var djiAir2sPath = '/en-ca/product/dji-air-2s-quadcopter-drone-with-camera-controller-grey/15387566'
	
	var hyperXPath = '/en-ca/product/hyperx-cloud-flight-over-ear-sound-isolating-rf-wireless-gaming-headset-black-red/12330375'
	
	var macbookPath = '/en-ca/product/apple-macbook-pro-13-3-w-touch-bar-fall-2020-space-gray-apple-m1-chip-1tb-ssd-16gb-ram-en/15318942'
	
	console.log('Checking Pages...')
	
	if(location.pathname.indexOf(hyperXPath) > -1) {
		const el = document.querySelector('.addToCartButton');
		console.log('In Stock')
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
            //doSound()			
            el.click()
			alert('HyperX in Stock.... BUY BUY BUY!!!!!')
        }
	}
	else if (location.pathname.indexOf(djiAir2sPath) > -1)
	{
		const el = document.querySelector('.addToCartButton');
		console.log('In Stock')
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
            //doSound()
            el.click()
			alert('DJI drone in Stock.... BUY BUY BUY!!!!!')
        }
	}
	else if (location.pathname.indexOf(macbookPath) > -1) {
		const el = document.querySelector('.addToCartButton');
		console.log('In Stock')
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
            //doSound()			
            el.click()
			alert('MacBook in Stock.... BUY BUY BUY!!!!!')
        }
	}
	else if(location.pathname.indexOf(confirmNoWarranty) > -1){
        //doSound()
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
        alert('BUY THE STUFF MAN!')
        //doSound()
    }else{
        console.log('Wrong Page : ' + location.href)
    }
},5000)
