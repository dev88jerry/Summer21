/*
BB script that can be changed to purchase items.
*/
var bestBuyTimer = parseInt(localStorage.getItem('best-buy-count'))

var secondsToRefresh = 1

bestBuyTimer = isNaN(bestBuyTimer) ? 1 : bestBuyTimer

setTimeout(() => {
    //links to xbox, ps5
    var bestBuyXboxPath = '/en-ca/product/xbox-series-x-1tb-console-new-model-online-only/14964951'
    var bestBuyPS5Path = '/en-ca/product/playstation-5-console-online-only/14962185'
    //links to gpus
    var bestBuy3060Path = '/en-ca/product/evga-nvidia-geforce-rtx-3060-xc-12gb-dddr6-video-card/15318940'
    var bestBuy3060tiPath = '/en-ca/product/nvidia-geforce-rtx-3060-ti-8gb-gddr6-video-card/15166285'
    var bestBuy3070Path = '/en-ca/product/nvidia-geforce-rtx-3070-8gb-gddr6-video-card-only-at-best-buy/15078017'
    var bestBuy3080Path = '/en-ca/product/nvidia-geforce-rtx-3080-10gb-gddr6x-video-card/15463567'

    var confirmNoWarranty = '/en-ca/required-parts'
    var paymentChoice = '/en-ca/basket'

    console.log('Checking for stock...')

    if (location.pathname.indexOf(bestBuy3060Path) > -1) {
        const el = document.querySelector('.addToCartButton');
        console.log('In Stock')
        if (el.disabled) {
            ++bestBuyTimer
            secondsToRefresh = (70 + bestBuyTimer)
            console.log(`Out of Stock... Reloading in ${secondsToRefresh} seconds`)
            localStorage.setItem('best-buy-count', `${bestBuyTimer}`)
            setTimeout(() => {
                location.reload();
                if (bestBuyTimer > 9) {
                    localStorage.setItem('best-buy-count', `1`)
                }
            }, 1000 * secondsToRefresh)
        } else {
            el.click()
            alert('3060 in Stock.... BUY BUY BUY!!!!!')
        }
    } else if (location.pathname.indexOf(bestBuy3060tiPath) > -1) {
        const el = document.querySelector('.addToCartButton');
        console.log('In Stock')
        if (el.disabled) {
            ++bestBuyTimer
            secondsToRefresh = (70 + bestBuyTimer)
            console.log(`Out of Stock... Reloading in ${secondsToRefresh} seconds`)
            localStorage.setItem('best-buy-count', `${bestBuyTimer}`)
            setTimeout(() => {
                location.reload();
                if (bestBuyTimer > 9) {
                    localStorage.setItem('best-buy-count', `1`)
                }
            }, 1000 * secondsToRefresh)
        } else {
            el.click()
            alert('3060ti in Stock.... BUY BUY BUY!!!!!')
        }
    } else if (location.pathname.indexOf(bestBuy3070Path) > -1) {
        const el = document.querySelector('.addToCartButton');
        console.log('In Stock')
        if (el.disabled) {
            ++bestBuyTimer
            secondsToRefresh = (70 + bestBuyTimer)
            console.log(`Out of Stock... Reloading in ${secondsToRefresh} seconds`)
            localStorage.setItem('best-buy-count', `${bestBuyTimer}`)
            setTimeout(() => {
                location.reload();
                if (bestBuyTimer > 9) {
                    localStorage.setItem('best-buy-count', `1`)
                }
            }, 1000 * secondsToRefresh)
        } else {
            el.click()
            alert('3070 in Stock.... BUY BUY BUY!!!!!')
        }
    } else if (location.pathname.indexOf(confirmNoWarranty) > -1) {
        const el = document.querySelector('[data-automation="go-to-cart"]');
        console.log('Is Confirm Adding Page')
        if (el.disabled) {
            console.log('Error on Page')
            setTimeout(() => {
                location.reload();
            }, 1000 * 20)
        } else {
            console.log('Going to Cart!')
            el.click()
        }
    } else if (location.pathname.indexOf(paymentChoice) > -1) {
        alert('BUY THE STUFF MAN!')
    } else {
        console.log('Wrong Page : ' + location.href)
    }
}, 5000)
