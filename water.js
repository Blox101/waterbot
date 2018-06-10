const Discord = require('discord.js');
const { prefix, token, Owners, Bot, } = require('./config.json');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ready!');
    client.user.setActivity('.help');
});

client.on('error', () => {
    console.log(error)
    message.channel.send({embed : {
        color: 0xFF0000,
    title: "An error occured!",
    description: `${error}`,
    timestamp: false,
    footer: {
      icon_url: client.user.avatarURL,
      text: "Please screenshot this message and inform **[REDACTED]#2373**"
    }
    }
  });
});


client.on('message', message => {
           if (message.content.startsWith(`${prefix}${commands}`)) {
              if (message.channel.type === "dm") {
                   message.channel.send({embed : {
        color: 0xFF0000,
    title: "An error occured!",
    description: `Commands cannot be used in Direct Messages!`,
    timestamp: false,
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Water Bot"
    }
    }
  });
              }
           }
           if (message) {
             if (!message.author.bot) {
             if (!message.channel.type === "dm") {
             message.guild.channels.find("name", "chat-logs").send({embed : {
                color: 3447003,
            title: "A message has been sent and logged!",
            fields: [{
              name: "Message Sent",
              value: `${message.content}`
            },
            {
                name: "Channel Sent In",
                value: `${message.channel}`
            },
            {
              name: "Sent by",
              value: `${message.author}`
            }],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "© Water Bot"
            }
        }
    });
    }
  }
}
    if (message.content === `${prefix}help`) {
        message.channel.send({embed : {
          color: 0x7CFC00,
      title: "Help is on the way!",
      description: "Check your direct messages! :mailbox_with_mail:",
      timestamp: false,
      footer: {
        icon_url: client.user.avatarURL,
        text: "© Water Bot"
      }
      }
  });
        message.author.send({embed: {
            color: 3447003,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "Water Bot Commands Menu",
            url: "",
            description: "List of commands for the Water Bot",
            fields: [{
                name: ".help",
                value: "Shows up the bot commands menu for water bot. - Access Level 1"
              },
              {
                name: ".membercount",
                value: "Shows up the current total members in the server. - Access Level 1"
              },
              {
                name: ".accesslevel",
                value: "Shows up your access level or the mentioned user access level. - Access Level 1"
              },
              {
                name: ".8ball",
                value: "Ask the bot a question. - Access Level 1"
              },
              {
                name: ".kick",
                value: "Kicks the mentioned user. - Access Level 2"
              },
              {
                name: ".ban",
                value: "Bans the mentioned user. - Access Level 2"
              },
              {
                name: ".mute",
                value: "Mutes the mentioned user. - Access Level 2"
              },
              {
                name: ".unmute",
                value: "Revokes the mute for the mentioned user. - Access Level 2"
              },
              {
                name: ".lockdown",
                value: "Lockdown the targeted channel. - Access Level 2"
              },
              {
                name: ".unlockdown",
                value: "Revokes the lockdown for the targeted channel. - Access Level 2"
              },
              {
                name: ".addmod",
                value: "Gives the mentioned user mod permissions. - Access Level 3"
              },
              {
                name: ".delmod",
                value: "Removes the mentioned user mod permissions. - Access Level 3"
              },
              {
                name: ".uptime",
                value: "Shows up the bot's uptime. - Access Level 3"
              },
              {
                name: ".shutdown",
                value: "Shutdowns the bot. - Access Level 3"
              },
            ],
            timestamp: false,
            footer: {
              icon_url: client.user.avatarURL,
              text: "© Water Bot"
            }
          }
        });
    }
  else if (message.content.startsWith(`${prefix}8ball`)) {
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      let question = args.slice(1).join(" ");
      let replies = ["Yes.", "No.", "I'm certian of.", "I am not sure.", "Answer Uncertain", "Definetely no.", "YES!"]
      let result = Math.floor((Math.random() * replies.length));
      if (question) {
        message.channel.send({embed : {
          color: 0x7CFC00,
      title: "A question has been asked!",
      fields: [{
        name: "Question Asked",
        value: `${question}`
      },
      {
        name: "Answer",
        value: `${replies[result]}`
      }],
      timestamp: false,
      footer: {
        icon_url: client.user.avatarURL,
        text: "© Water Bot"
      }
      }
  });
      }
      else
      message.channel.send({embed : {
        color: 0xFF0000,
    title: "Insufficient Arguments!",
    description: `Please ask a question!`,
    timestamp: false,
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Water Bot"
    }
    }
  });
    }
  else if (message.content === `${prefix}membercount`) {
  const guild = message.guild
  const allmembers = guild.memberCount
  message.channel.send({embed : {
          color: 0x7CFC00,
      title: "Membercount Found!",
      description: `${allmembers}`,
      timestamp: false,
      footer: {
        icon_url: client.user.avatarURL,
        text: "© Water Bot"
      }
      }
  });
}
    else if (message.content.startsWith(`${prefix}accesslevel`)) {
      const mentionedmember = message.mentions.members.first();
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      let firstword = args.slice(1).join(" ");
      if (firstword) {
      if (mentionedmember) {
      if (Owners.includes(mentionedmember.id)) {
        message.channel.send({embed : {
          color: 0x7CFC00,
      title: "Access Level Found!",
      description: `${mentionedmember} access level is 3 - Water Bot Owner`,
      timestamp: false,
      footer: {
        icon_url: client.user.avatarURL,
        text: "© Water Bot"
      }
      }
  });
      }
      else if (mentionedmember.roles.some(r=>["mod access"].includes(r.name)) ) {
        message.channel.send({embed : {
          color: 0x7CFC00,
      title: "Access Level Found!",
      description: `${mentionedmember} access level is 2 - Water Bot Moderator`,
      timestamp: false,
      footer: {
        icon_url: client.user.avatarURL,
        text: "© Water Bot"
      }
      }
  });
      }
      else 
      message.channel.send({embed : {
        color: 0x7CFC00,
    title: "Access Level Found!",
    description: `${mentionedmember} access level is 1 - Water Bot User`,
    timestamp: false,
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Water Bot"
    }
    }
});
    }
  }
  else if (Owners.includes(message.member.id)) {
    message.channel.send({embed : {
      color: 0x7CFC00,
  title: "Access Level Found! ",
  description: `${message.member} access level is 3 - Water Bot Owner`,
  timestamp: false,
  footer: {
    icon_url: client.user.avatarURL,
    text: "© Water Bot"
  }
  }
});
  }
  else if (message.member.roles.some(r=>["mod access"].includes(r.name)) ) {
    message.channel.send({embed : {
      color: 0x7CFC00,
  title: "Access Level Found! ",
  description: `${message.member} access level is 2 - Water Bot Moderator`,
  timestamp: false,
  footer: {
    icon_url: client.user.avatarURL,
    text: "© Water Bot"
  }
  }
});
  }
  else 
  message.channel.send({embed : {
    color: 0x7CFC00,
title: "Access Level Found! ",
description: `${message.member} access level is 1 - Water Bot User`,
timestamp: false,
footer: {
  icon_url: client.user.avatarURL,
  text: "© Water Bot"
}
}
});
    }
    else if (message.content.startsWith(`${prefix}kick`)) {
        const mentionedmember = message.mentions.members.first();
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const modlogs = message.guild.channels.find("name", "mod-logs")
        let reason = args.slice(2).join(" ");
        if (Owners.includes(message.author.id)) {
            if (mentionedmember) {
            if (Owners.includes(mentionedmember.id)) {
              message.channel.send({embed : {
                color: 0xFF0000,
            title: "Kick Failure!",
            description: `The user you are trying to kick has the same or higher access level than you!`,
            timestamp: false,
            footer: {
              icon_url: client.user.avatarURL,
              text: "© Water Bot"
            }
            }
          });
            }
            else
            if (mentionedmember.kickable) {
            if (reason) {
                mentionedmember.send(`You have been kicked from Water YT Discord. Reason : ${reason}`)
                .then(() => {
                message.delete();
                mentionedmember.kick();
                message.channel.send({embed : {
                  color: 0x7CFC00,
              title: "Kick Success!",
              description: `${mentionedmember} has been kicked from the server!`,
              timestamp: false,
              footer: {
                icon_url: client.user.avatarURL,
                text: "© Water Bot"
              }
              }
          });
           modlogs.send({embed : {
                  color: 3447003,
              title: "User has been kicked!",
              fields: [{
                name: "User",
                value: `${mentionedmember}`
              },
              {
                name: "Moderator",
                value: `${message.member}`
              },
              {
                name: "Reason",
                value: `${reason}`
              }],
              timestamp: new Date(),
              footer: {
                icon_url: client.user.avatarURL,
                text: "© Water Bot"
              }
              }
          });
                })
                }
                else message.channel.send({embed : {
                  color: 0xFF0000,
              title: "Insufficient Arguments!",
              description: "Please include the reason for the kick!",
              timestamp: false,
              footer: {
                icon_url: client.user.avatarURL,
                text: "© Water Bot"
              }
              }
            });
              }
              else message.channel.send({embed : {
                color: 0xFF0000,
            title: "Kick Failure!",
            description: "I am unable to kick this user. Please ensure that my current role is higher than them and has the permission to kick members!",
            timestamp: false,
            footer: {
              icon_url: client.user.avatarURL,
              text: "© Water Bot"
            }
            }
          });
           }
           else message.channel.send({embed : {
            color: 0xFF0000,
        title: "Insufficient Arguments!",
        description: "Please mention the user that you want to kick!",
        timestamp: false,
        footer: {
          icon_url: client.user.avatarURL,
          text: "© Water Bot"
        }
        }
      });
        }
        else
        if (message.member.roles.some(r=>["mod access"].includes(r.name)) ) {
        if (mentionedmember) {
        if (Owners.includes(mentionedmember.id)) {
          message.channel.send({embed : {
            color: 0xFF0000,
        title: "Kick Failure!",
        description: `The user you are trying to kick has the same or higher access level than you!`,
        timestamp: false,
        footer: {
          icon_url: client.user.avatarURL,
          text: "© Water Bot"
        }
        }
      });
        }
        else
        if (mentionedmember.kickable) {
        if (mentionedmember.roles.some(r=>["mod access"].includes(r.name)) ) {
          message.channel.send({embed : {
            color: 0xFF0000,
        title: "Kick Failure!",
        description: `The user you are trying to kick has the same or higher access level than you!`,
        timestamp: false,
        footer: {
          icon_url: client.user.avatarURL,
          text: "© Water Bot"
        }
        }
    });
  }
  else
        if (reason) {
            mentionedmember.send(`You have been kicked from Water YT Discord. Reason : ${reason}`)
            .then(() => {
            message.delete();
            mentionedmember.kick();
            message.channel.send({embed : {
              color: 0x7CFC00,
          title: "Kick Success!",
          description: `${mentionedmember} has been kicked from the server!`,
          timestamp: false,
          footer: {
            icon_url: client.user.avatarURL,
            text: "© Water Bot"
          }
          }
      });
       modlogs.send({embed : {
              color: 3447003,
          title: "User has been kicked!",
          fields: [{
            name: "User",
            value: `${mentionedmember}`
          },
          {
            name: "Moderator",
            value: `${message.member}`
          },
          {
            name: "Reason",
            value: `${reason}`
          }],
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
            text: "© Water Bot"
          }
          }
      });
            })
            }
            else message.channel.send({embed : {
              color: 0xFF0000,
          title: "Insufficient Arguments!",
          description: "Please include the reason for the kick!",
          timestamp: false,
          footer: {
            icon_url: client.user.avatarURL,
            text: "© Water Bot"
          }
          }
        });
          }
          else message.channel.send({embed : {
            color: 0xFF0000,
        title: "Kick Failure!",
        description: "I am unable to kick this user. Please ensure that my current role is higher than them and has the permission to kick members!",
        timestamp: false,
        footer: {
          icon_url: client.user.avatarURL,
          text: "© Water Bot"
        }
        }
      });
       }
       else message.channel.send({embed : {
        color: 0xFF0000,
    title: "Insufficient Arguments!",
    description: "Please mention the user that you want to kick!",
    timestamp: false,
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Water Bot"
    }
    }
  });
    }
    else message.channel.send({embed : {
      color: 0xFF0000,
  title: "Insufficient Permissions!",
  description: "This command is only usable by Access Level 2 or above!",
  timestamp: false,
  footer: {
    icon_url: client.user.avatarURL,
    text: "© Water Bot"
  }
  }
});
}
else if (message.content.startsWith(`${prefix}ban`)) {
  const mentionedmember = message.mentions.members.first();
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const modlogs = message.guild.channels.find("name", "mod-logs")
  let reason = args.slice(2).join(" ");
  if (Owners.includes(message.author.id)) {
    if (mentionedmember) {
    if (Owners.includes(mentionedmember.id)) {
      message.channel.send({embed : {
        color: 0xFF0000,
    title: "Ban Failure!",
    description: `The user you are trying to kick has the same or higher access level than you!`,
    timestamp: false,
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Water Bot"
    }
    }
  });
    }
    else
    if (mentionedmember.kickable) {
    if (reason) {
        mentionedmember.send(`You have been banned from Water YT Discord. Reason : ${reason}`)
        .then(() => {
        message.delete();
        mentionedmember.ban();
        message.channel.send({embed : {
          color: 0x7CFC00,
      title: "Ban Success!",
      description: `${mentionedmember} has been banned from the server!`,
      timestamp: false,
      footer: {
        icon_url: client.user.avatarURL,
        text: "© Water Bot"
      }
      }
  });
   modlogs.send({embed : {
          color: 3447003,
      title: "User has been banned!",
      fields: [{
        name: "User",
        value: `${mentionedmember}`
      },
      {
        name: "Moderator",
        value: `${message.member}`
      },
      {
        name: "Reason",
        value: `${reason}`
      }],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "© Water Bot"
      }
      }
  });
        })
        }
        else message.channel.send({embed : {
          color: 0xFF0000,
      title: "Insufficient Arguments!",
      description: "Please include the reason for the ban!",
      timestamp: false,
      footer: {
        icon_url: client.user.avatarURL,
        text: "© Water Bot"
      }
      }
    });
      }
      else message.channel.send({embed : {
        color: 0xFF0000,
    title: "Ban Failure!",
    description: "I am unable to ban this user. Please ensure that my current role is higher than them and has the permission to ban members!",
    timestamp: false,
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Water Bot"
    }
    }
  });
   }
   else message.channel.send({embed : {
    color: 0xFF0000,
title: "Insufficient Arguments!",
description: "Please mention the user that you want to ban!",
timestamp: false,
footer: {
  icon_url: client.user.avatarURL,
  text: "© Water Bot"
}
}
});
}
else
  if (message.member.roles.some(r=>["mod access"].includes(r.name)) ) {
  if (mentionedmember) {
  if (Owners.includes(mentionedmember.id)) {
    message.channel.send({embed : {
      color: 0xFF0000,
  title: "Ban Failure!",
  description: `The user you are trying to ban has the same or higher access level than you!`,
  timestamp: false,
  footer: {
    icon_url: client.user.avatarURL,
    text: "© Water Bot"
  }
  }
});
  }
  else
  if (mentionedmember.bannable) {
  if (mentionedmember.roles.some(r=>["mod access"].includes(r.name)) ) {
    message.channel.send({embed : {
      color: 0xFF0000,
  title: "Ban Failure!",
  description: `The user you are trying to ban has the same or higher access level than you!`,
  timestamp: false,
  footer: {
    icon_url: client.user.avatarURL,
    text: "© Water Bot"
  }
  }
});
}
else
  if (reason) {
      mentionedmember.send(`You have been banned from Water YT Discord. Reason : ${reason}`)
      .then(() => {
      message.delete();
      mentionedmember.ban();
      message.channel.send({embed : {
        color: 0x7CFC00,
    title: "Ban Success!",
    description: `${mentionedmember} has been banned from the server!`,
    timestamp: false,
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Water Bot"
    }
    }
});
 modlogs.send({embed : {
        color: 3447003,
    title: "User has been banned!",
    fields: [{
      name: "User",
      value: `${mentionedmember}`
    },
    {
      name: "Moderator",
      value: `${message.member}`
    },
    {
      name: "Reason",
      value: `${reason}`
    }],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Water Bot"
    }
    }
});
      })
      }
      else message.channel.send({embed : {
        color: 0xFF0000,
    title: "Insufficient Arguments!",
    description: "Please include the reason for the ban!",
    timestamp: false,
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Water Bot"
    }
    }
  });
    }
    else message.channel.send({embed : {
      color: 0xFF0000,
  title: "Ban Failure!",
  description: "I am unable to ban this user. Please ensure that my current role is higher than them and has the permission to ban members!",
  timestamp: false,
  footer: {
    icon_url: client.user.avatarURL,
    text: "© Water Bot"
  }
  }
});
 }
 else message.channel.send({embed : {
  color: 0xFF0000,
title: "Insufficient Arguments!",
description: "Please mention the user that you want to ban!",
timestamp: false,
footer: {
icon_url: client.user.avatarURL,
text: "© Water Bot"
}
}
});
}
else message.channel.send({embed : {
color: 0xFF0000,
title: "Insufficient Permissions!",
description: "This command is only usable by Access Level 2 or above!",
timestamp: false,
footer: {
icon_url: client.user.avatarURL,
text: "© Water Bot"
}
}
});
}
else if (message.content.startsWith(`${prefix}mute`)) {
  const mentionedmember = message.mentions.members.first();
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const modlogs = message.guild.channels.find("name", "mod-logs")
  const allcategory = message.guild.channels.find("name", "general")
  let reason = args.slice(2).join(" ");
  if (Owners.includes(message.author.id)) {
  if (mentionedmember) {
  if (reason) {
  if (mentionedmember.hasPermission("ADMINISTRATOR")) { 
    message.channel.send({embed : {
      color: 0xFF0000,
    title: "Mute Failure",
    description: "The user you are trying to mute has the permission `ADMINSTRATOR` that allows the user to be able to bypass the mute!",
    timestamp: false,
    footer: {
    icon_url: client.user.avatarURL,
    text: "© Water Bot"
    }
    }
    });
  }
  else if (allcategory.permissionsFor(mentionedmember).hasPermission("SEND_MESSAGES")) {
    allcategory.overwritePermissions(mentionedmember, {
      READ_MESSAGES: true,
      SEND_MESSAGES: false
    })
    .then(() => {
    message.channel.send({embed : {
      color: 0x7CFC00,
    title: "Mute Success!",
    description: `${mentionedmember} has been muted in the server!`,
    timestamp: false,
    footer: {
    icon_url: client.user.avatarURL,
    text: "© Water Bot"
    }
    }
    });
    modlogs.send({embed : {
      color: 3447003,
  title: "User has been muted!",
  fields: [{
    name: "User",
    value: `${mentionedmember}`
  },
  {
    name: "Moderator",
    value: `${message.member}`
  },
  {
    name: "Reason",
    value: `${reason}`
  }],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "© Water Bot"
  }
  }
});
    })
  }
  else
    message.channel.send({embed : {
      color: 0xFF0000,
    title: "Mute Failure!",
    description: "The user you are trying to mute is already muted!",
    timestamp: false,
    footer: {
    icon_url: client.user.avatarURL,
    text: "© Water Bot"
    }
    }
    });
}
  else
  message.channel.send({embed : {
    color: 0xFF0000,
  title: "Insufficient Arguments!",
  description: "Please include the reason for the mute!",
  timestamp: false,
  footer: {
  icon_url: client.user.avatarURL,
  text: "© Water Bot"
  }
  }
  });
  }
  else
message.channel.send({embed : {
  color: 0xFF0000,
title: "Insufficient Arguments!",
description: "Please mention the user that you want to mute!",
timestamp: false,
footer: {
icon_url: client.user.avatarURL,
text: "© Water Bot"
}
}
});
}
else if (message.member.roles.some(r=>["mod access"].includes(r.name)) ) {
if (mentionedmember) {
if (Owners.includes(mentionedmember.id)) {
  message.channel.send({embed : {
    color: 0xFF0000,
title: "Mute Failure!",
description: `The user you are trying to mute has the same or higher access level than you!`,
timestamp: false,
footer: {
  icon_url: client.user.avatarURL,
  text: "© Water Bot"
}
}
});
}
else if (mentionedmember.roles.some(r=>["mod access"].includes(r.name)) ) {
  message.channel.send({embed : {
    color: 0xFF0000,
title: "Mute Failure!",
description: `The user you are trying to mute has the same or higher access level than you!`,
timestamp: false,
footer: {
  icon_url: client.user.avatarURL,
  text: "© Water Bot"
}
}
});
}
else if (mentionedmember.hasPermission("ADMINISTRATOR")) { 
    message.channel.send({embed : {
      color: 0xFF0000,
    title: "Mute Failure",
    description: "The user you are trying to mute has the permission `ADMINSTRATOR` that allows the user to be able to bypass the mute!",
    timestamp: false,
    footer: {
    icon_url: client.user.avatarURL,
    text: "© Water Bot"
    }
    }
    });
  }
  else if (allcategory.permissionsFor(mentionedmember).hasPermission("SEND_MESSAGES")) {
    allcategory.overwritePermissions(mentionedmember, {
      READ_MESSAGES: true,
      SEND_MESSAGES: false
    })
    .then(() => {
      message.channel.send({embed : {
        color: 0x7CFC00,
      title: "Mute Success!",
      description: `${mentionedmember} has been muted in the server!`,
      timestamp: false,
      footer: {
      icon_url: client.user.avatarURL,
      text: "© Water Bot"
      }
      }
      });
      modlogs.send({embed : {
        color: 3447003,
    title: "User has been muted!",
    fields: [{
      name: "User",
      value: `${mentionedmember}`
    },
    {
      name: "Moderator",
      value: `${message.member}`
    },
    {
      name: "Reason",
      value: `${reason}`
    }],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Water Bot"
    }
    }
  });
      })
  }
  else
    message.channel.send({embed : {
      color: 0xFF0000,
    title: "Mute Failure!",
    description: "The user you are trying to mute is already muted!",
    timestamp: false,
    footer: {
    icon_url: client.user.avatarURL,
    text: "© Water Bot"
    }
    }
    });
  }
  else
message.channel.send({embed : {
  color: 0xFF0000,
title: "Insufficient Arguments!",
description: "Please mention the user that you want to mute!",
timestamp: false,
footer: {
icon_url: client.user.avatarURL,
text: "© Water Bot"
}
}
});
}
else
message.channel.send({embed : {
  color: 0xFF0000,
title: "Insufficient Permissions!",
description: "This command is only for access level 2 and above!",
timestamp: false,
footer: {
icon_url: client.user.avatarURL,
text: "© Water Bot"
}
}
});
}
else if (message.content.startsWith(`${prefix}unmute`)) {
  const mentionedmember = message.mentions.members.first();
  const allcategory = message.guild.channels.find("name", "general")
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const modlogs = message.guild.channels.find("name", "mod-logs")
  let reason = args.slice(2).join(" ");
  if (Owners.includes(message.author.id)) {
  if (mentionedmember) {
  if (reason) {
  if (allcategory.permissionsFor(mentionedmember).hasPermission("SEND_MESSAGES")) {
    message.channel.send({embed : {
      color: 0xFF0000,
    title: "Unmute Failure!",
    description: "The user you are trying to unmute is not even muted!",
    timestamp: false,
    footer: {
    icon_url: client.user.avatarURL,
    text: "© Water Bot"
    }
    }
    });
  }
  else
  allcategory.overwritePermissions(mentionedmember, {
    SEND_MESSAGES: null
  })
  .then(() => {
    message.channel.send({embed : {
      color: 0x7CFC00,
    title: "Unmute Success!",
    description: `${mentionedmember} has been unmuted in the server!`,
    timestamp: false,
    footer: {
    icon_url: client.user.avatarURL,
    text: "© Water Bot"
    }
    }
    });
    modlogs.send({embed : {
      color: 3447003,
  title: "User has been unmuted!",
  fields: [{
    name: "User",
    value: `${mentionedmember}`
  },
  {
    name: "Moderator",
    value: `${message.member}`
  },
  {
    name: "Reason",
    value: `${reason}`
  }],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "© Water Bot"
  }
  }
})
})
  }
   else message.channel.send({embed : {
    color: 0xFF0000,
  title: "Insufficient Arguments!",
  description: "Please include the reason for your unmute!",
  timestamp: false,
  footer: {
  icon_url: client.user.avatarURL,
  text: "© Water Bot"
  }
  }
  });
}
  else message.channel.send({embed : {
    color: 0xFF0000,
  title: "Insufficient Arguments!",
  description: "Please mention the user that you want to unmute!",
  timestamp: false,
  footer: {
  icon_url: client.user.avatarURL,
  text: "© Water Bot"
  }
  }
  });
  }
  else if (message.member.roles.some(r=>["mod access"].includes(r.name)) ) {
  if (mentionedmember) {
    if (reason) {
    if (allcategory.permissionsFor(mentionedmember).hasPermission("SEND_MESSAGES")) {
      message.channel.send({embed : {
        color: 0xFF0000,
      title: "Unmute Failure!",
      description: "The member you are trying to unmute is not even muted!",
      timestamp: false,
      footer: {
      icon_url: client.user.avatarURL,
      text: "© Water Bot"
      }
      }
      });
    }
    else
    allcategory.overwritePermissions(mentionedmember, {
      SEND_MESSAGES: null
    })
    .then(() => {
      message.channel.send({embed : {
        color: 0x7CFC00,
      title: "Mute Success!",
      description: `${mentionedmember} has been unmuted in the server!`,
      timestamp: false,
      footer: {
      icon_url: client.user.avatarURL,
      text: "© Water Bot"
      }
      }
      });
      modlogs.send({embed : {
        color: 3447003,
    title: "User has been unmuted!",
    fields: [{
      name: "User",
      value: `${mentionedmember}`
    },
    {
      name: "Moderator",
      value: `${message.member}`
    },
    {
      name: "Reason",
      value: `${reason}`
    }],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Water Bot"
    }
    }
  })
})
    }
  else
   message.channel.send({embed : {
    color: 0xFF0000,
  title: "Insufficient Arguments!",
  description: "Please include the reason for your unmute!",
  timestamp: false,
  footer: {
  icon_url: client.user.avatarURL,
  text: "© Water Bot"
  }
  }
  });
}
else message.channel.send({embed : {
  color: 0xFF0000,
title: "Insufficient Arguments!",
description: "Please mention the user that you want to unmute!",
timestamp: false,
footer: {
icon_url: client.user.avatarURL,
text: "© Water Bot"
}
}
});
}
else message.channel.send({embed : {
  color: 0xFF0000,
title: "Insufficient Permissions!",
description: "This command is only usable by access level 2 and above!",
timestamp: false,
footer: {
icon_url: client.user.avatarURL,
text: "© Water Bot"
}
}
});
}
else if (message.content.startsWith(`${prefix}lockdown`)) {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const modlogs = message.guild.channels.find("name", "mod-logs")
  let targetchannel = args.slice(1).join(" ");
  const lockdownchannel = message.guild.channels.find("name", (targetchannel))
  const guild = message.guild

  if (Owners.includes(message.author.id)) {
    if (targetchannel) {
    if (lockdownchannel) {
      lockdownchannel.overwritePermissions(guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.channel.send({embed : {
          color: 0x7CFC00,
        title: "Lockdown Success!",
        description: `#${targetchannel} is now in lockdown mode!`,
        timestamp: false,
        footer: {
        icon_url: client.user.avatarURL,
        text: "© Water Bot"
        }
        }
        });
        modlogs.send({embed : {
          color: 3447003,
      title: "Channel Lockdown!",
      fields: [{
        name: "Lockdown Channel",
        value: `#${targetchannel}`
      },
      {
        name: "Moderator",
        value: `${message.member}`
      }],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "© Water Bot"
      }
      }
    })
      })
    }
    else
    message.channel.send({embed : {
      color: 0xFF0000,
    title: "Lockdown Failure!",
    description: "The channel you are trying to lockdown does not exist!",
    timestamp: false,
    footer: {
    icon_url: client.user.avatarURL,
    text: "© Water Bot"
    }
    }
    });
    }
    else
    message.channel.send({embed : {
      color: 0xFF0000,
    title: "Insufficient Arguments!",
    description: "Please include the channel you want to lockdown!",
    timestamp: false,
    footer: {
    icon_url: client.user.avatarURL,
    text: "© Water Bot"
    }
    }
    });
  }
  else if (message.member.roles.some(r=>["mod access"].includes(r.name)) ) {
  if (targetchannel) {
    if (lockdownchannel) {
      lockdownchannel.overwritePermissions(guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.channel.send({embed : {
          color: 0x7CFC00,
        title: "Lockdown Success!",
        description: `#${targetchannel} is now in lockdown mode!`,
        timestamp: false,
        footer: {
        icon_url: client.user.avatarURL,
        text: "© Water Bot"
        }
        }
        });
        modlogs.send({embed : {
          color: 3447003,
      title: "Channel Lockdown!",
      fields: [{
        name: "Lockdown Channel",
        value: `#${targetchannel}`
      },
      {
        name: "Moderator",
        value: `${message.member}`
      }],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "© Water Bot"
      }
      }
    })
      })
    }
    else
    message.channel.send({embed : {
      color: 0xFF0000,
    title: "Lockdown Failure!",
    description: "The channel you are trying to lockdown does not exist!",
    timestamp: false,
    footer: {
    icon_url: client.user.avatarURL,
    text: "© Water Bot"
    }
    }
    });
    }
    else
    message.channel.send({embed : {
      color: 0xFF0000,
    title: "Insufficient Arguments!",
    description: "Please include the channel you want to lockdown!",
    timestamp: false,
    footer: {
    icon_url: client.user.avatarURL,
    text: "© Water Bot"
    }
    }
    });
  }
  else
  message.channel.send({embed : {
    color: 0xFF0000,
  title: "Insufficient Permissions!",
  description: "This command is only usable by access level 2 and above!",
  timestamp: false,
  footer: {
  icon_url: client.user.avatarURL,
  text: "© Water Bot"
  }
  }
  });
}
  else if (message.content.startsWith(`${prefix}unlockdown`)) {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const modlogs = message.guild.channels.find("name", "mod-logs")
  let targetchannel = args.slice(1).join(" ");
  const unlockdownchannel = message.guild.channels.find("name", (targetchannel))
  const guild = message.guild
  const unlockablechannels = ["general","bot-commands","test"]

  if (Owners.includes(message.author.id)) {
    if (targetchannel) {
    if (unlockdownchannel) {
    if (unlockablechannels.includes(targetchannel)) {
      unlockdownchannel.overwritePermissions(guild.id, {
        SEND_MESSAGES: null
      })
      .then(() => {
        message.channel.send({embed : {
          color: 0x7CFC00,
        title: "Unlockdown Success!",
        description: `#${targetchannel} is now no longer in lockdown mode!`,
        timestamp: false,
        footer: {
        icon_url: client.user.avatarURL,
        text: "© Water Bot"
        }
        }
        });
        modlogs.send({embed : {
          color: 3447003,
      title: "Channel Unlockdown!",
      fields: [{
        name: "Unlockdown Channel",
        value: `#${targetchannel}`
      },
      {
        name: "Moderator",
        value: `${message.member}`
      }],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "© Water Bot"
      }
      }
    })
      })
    }
    else
     message.channel.send({embed : {
      color: 0xFF0000,
    title: "Unlockdown Failure!",
    description: "The channel you are trying to unlockdown is not unlockable!",
    timestamp: false,
    footer: {
    icon_url: client.user.avatarURL,
    text: "© Water Bot"
    }
    }
    });
}
    else
    message.channel.send({embed : {
      color: 0xFF0000,
    title: "Unlckdown Failure!",
    description: "The channel you are trying to unlockdown does not exist!",
    timestamp: false,
    footer: {
    icon_url: client.user.avatarURL,
    text: "© Water Bot"
    }
    }
    });
    }
    else
    message.channel.send({embed : {
      color: 0xFF0000,
    title: "Insufficient Arguments!",
    description: "Please include the channel you want to unlockdown!",
    timestamp: false,
    footer: {
    icon_url: client.user.avatarURL,
    text: "© Water Bot"
    }
    }
    });
  }
  else if (message.member.roles.some(r=>["mod access"].includes(r.name)) ) {
  if (targetchannel) {
    if (unlockdownchannel) {
     if (unlockablechannels.includes(targetchannel)) {
      unlockdownchannel.overwritePermissions(guild.id, {
        SEND_MESSAGES: null
      })
      .then(() => {
        message.channel.send({embed : {
          color: 0x7CFC00,
        title: "Unlockdown Success!",
        description: `#${targetchannel} is now no longer in lockdown mode!`,
        timestamp: false,
        footer: {
        icon_url: client.user.avatarURL,
        text: "© Water Bot"
        }
        }
        });
        modlogs.send({embed : {
          color: 3447003,
      title: "Channel Unlockdown!",
          
          
      fields: [{
        name: "Unlockdown Channel",
        value: `#${targetchannel}`
      },
      {
        name: "Moderator",
        value: `${message.member}`
      }],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "© Water Bot"
      }
      }
    })
      })
    }
     else
     message.channel.send({embed : {
      color: 0xFF0000,
    title: "Unlockdown Failure!",
    description: "The channel you are trying to unlockdown is not unlockable!",
    timestamp: false,
    footer: {
    icon_url: client.user.avatarURL,
    text: "© Water Bot"
    }
    }
    });
}
    else
    message.channel.send({embed : {
      color: 0xFF0000,
    title: "Unlockdown Failure!",
    description: "The channel you are trying to unlockdown does not exist!",
    timestamp: false,
    footer: {
    icon_url: client.user.avatarURL,
    text: "© Water Bot"
    }
    }
    });
    }
    else
    message.channel.send({embed : {
      color: 0xFF0000,
    title: "Insufficient Arguments!",
    description: "Please include the channel you want to unlockdown!",
    timestamp: false,
    footer: {
    icon_url: client.user.avatarURL,
    text: "© Water Bot"
    }
    }
    });
  }
  else
  message.channel.send({embed : {
    color: 0xFF0000,
  title: "Insufficient Permissions!",
  description: "This command is only usable by access level 2 and above!",
  timestamp: false,
  footer: {
  icon_url: client.user.avatarURL,
  text: "© Water Bot"
  }
  }
  });
}
else if (message.content.startsWith(`${prefix}addmod`)) {
  const mentionedmember = message.mentions.members.first();
  const mod = message.guild.roles.find("name", "mod access")
  const modlogs = message.guild.channels.find("name", "mod-logs")

  if (Owners.includes(message.author.id)) {
  if (mentionedmember) {
  if (mentionedmember.roles.some(r=>["mod access"].includes(r.name)) ) {
    message.channel.send({embed : {
      color: 0xFF0000,
    title: "Addmod Failure!",
    description: "The user you are trying to addmod is already a bot moderator!",
    timestamp: false,
    footer: {
    icon_url: client.user.avatarURL,
    text: "© Water Bot"
    }
    }
    });
  }
  else
  mentionedmember.addRole(mod)
  .then (() => {
    message.channel.send({embed : {
      color: 0x7CFC00,
    title: "Addmod Success!",
    description: `${mentionedmember} is now a bot moderator!`,
    timestamp: false,
    footer: {
    icon_url: client.user.avatarURL,
    text: "© Water Bot"
    }
    }
    });
    modlogs.send({embed : {
      color: 3447003,
  title: "New bot moderator!",
  fields: [{
    name: "User",
    value: `${mentionedmember}`
  },
  {
    name: "Moderator",
    value: `${message.member}`
  }],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "© Water Bot"
  }
  }
})
  })
  }
  else
  message.channel.send({embed : {
    color: 0xFF0000,
  title: "Insufficient Arguments!",
  description: "Please mention the user that you want to addmod!",
  timestamp: false,
  footer: {
  icon_url: client.user.avatarURL,
  text: "© Water Bot"
  }
  }
  });
  }
  else
  message.channel.send({embed : {
    color: 0xFF0000,
  title: "Insufficient Permissions!",
  description: "This command is only usably by access level 3!",
  timestamp: false,
  footer: {
  icon_url: client.user.avatarURL,
  text: "© Water Bot"
  }
  }
  });
}
  else if (message.content.startsWith(`${prefix}delmod`)) {
  const mentionedmember = message.mentions.members.first();
  const modlogs = message.guild.channels.find("name", "mod-logs")
  const mod = message.guild.roles.find("name", "mod access")
  if (Owners.includes(message.author.id)) {
  if (mentionedmember) {
  if (mentionedmember.roles.some(r=>["mod access"].includes(r.name)) ) {
    mentionedmember.removeRole(mod)
    .then (() => {
      message.channel.send({embed : {
        color: 0x7CFC00,
      title: "Delmod Success!",
      description: `${mentionedmember} is now no longer a bot moderator!`,
      timestamp: false,
      footer: {
      icon_url: client.user.avatarURL,
      text: "© Water Bot"
      }
      }
      });
      modlogs.send({embed : {
        color: 3447003,
    title: "Removed bot moderator!",
    fields: [{
      name: "User",
      value: `${mentionedmember}`
    },
    {
      name: "Moderator",
      value: `${message.member}`
    }],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Water Bot"
    }
    }
  })
})
  }
    else
    message.channel.send({embed : {
      color: 0xFF0000,
    title: "Delmod Failure!",
    description: "The user you are trying to delete mod is not even a moderator!",
    timestamp: false,
    footer: {
    icon_url: client.user.avatarURL,
    text: "© Water Bot"
    }
    }
    });
  }
  else
  message.channel.send({embed : {
    color: 0xFF0000,
  title: "Insufficient Arguments!",
  description: "Please mention the user that you want to delete mod!",
  timestamp: false,
  footer: {
  icon_url: client.user.avatarURL,
  text: "© Water Bot"
  }
  }
  });
  }
  else
  message.channel.send({embed : {
    color: 0xFF0000,
  title: "Insufficient Permissions!",
  description: "This command is only usable by access level 3!",
  timestamp: false,
  footer: {
  icon_url: client.user.avatarURL,
  text: "© Water Bot"
  }
  }
  });
  }
  else if (message.content === `${prefix}uptime`) {
    let totalSeconds = (client.uptime / 1000);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  let uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;
  if (Bot.includes(message.author.id)) {
  message.channel.send({embed : {
        color: 0x7CFC00,
      title: "Uptime Found!",
      description: `The bot has been online and running for ${uptime}`,
      timestamp: false,
      footer: {
      icon_url: client.user.avatarURL,
      text: "© Water Bot"
      }
      }
      });
}
    else
    message.channel.send({embed : {
    color: 0xFF0000,
  title: "Insufficient Permissions!",
  description: "This command is only usable by access level 3!",
  timestamp: false,
  footer: {
  icon_url: client.user.avatarURL,
  text: "© Water Bot"
  }
  }
  });
}
else if (message.content === `${prefix}shutdown`) {
    if(Bot.includes(message.author.id)) {
      message.channel.send({embed : {
        color: 3447003,
    title: "Bye Bye Water YT Discord",
    description: "Bot Shutting Down..",
    timestamp: false,
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Water Bot"
    }
    }
  })
     .then(msg => client.destroy())
    }
    else message.channel.send({embed : {
      color: 0xFF0000,
  title: "Insufficient Permissions!",
  description: "This command is only usable by Access Level 3",
  timestamp: false,
  footer: {
    icon_url: client.user.avatarURL,
    text: "© Water Bot"
  }
  }
});
}
});

client.login(process.env.BOT_TOKEN);
