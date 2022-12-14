import {
    checkUrl,
    checkSelectorContent
} from '../support/check';
import {
    clickSelector,
    inputSelectorValue
} from '../support/action';

// selectors
const createAccountButtonSelector = '#createAccountButton';
const setPasswordButtonSelector = '#setPasswordButton';
const statusSelector = '.c-main .b-rt-0:first-of-type .b-bold';
const passwordSelector = '#password';

// checks
const balanceTextPreCheck = '£';
const urlCheck = 'thanks';

/**
 * Checkout success page
 */
export default class DonateSuccessPage {
    /**
     * check if page ready
     */
    static async checkReady() {
        await checkUrl(urlCheck);
    }

    /**
     * check if balance updated
     * @param {int} donationAmount to check
     */
    static async checkBalance(donationAmount) {
        await checkSelectorContent(
            statusSelector,
            `${balanceTextPreCheck}${donationAmount}`,
        );
    }

    /**
     * Clicks on the 'Set a password' button
     */
    static async clickOnSetPasswordButton() {
        await clickSelector(setPasswordButtonSelector);
    }

    /**
     * Clicks on the 'Set a password' button
     */
    static async populatePassword() {
        await inputSelectorValue(passwordSelector, '0123456789');
    }

    /**
     * Clicks on the 'Create account' button
     */
    static async clickOnCreateAccountButton() {
        await clickSelector(createAccountButtonSelector);
    }
}
