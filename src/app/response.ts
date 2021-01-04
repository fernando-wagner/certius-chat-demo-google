import {JsonObject, JsonProperty} from 'json2typescript';
import {MessageOutput} from './messageoutput';
import {Generic} from './generic';

@JsonObject('Response')
export class Response {
    @JsonProperty('output', MessageOutput)
    output: MessageOutput = undefined;

    getResponseList(): Generic[] {
        return this.output.getMessageList();
    }

}
