import Page from "./page";

class CheckboxesPage extends Page {
    
    public async open() {
        return super.open('checkboxes');
    }

    public get checkbox1() {
        return $$('input[type="checkbox"]')[0];
    }

    public get checkbox2() {
        return $$('input[type="checkbox"]')[1];
    }

    public async toggleCheckbox(index: number) {
        const checkbox = $$('input[type="checkbox"]')[index];
        checkbox.click();
    }

}

export default new CheckboxesPage();