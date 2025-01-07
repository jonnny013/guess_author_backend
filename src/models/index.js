import Session from './session.js'
import Answer from './answer.js'
import Game from './game.js'

Session.hasMany(Answer, { foreignKey: 'session_id', onDelete: 'CASCADE' })
Answer.belongsTo(Session, { foreignKey: 'session_id', onDelete: 'CASCADE' })

Session.hasMany(Game, { foreignKey: 'sessionId', onDelete: 'CASCADE' })
Game.belongsTo(Session, { foreignKey: 'sessionId', onDelete: 'CASCADE' })

Answer.hasMany(Game, { foreignKey: 'answerId', onDelete: 'CASCADE' })
Game.belongsTo(Answer, { foreignKey: 'answerId', onDelete: 'CASCADE' })

export { Session, Answer, Game }
