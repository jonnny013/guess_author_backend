import Session from './session.js'
import Answer from './answer.js'
import Game from './game.js'

Session.hasMany(Answer, { foreignKey: 'session_id', onDelete: 'CASCADE' })
Answer.belongsTo(Session, { foreignKey: 'session_id', onDelete: 'CASCADE' })

Session.hasMany(Game, { foreignKey: 'session_id', onDelete: 'CASCADE' })
Game.belongsTo(Session, { foreignKey: 'session_id', onDelete: 'CASCADE' })

Answer.hasMany(Game, { foreignKey: 'answer_id', onDelete: 'CASCADE' })
Game.belongsTo(Answer, { foreignKey: 'answer_id', onDelete: 'CASCADE' })

export { Session, Answer, Game }
