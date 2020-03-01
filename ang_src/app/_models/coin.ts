export class Coin {
    _id: string;
    name: string; // Ticker name of the given cryptocurrency.
	symbol: string; //Ticker symbol of the given cryptocurrency (usually the same as the name).
	coinName: string; //Name of the given cryptocurrency.
	fullName: string; //Name of the given cryptocurrency concatenated with the symbol (Ex: Ethereum (ETH)).
	algorithm: string; //Name cryptographic algorithm for that coin.
	proofType: string;
}