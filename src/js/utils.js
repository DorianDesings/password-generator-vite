const generateRandomNumber = max => {
	const randomNumber = Math.floor(Math.random() * max);
	return randomNumber;
};

export { generateRandomNumber };
