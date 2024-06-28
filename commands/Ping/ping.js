/* eslint-disable brace-style */
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Check if the bot is responding.'),
	async execute(interaction) {
		const startTime = Date.now();
		await interaction.reply({ content: 'Pinging...', ephemeral: true });
		const endTime = Date.now();
		const latency = endTime - startTime;
		await interaction.editReply({ content: `Pong! Bot latency is ${latency}ms`, ephemeral: true });
		return;
	},
};