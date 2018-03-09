import discord
from discord.ext.commands import Bot
from discord.ext import commands
import asyncio
import time


Client = discord.Client() #Initialise Client 
client = commands.Bot(command_prefix = "mig!") #Initialise client bot


@client.event 
async def on_ready():
    print("Bot is ready to be worked with in Discord!") #This will be called when the bot connects to the server

@client.event
async def on_message(message):
    if message.content == "mig!hosters":
        await client.send_message(message.channel, "Loltrolol55, Derpy and Farid") #responds with Cookie emoji when someone says "cookie"

client.run("NDIxNjIxOTg2MTI1NTQ1NDcy.DYP6Eg.GT8pNnoy9Z6wAUeSeQ5tYFW_ZR8") #Replace token with your bots token
