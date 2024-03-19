const ErrorCommand = require("../error-handler");
const ShowMenuCommand = require("../show-menu");
const RedisClient = require("../../utils/redis/redisCient");
const  Stages  = require('../stages');

class HandleGoalCommand {
    redis = new RedisClient()
    constructor() {}
    async execute(message, state, client){
        console.log("handling goals")
        const { from, messageType, msg, messageId} = message;
        if(messageType==="interactive" && msg.type==="list_reply"){
            switch(msg.list_reply.id){
                case "1234":
                    const goal = await this.redis.getValue(`${from.phoneNumber}-goal`)
                    if(goal){
                        client.sendText(from.phoneNumber, `Here are your goals: \n\n${goal}`, false)
                    }else{
                        client.sendText(from.phoneNumber, "You have not set any goals : /", false)
                    }
                    state.stage = Stages.RETURN
                    break;
                case "5678":
                    client.sendText(from.phoneNumber, "Type in your health goals", false)
                    state.stage = Stages.SET_GOALS
                    break;
                case "8910":
                    return new ShowMenuCommand().execute(message, state, client)
                    break;
                default:
                    return new ErrorCommand().execute(message, state, client)
            }
        }else{
            client.sendText(from.phoneNumber, "Please select one of the options above", false)
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
        }
    
        
        return state;
    }
}

module.exports = HandleGoalCommand