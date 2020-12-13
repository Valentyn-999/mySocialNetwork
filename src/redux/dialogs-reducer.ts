import {ActionsTypes, DialogPageType} from "./store";

export type sendMessageAC = ReturnType<typeof sendMessageAC>
export type updateNewMessageBodyAC = ReturnType<typeof updateNewMessageBodyAC>
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState: DialogPageType = {
    dialogs: [
        {id: 1, name: "Kolia"},
        {id: 2, name: "Marina"},
        {id: 3, name: "Ludmila"},
        {id: 4, name: "Andrey"},
        {id: 5, name: "Anastasia"}
    ],
    messages: [
        {id: 1, message: "Hey Kolia) how is it going ?"},
        {id: 2, message: "as always. you ?"},
        {id: 3, message: "f**king awsome"},
        {id: 4, message: "yo"},
        {id: 5, message: "yo"}
    ],
    newMessageBody: ''
}

const dialogsReducer = (state: DialogPageType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            //4
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = ''
            state.messages.push({id: 6, message: body});
            return state
        default:
            return state
    }
}

export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE
    } as const
}
export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}

export default dialogsReducer