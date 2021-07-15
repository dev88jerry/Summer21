from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

import info

# make sure this path is correct
PATH = "C:\Program Files (x86)\ChromeDriver\chromedriver.exe"

driver = webdriver.Chrome(PATH)

RTX3060Link = "https://www.bestbuy.ca/en-ca/product/evga-nvidia-geforce-rtx-3060-xc-12gb-dddr6-video-card/15318940"
RTX3060tiLink = "https://www.bestbuy.ca/en-ca/product/nvidia-geforce-rtx-3060-ti-8gb-gddr6-video-card/15166285"
RTX3070Link = "https://www.bestbuy.ca/en-ca/product/nvidia-geforce-rtx-3070-8gb-gddr6-video-card-only-at-best-buy/15078017"


driver.get(RTX3070LINK)

isComplete = False

while not isComplete:
    # find add to cart button
    try:
        atcBtn = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, ".add-to-cart-button"))
        )
    except:
        driver.refresh()
        continue

    print("Add to cart button found")

    try:
        # add to cart
        atcBtn.click()

        # go to cart and begin checkout as guest
        # driver.get("https://www.bestbuy.com/cart")
        driver.get("https://www.bestbuy.ca/en-ca/basket")

        # todo Check xpath
        checkoutBtn = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/main/div/div[2]/div[1]/div/div/span/div/div[2]/div[1]/section[2]/div/div/div[3]/div/div[1]/button"))
        )
        checkoutBtn.click()
        print("Successfully added to cart - beginning check out")

        # should alredy be logged in... maybe not needed
        
        # fill in email and password
        emailField = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "fld-e"))
        )
        emailField.send_keys(info.email)

        pwField = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "fld-p1"))
        )
        pwField.send_keys(info.password)

        # click sign in button
        signInBtn = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/section/main/div[1]/div/div/div/div/form/div[3]/button"))
        )
        signInBtn.click()
        print("Signing in")

        # until here....

        # fill in card cvv
        cvvField = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "credit-card-cvv"))
        )
        cvvField.send_keys(info.cvv)
        print("Attempting to place order")

        # place order
        placeOrderBtn = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, ".button__fast-track"))
        )
        placeOrderBtn.click()

        isComplete = True
    except:
        # make sure this link is the same as the link passed to driver.get() before looping
        driver.get(RTX3070LINK)
        print("Error - restarting bot")
        continue

print("Order successfully placed")

