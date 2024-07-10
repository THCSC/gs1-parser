export type TokenType = "LPAREN" | "RPAREN" | "ID" 

export type Token = {
	type: TokenType,
	value: string,
} | {
	type: "EOF"
}

export class Tokenizer {
	private input: string;
	private index: number;

	constructor(input: string) {
		this.input = input;
		this.index = 0;
	}

	nextToken(): Token {
		this.skipWhitespace();
		if (this.index < this.input.length) {
			const currentChar = this.currentChar();
			switch (currentChar) {
				case "(": {
					this.index += 1;
					return {
						type: "LPAREN",
						value: currentChar,
					};
				};

				case ")": {
					this.index += 1;
					return {
						type: "RPAREN",
						value: currentChar,
					};
				};

				default: {
					return this.readId();
				}
			}

		} else {
			return {
				type: "EOF",
			}
		}
	}

	private currentChar(): string {
		return this.input.charAt(this.index)
	}

	private readId(): Token {
		const startIndex = this.index
		while (this.index < this.input.length && this.currentChar() != ")" && this.currentChar() != "(") {
			this.index += 1;
		}
		const value = this.input.substring(startIndex, this.index);
		return {
			type: "ID",
			value: value,
		}
	}

	private skipWhitespace() {
		while ([" ", "\n", "\t"].some(str => str == this.currentChar())) {
			this.index += 1;
		}
	}
}
