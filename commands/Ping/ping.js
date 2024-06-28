/* eslint-disable brace-style */
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Check if the bot is responding.'),
	async execute(interaction) {
		await interaction.reply({ content: 'Pong!', ephemeral: true });
		return;
	},
};