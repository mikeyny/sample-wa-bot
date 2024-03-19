const ErrorCommand = require("./error-handler");
const ShowMenuCommand = require("./show-menu");
const  Stages  = require('./stages');

class HandleStartCommand {

    constructor() {}
    execute(message, state, client){
        console.log("testing")
        const { from, messageType, msg, messageId} = message;
        if(messageType==="interactive" && msg.type==="list_reply"){
        switch(msg.list_reply.id){
            case "1234":
                client.sendListMessage(from.phoneNumber,"Welcome to Goals","Welcome to Clarity Recipes App, a healthier way to live","Kuzolunga",
                [
                    {
                        "title": "Select an Option",
                        "rows": [
                            {
                                "id": "1234",
                                "title": "Review Goals",
                                "description": "Choose healthy goals"
                            },
                            {
                                "id": "5678",
                                "title": "Set Goals",
                                "description": "Speak to a health advisor"
                            },
                            {
                                "id": "8910",
                                "title": "Back",
                                "description": "Get health and support"
                            }
                        ]
                    }] )
                    state.stage = Stages.HANDLE_GOALS
                break;
            case "5678":
                client.sendText(from.phoneNumber, "Talk to Coach", false)
                state.stage = Stages.COACH
                break;
            case "8910":
                client.sendText(from.phoneNumber, "Learnmore", false)
                state.stage = Stages.START
                break;
            default:
                return new ErrorCommand().execute(message, state, client)
        }
        }else{
            client.sendText(from.phoneNumber, "Please select one of the options above", false)
            return new ShowMenuCommand().execute(message, state, client)
        }
        
        return state;
    }
}

module.exports = HandleStartCommand