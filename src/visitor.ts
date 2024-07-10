import { appIdentToNameMap, ApplicationIdentifier, ApplicationIdentifierName } from "./gs1.js";
import { GS1 } from "./index.js";
import { AST } from "./parser.js";

export interface Visitor {
	visit: (ast: AST) => void
}

export class GS1Visitor implements Visitor {
	private gs1: GS1;

	constructor() {
		this.gs1 = {};
	}

	visit(ast: AST): GS1 {
		this.gs1 = {};
		switch (ast.type) {
			case "GS1": {
				ast.children.forEach(child => this.visitPair(child))
			} break;
			default: {
				throw new Error("Malformed ast");
			}
		}
		return this.gs1;
	}

	private visitPair(ast: AST) {
		if (ast.isLeaf || ast.type != "PAIR") {
			throw new Error("Malformed ast");
		}

		const appIdent = this.visitAI(ast.children[0]);
		const value = this.visitID(ast.children[1]);

		this.gs1[appIdent] = value;
	}

	private visitAI(ast: AST): ApplicationIdentifierName {
		if (!ast.isLeaf || ast.type != "AI") throw new Error("Invalid Application Identifier AST");
		if (!checkAppIdent(ast.value)) {
			throw new Error(`Application identifier "${ast.value}" is invalid.`);
		}

		return appIdentToNameMap[ast.value];
	}

	private visitID(ast: AST): string {
		if (!ast.isLeaf || ast.type != "ID") throw new Error("Invalid Identifier AST");

		return ast.value;
	}
}

function checkAppIdent(val: string): val is ApplicationIdentifier {
	return val in appIdentToNameMap
}
