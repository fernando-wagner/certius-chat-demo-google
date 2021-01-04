import {JsonObject, JsonProperty} from 'json2typescript';
import {Intent} from './intent';
import {Entity} from './entity';
import {Generic} from './generic';

@JsonObject('MessageOutput')
export class MessageOutput {

    //@JsonProperty('intents', [Intent])
    //intents: Intent[] = undefined;

    //@JsonProperty('entities', [Entity])
    //entities: Entity[] = undefined;

    @JsonProperty('generics', [Generic])
    generic: Generic[] = undefined;


    getMessageList(): Generic[] {
        // const messageList: string[] = [];
        // // tslint:disable-next-line: only-arrow-functions
        // this.generic.forEach(function(value) {
        //     if (value.getResponseType() === 'text') {
        //        messageList.push(value.getText());
        //     }
        // });
        // console.log(messageList.length);
        return this.generic;
    }

}
