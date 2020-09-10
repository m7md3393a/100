const Moment = require('moment')
const Discord = require('discord.js')
module.exports = client => {
  
  const R3LEASEDURUM = [
    '❤️',
    'soon',
    'A new system:💋',
    '© Hiuu.🖤',
    '🎉🎉🎉🎉🎉',
]
  client.user.setStatus('idle')
  
  setInterval(() => {
    const Aktivite = Math.floor(Math.random() * (R3LEASEDURUM.length - 0))
    client.user.setActivity(R3LEASEDURUM[Aktivite])
  }, 8000)
}