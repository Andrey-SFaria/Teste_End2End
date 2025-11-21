import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get flashAlert () {
        return $('#flash');
    }

    public get logOutButton() {
        return $('a')
    }

    public async logOut() {
        return browser.url('https://the-internet.herokuapp.com/logout')
    }
}

export default new SecurePage();
