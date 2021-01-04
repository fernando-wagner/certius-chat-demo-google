import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject('Intent')
export class Intent {
    @JsonProperty('intent', String)
    intent: string = undefined;

    @JsonProperty('confidence', Number)
    confidence: number = undefined;
}
