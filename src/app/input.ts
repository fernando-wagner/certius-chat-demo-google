import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject('Input')
export class Input {
    @JsonProperty('text', String)
    text: string = undefined;

    getText(): string {
        return this.text;
    }
}
