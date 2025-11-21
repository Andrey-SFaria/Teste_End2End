import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page'
import SecurePage from '../pageobjects/secure.page'
import checkboxesPage from '../pageobjects/checkboxes.page'
import horizontal_sliderPage from '../pageobjects/horizontal_slider.page'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
    })

    it('should fail login with invalid name', async () => {
        await LoginPage.open()

        await LoginPage.login('thomassmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('Your username is invalid!'))
    })

    it('should fail login with invalid password', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SecretPassword')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('Your password is invalid!'))
    })

    it ('should login and logout', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.logOutButton).toBeExisting()
        await SecurePage.logOut()
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged out of the secure area!'))
    })
})

describe('My checkbox application', () => {
    it ('should check if second checkbox is selected on open', async () => {
        await checkboxesPage.open()

        await expect(checkboxesPage.checkbox2).toBeEnabled
    })

    it ('should enable the first checkbox', async () => {
        await checkboxesPage.open()

        await checkboxesPage.toggleCheckbox(0)
    })

    it ('should have both checkboxes enabled', async () => {
        await checkboxesPage.open()

        await checkboxesPage.toggleCheckbox(0)
        await expect(checkboxesPage.checkbox1).toBeEnabled
        await expect(checkboxesPage.checkbox2).toBeEnabled
    })

    it ('should have both checkboxes disabled', async () => {
        await checkboxesPage.open()

        await checkboxesPage.toggleCheckbox(1)
        await expect(checkboxesPage.checkbox1).toBeDisabled
        await expect(checkboxesPage.checkbox2).toBeDisabled
    })
})

describe('My horizontal slider application', async () => {
    it ('should increase slider range', async () => {
        await horizontal_sliderPage.open()

        await horizontal_sliderPage.increase(5)
        await expect(horizontal_sliderPage.range).toHaveText(expect.stringContaining('2.5'))
    })
    
    it ('should check if range is zero', async () => {
        await horizontal_sliderPage.open()

        await expect(horizontal_sliderPage.range).toHaveText(expect.stringContaining('0'))
    })

    it ('should check overflow prevention', async () => {
        await horizontal_sliderPage.open()

        await horizontal_sliderPage.increase(20)
        await expect(horizontal_sliderPage.range).toHaveText(expect.stringContaining('5'))
    })

    it ('should check underflow prevention', async () => {
        await horizontal_sliderPage.open()

        await horizontal_sliderPage.decrease(10)
        await expect(horizontal_sliderPage.range).toHaveText(expect.stringContaining('0'))
    })

    it ('should increase and decrease slider range', async () => {
        await horizontal_sliderPage.open()

        await horizontal_sliderPage.increase(10)
        await horizontal_sliderPage.decrease(2)
        await expect(horizontal_sliderPage.range).toHaveText(expect.stringContaining('4'))
    })
})

