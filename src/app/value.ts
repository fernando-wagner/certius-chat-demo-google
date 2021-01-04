import {JsonObject, JsonProperty} from 'json2typescript';
import {Input} from './input';

@JsonObject('Generic')
export class Value {
    @JsonProperty('input', Input)
    input: Input = undefined;

    getText(): string {
        return this.input.getText();
    }
}
