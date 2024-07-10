import { ApplicationIdentifierName } from "./gs1.js";
import { parseGS1AST, Parser } from "./parser.js";
import { Tokenizer } from "./tokenizer.js";
import { GS1Visitor } from "./visitor.js";

export type GS1 = {
	[Property in ApplicationIdentifierName]?: string;
}

export function parseGS1(input: string): GS1 {
	const tokenizer = new Tokenizer(input);

	const gs1Ast = parseGS1AST(new Parser(tokenizer));

	const gs1 = new GS1Visitor().visit(gs1Ast);

	return gs1;
}
