
export class Message {
    text: string;
    type: string;
    isButton = false;
    clicked = false;
    family: number;
    textOnclick: string;


    constructor(text: string, type: string) {
        this.text = text;
        this.type = type;
    }

    getText(): string {
        return this.text;
    }

    getType(): string {
        return this.type;
    }

    turnIntoButton(family: number, textOnClick: string): void {
        this.family = family;
        this.textOnclick = textOnClick;
        this.type = 'button';
        this.isButton = true;
    }

    clickButton(): void {
        if (this.isButton) {
            this.clicked = true;
            this.type = 'buttonDisabled';
        }
    }

    optionSelected(): void {
        this.type = 'buttonSelected';
    }

    getFamily(): number {
        return this.family;
    }

    getTextOnClick(): string {
        return this.textOnclick;
    }

    getClicked(): boolean {
        return this.clicked;
    }


}
