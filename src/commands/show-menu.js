const  Stages  = require('./stages');

class ShowMenuCommand {
    constructor() {}

    execute(message, state, client){
        const { from, messageType, msg, messageId} = message;
        client.sendListMessage(from.phoneNumber,"Welcome to Recipes","Welcome to Clarity Recipes App, a healthier way to live","Kuzolunga",
        [
            {
                "title": "Select an Option",
                "rows": [
                    {
                        "id": "1234",
                        "title": "Set Goals",
                        "description": "Choose healthy goals"
                    },
                    {
                        "id": "5678",
                        "title": "Talk to Coach",
                        "description": "Speak to a health advisor"
                    },
                    {
                        "id": "8910",
                        "title": "Learn more",
                        "description": "Get health and support"
                    }
                ]
            }] )
        state.stage = Stages.MENU
        return state
    }
}

module.exports =  ShowMenuCommand