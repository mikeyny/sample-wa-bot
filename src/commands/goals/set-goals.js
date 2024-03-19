const RedisClient = require("../../utils/redis/redisCient");
const Stages = require("../stages")

class SetGoalCommand {
    redis = new RedisClient()
    constructor() {}
    execute(message, state, client){
        const { from, messageType, msg, messageId} = message;
        console.log("setting goals")
        const goal = msg.body;
        this.redis.setValue(`${from.phoneNumber}-goal`, goal)
        client.sendText(from.phoneNumber, "Goal has been set successfully : )", false)
        state.stage = Stages.RETURN
        return state
    }
}

module.exports = SetGoalCommand