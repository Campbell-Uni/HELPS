import {Identifiable} from './Identifiable';
import {isUndefined} from 'util';

export const MessageDictionaryMap: {[key: number]: keyof MessageDictionary} = {
    1: 'loginNotification'
};

export interface MessageDictionary {
    loginNotification?: string
};

export interface Message extends Identifiable {
    title: string;
    content: string;
}

export const messageEquals = (messageA: Message, messageB: Message, compareIds: boolean = false): boolean => {
    return (messageA.content === messageB.content && messageA.title === messageB.title) &&
        (!compareIds || messageA.id === messageB.id);
};

export const isMessage: (message: Message) => boolean = (message: Message) => {
    return !isUndefined(message.title) && !isUndefined(message.content);
};
