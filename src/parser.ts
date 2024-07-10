import { Token, Tokenizer, TokenType } from "./tokenizer.js"

export class Parser {
	private tokenizer: Tokenizer;
	private tokens: Token[];

	constructor(tokenizer: Tokenizer) {
		this.tokenizer = tokenizer;
		this.tokens = [tokenizer.nextToken()];
	}

	consume(expectedType: TokenType): {type: TokenType, value: string} {
		const current = this.current();
		if (current.type != expectedType) {
			throw new Error(`Unexpected token type: ${this.current().type}, expected: ${expectedType}`)
		}

		this.tokens.push(this.tokenizer.nextToken());
		return current;
	}

	current(): Token {
		return this.tokens[this.tokens.length - 1]
	}
}

type ASTNodeType = "PAIR" | "AI" | "ID"

export type AST = {
	type: ASTNodeType,
	isLeaf: true,
	children?: undefined,
	value: string,
} | {
	type: ASTNodeType,
	isLeaf: false,
	children: AST[],
	value?: undefined,
} | {
	type: "GS1",
	isLeaf: false,
	children: AST[],
	value?: undefined,
}

export function parseGS1AST(parser: Parser): AST {
	const root: AST = {
		type: "GS1",
		children: [],
		isLeaf: false,
	}

	while (parser.current().type != "EOF") {
		const token = parser.current();
		switch (token.type) {
			case "LPAREN": {
				root.children.push(parsePair(parser));
			} break;
			default: {
				throw new Error(`Unexpected token: ${token}`)
			}
		}
	}

	return root;
}

function parsePair(parser: Parser): AST {
	const res: AST = {
		type: "PAIR",
		children: [],
		isLeaf: false,
	}

	res.children.push(parseAppIdent(parser));
	res.children.push(parseIdentifier(parser));

	return res;
}

function parseAppIdent(parser: Parser): AST {
	parser.consume("LPAREN");
	const token = parser.consume("ID");
	parser.consume("RPAREN");

	return {
		type: "AI",
		isLeaf: true,
		value: token.value,
	}
}

function parseIdentifier(parser: Parser): AST {
	const token = parser.consume("ID");

	return {
		type: "ID",
		isLeaf: true,
		value: token.value,
	}
}

export function astPrettyPrint(ast: AST, indentFactor: number = 2, level: number = 0) {
	console.log(`${" ".repeat(indentFactor * level)}${ast.type}: {`)
	if (ast.isLeaf) {
		console.log(`${" ".repeat(indentFactor * level+1)}value: "${ast.value}",`)
	} else {
		ast.children.forEach(child => astPrettyPrint(child, indentFactor, level + 1));
	}
	console.log(`${" ".repeat(indentFactor * level)}},`)
}
