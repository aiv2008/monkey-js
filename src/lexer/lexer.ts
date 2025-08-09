import { keywords, Token, TokenConst ,TokenType,LookupIdent} from '../token/token';

export class Lexer {
    private input: string;
    private position: number;
    private readPosition: number;
    private ch: string;

    constructor(input: string) {
        this.input = input;
        this.position = 0;
        this.readPosition = 0;
        this.ch = '';
        this.readChar();
    }

    private readChar(): void {
        if (this.readPosition >= this.input.length) {
            this.ch = '\0';
        } else {
            this.ch = this.input[this.readPosition];
        }
        this.position = this.readPosition;
        this.readPosition += 1;
    }

    private skipWhitespace(): void {
        while (this.ch === ' ' || this.ch === '\t' || this.ch === '\n' || this.ch === '\r') {
            this.readChar();
        }
    }

    nextToken(): Token {
        let token: Token;

        this.skipWhitespace();
        console.log(`this.ch=[${this.ch}]`);
        switch (this.ch) {
            case '=':
                token = this.newToken(TokenConst.ASSIGN, this.ch);
                break;
            case '+':
                token = this.newToken(TokenConst.PLUS, this.ch);
                break;
            case '-':
                token = this.newToken(TokenConst.MINUS, this.ch);
                break;
            case '(': 
                token = this.newToken(TokenConst.LPAREN, this.ch);
                break;
            case ')':
                token = this.newToken(TokenConst.RPAREN, this.ch);
                break;
            case '{':
                token = this.newToken(TokenConst.LBRACE,  this.ch );
                break;
            case '}':
                token = this.newToken(TokenConst.RBRACE,  this.ch );
                break;
            case ',':
                token = this.newToken(TokenConst.COMMA, this.ch );
                break;
            case ';':
                token = this.newToken(TokenConst.SEMICOLON, this.ch );
                break;
            case '\0':
                token = {type: TokenConst.EOF, literal: ''};
                break;
            default:
                if (isLetter(this.ch)){
                    let ident = this.readIdentifier();
                    token = this.newToken(LookupIdent(ident), ident);
                }else if (isDigit(this.ch)){
                    token = this.newToken(TokenConst.INT, this.readNumber());
                }else{
                    token = this.newToken(TokenConst.ILLEGAL, this.ch );
                }
        }

        this.readChar();
        return token;
    }

    newToken(tokenType: TokenType, literal: string): Token {
        return { type: tokenType, literal };
    }

    readIdentifier(): string { 
        let position = this.position;
        while(isLetter(this.ch)) {
            this.readChar();
        }
        return this.input.slice(position, this.position);
    }

    readNumber(): string {
        let position = this.position;
        while(isDigit(this.ch)) {
            this.readChar();
        }
        console.log(`ch1=${this.ch}`);
        return this.input.slice(position, this.position);
    }
}

function isLetter(ch: string): boolean {
    return 'a' <= ch && ch <= 'z' || 'A' <= ch && ch <= 'Z' || ch === '_';
}

function isDigit(ch : string): boolean{
    return '0' <= ch && ch <= '9';
}