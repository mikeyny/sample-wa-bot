// added typed stages to avoid spelling errors when typing stage names across different place
// just add them here and then use Stages(dot)StageName e.g Stages.START
const Stages = {
    START: 'START',
    RETURN: 'RETURN',
    MENU: 'MENU',
    HANDLE_GOALS: 'HANDLE_GOALS',
    SET_GOALS: 'SET_GOALS',
    COACH: 'COACH'
}

module.exports = Stages;