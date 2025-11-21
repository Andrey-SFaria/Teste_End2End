import Page from "./page";

class HorizontalSlider extends Page {
    
    public async open() {
        super.open('/horizontal_slider');
    }

    public get slider(){
        return $('input[type=range]');
    }

    public get range(){
        return $('#range');
    }

    public async increase(i: number){
        this.slider.click()

        for (let index = 0; index < i; index++) {
            browser.keys('Numpad ArrowUp')
        }
    }

    public async decrease(i: number){
        this.slider.click()

        for (let index = i; index > 0; index--) {
            browser.keys('Numpad ArrowDown')
        }
    }

}

export default new HorizontalSlider();