// Generated from Visualiser.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from '../antlr4/dist/antlr4.web.mjs';
import VisualiserListener from './VisualiserListener.js';
import PredictionContextCache from '../antlr4/src/antlr4/atn/PredictionContextCache.js'

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u001aP\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    "\u001d\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0005\b9\n\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0005\tB\n\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0002\u0002\f\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0002\u0004\u0003\u0002\f\u000f\u0003\u0002\u0010\u0015",
    "\u0002O\u0002\u0016\u0003\u0002\u0002\u0002\u0004\u001c\u0003\u0002",
    "\u0002\u0002\u0006\u001e\u0003\u0002\u0002\u0002\b\"\u0003\u0002\u0002",
    "\u0002\n)\u0003\u0002\u0002\u0002\f.\u0003\u0002\u0002\u0002\u000e8",
    "\u0003\u0002\u0002\u0002\u0010A\u0003\u0002\u0002\u0002\u0012C\u0003",
    "\u0002\u0002\u0002\u0014I\u0003\u0002\u0002\u0002\u0016\u0017\u0005",
    "\u0004\u0003\u0002\u0017\u0003\u0003\u0002\u0002\u0002\u0018\u001d\u0005",
    "\u0006\u0004\u0002\u0019\u001d\u0005\b\u0005\u0002\u001a\u001d\u0005",
    "\n\u0006\u0002\u001b\u001d\u0005\f\u0007\u0002\u001c\u0018\u0003\u0002",
    "\u0002\u0002\u001c\u0019\u0003\u0002\u0002\u0002\u001c\u001a\u0003\u0002",
    "\u0002\u0002\u001c\u001b\u0003\u0002\u0002\u0002\u001d\u0005\u0003\u0002",
    "\u0002\u0002\u001e\u001f\u0007\u0016\u0002\u0002\u001f \u0007\u0003",
    "\u0002\u0002 !\u0005\u0010\t\u0002!\u0007\u0003\u0002\u0002\u0002\"",
    "#\u0007\u0004\u0002\u0002#$\u0005\u0014\u000b\u0002$%\u0007\u0005\u0002",
    "\u0002%&\u0005\u0004\u0003\u0002&\'\u0007\u0006\u0002\u0002\'(\u0005",
    "\u0004\u0003\u0002(\t\u0003\u0002\u0002\u0002)*\u0007\u0007\u0002\u0002",
    "*+\u0005\u0004\u0003\u0002+,\u0007\b\u0002\u0002,-\u0005\u0004\u0003",
    "\u0002-\u000b\u0003\u0002\u0002\u0002./\u0007\t\u0002\u0002/\r\u0003",
    "\u0002\u0002\u000209\u0007\u0019\u0002\u000219\u0007\u0016\u0002\u0002",
    "29\u0005\u0012\n\u000239\u0005\u0014\u000b\u000245\u0007\n\u0002\u0002",
    "56\u0005\u000e\b\u000267\u0007\u000b\u0002\u000279\u0003\u0002\u0002",
    "\u000280\u0003\u0002\u0002\u000281\u0003\u0002\u0002\u000282\u0003\u0002",
    "\u0002\u000283\u0003\u0002\u0002\u000284\u0003\u0002\u0002\u00029\u000f",
    "\u0003\u0002\u0002\u0002:B\u0007\u0019\u0002\u0002;B\u0007\u0016\u0002",
    "\u0002<B\u0005\u0012\n\u0002=>\u0007\n\u0002\u0002>?\u0005\u0010\t\u0002",
    "?@\u0007\u000b\u0002\u0002@B\u0003\u0002\u0002\u0002A:\u0003\u0002\u0002",
    "\u0002A;\u0003\u0002\u0002\u0002A<\u0003\u0002\u0002\u0002A=\u0003\u0002",
    "\u0002\u0002B\u0011\u0003\u0002\u0002\u0002CD\u0007\n\u0002\u0002DE",
    "\u0005\u0010\t\u0002EF\t\u0002\u0002\u0002FG\u0005\u0010\t\u0002GH\u0007",
    "\u000b\u0002\u0002H\u0013\u0003\u0002\u0002\u0002IJ\u0007\n\u0002\u0002",
    "JK\u0005\u0010\t\u0002KL\t\u0003\u0002\u0002LM\u0005\u0010\t\u0002M",
    "N\u0007\u000b\u0002\u0002N\u0015\u0003\u0002\u0002\u0002\u0005\u001c",
    "8A"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new PredictionContextCache();

export default class VisualiserParser extends antlr4.Parser {

    static grammarFileName = "Visualiser.g4";
    static literalNames = [ null, "':='", "'if'", "'then'", "'else'", "'seq'", 
                            "';'", "'skip'", "'('", "')'", "'+'", "'-'", 
                            "'*'", "'/'", "'<'", "'<='", "'>'", "'>='", 
                            "'=='", "'!='" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, "INTID", "BOOLID", 
                             "BOOL", "INT", "WS" ];
    static ruleNames = [ "prog", "statement", "assignment", "condition", 
                         "sequence", "skip", "expr", "exprbool", "operators", 
                         "comparators" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = VisualiserParser.ruleNames;
        this.literalNames = VisualiserParser.literalNames;
        this.symbolicNames = VisualiserParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, VisualiserParser.RULE_prog);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.statement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, VisualiserParser.RULE_statement);
	    try {
	        this.state = 26;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case VisualiserParser.INTID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 22;
	            this.assignment();
	            break;
	        case VisualiserParser.T__1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 23;
	            this.condition();
	            break;
	        case VisualiserParser.T__4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 24;
	            this.sequence();
	            break;
	        case VisualiserParser.T__6:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 25;
	            this.skip();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, VisualiserParser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.match(VisualiserParser.INTID);
	        this.state = 29;
	        this.match(VisualiserParser.T__0);
	        this.state = 30;
	        this.exprbool();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, VisualiserParser.RULE_condition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.match(VisualiserParser.T__1);
	        this.state = 33;
	        this.comparators();
	        this.state = 34;
	        this.match(VisualiserParser.T__2);
	        this.state = 35;
	        this.statement();
	        this.state = 36;
	        this.match(VisualiserParser.T__3);
	        this.state = 37;
	        this.statement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sequence() {
	    let localctx = new SequenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, VisualiserParser.RULE_sequence);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.match(VisualiserParser.T__4);
	        this.state = 40;
	        this.statement();
	        this.state = 41;
	        this.match(VisualiserParser.T__5);
	        this.state = 42;
	        this.statement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	skip() {
	    let localctx = new SkipContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, VisualiserParser.RULE_skip);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(VisualiserParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, VisualiserParser.RULE_expr);
	    try {
	        this.state = 54;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 46;
	            this.match(VisualiserParser.INT);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 47;
	            this.match(VisualiserParser.INTID);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 48;
	            this.operators();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 49;
	            this.comparators();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 50;
	            this.match(VisualiserParser.T__7);
	            this.state = 51;
	            this.expr();
	            this.state = 52;
	            this.match(VisualiserParser.T__8);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exprbool() {
	    let localctx = new ExprboolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, VisualiserParser.RULE_exprbool);
	    try {
	        this.state = 63;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 56;
	            this.match(VisualiserParser.INT);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 57;
	            this.match(VisualiserParser.INTID);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 58;
	            this.operators();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 59;
	            this.match(VisualiserParser.T__7);
	            this.state = 60;
	            this.exprbool();
	            this.state = 61;
	            this.match(VisualiserParser.T__8);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operators() {
	    let localctx = new OperatorsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, VisualiserParser.RULE_operators);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(VisualiserParser.T__7);
	        this.state = 66;
	        this.exprbool();
	        this.state = 67;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VisualiserParser.T__9) | (1 << VisualiserParser.T__10) | (1 << VisualiserParser.T__11) | (1 << VisualiserParser.T__12))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 68;
	        this.exprbool();
	        this.state = 69;
	        this.match(VisualiserParser.T__8);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comparators() {
	    let localctx = new ComparatorsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, VisualiserParser.RULE_comparators);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(VisualiserParser.T__7);
	        this.state = 72;
	        this.exprbool();
	        this.state = 73;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VisualiserParser.T__13) | (1 << VisualiserParser.T__14) | (1 << VisualiserParser.T__15) | (1 << VisualiserParser.T__16) | (1 << VisualiserParser.T__17) | (1 << VisualiserParser.T__18))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 74;
	        this.exprbool();
	        this.state = 75;
	        this.match(VisualiserParser.T__8);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

VisualiserParser.EOF = antlr4.Token.EOF;
VisualiserParser.T__0 = 1;
VisualiserParser.T__1 = 2;
VisualiserParser.T__2 = 3;
VisualiserParser.T__3 = 4;
VisualiserParser.T__4 = 5;
VisualiserParser.T__5 = 6;
VisualiserParser.T__6 = 7;
VisualiserParser.T__7 = 8;
VisualiserParser.T__8 = 9;
VisualiserParser.T__9 = 10;
VisualiserParser.T__10 = 11;
VisualiserParser.T__11 = 12;
VisualiserParser.T__12 = 13;
VisualiserParser.T__13 = 14;
VisualiserParser.T__14 = 15;
VisualiserParser.T__15 = 16;
VisualiserParser.T__16 = 17;
VisualiserParser.T__17 = 18;
VisualiserParser.T__18 = 19;
VisualiserParser.INTID = 20;
VisualiserParser.BOOLID = 21;
VisualiserParser.BOOL = 22;
VisualiserParser.INT = 23;
VisualiserParser.WS = 24;

VisualiserParser.RULE_prog = 0;
VisualiserParser.RULE_statement = 1;
VisualiserParser.RULE_assignment = 2;
VisualiserParser.RULE_condition = 3;
VisualiserParser.RULE_sequence = 4;
VisualiserParser.RULE_skip = 5;
VisualiserParser.RULE_expr = 6;
VisualiserParser.RULE_exprbool = 7;
VisualiserParser.RULE_operators = 8;
VisualiserParser.RULE_comparators = 9;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VisualiserParser.RULE_prog;
    }

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VisualiserListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VisualiserListener ) {
	        listener.exitProg(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VisualiserParser.RULE_statement;
    }

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	sequence() {
	    return this.getTypedRuleContext(SequenceContext,0);
	};

	skip() {
	    return this.getTypedRuleContext(SkipContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VisualiserListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VisualiserListener ) {
	        listener.exitStatement(this);
		}
	}


}



class AssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VisualiserParser.RULE_assignment;
    }

	INTID() {
	    return this.getToken(VisualiserParser.INTID, 0);
	};

	exprbool() {
	    return this.getTypedRuleContext(ExprboolContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VisualiserListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VisualiserListener ) {
	        listener.exitAssignment(this);
		}
	}


}



class ConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VisualiserParser.RULE_condition;
    }

	comparators() {
	    return this.getTypedRuleContext(ComparatorsContext,0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof VisualiserListener ) {
	        listener.enterCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VisualiserListener ) {
	        listener.exitCondition(this);
		}
	}


}



class SequenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VisualiserParser.RULE_sequence;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof VisualiserListener ) {
	        listener.enterSequence(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VisualiserListener ) {
	        listener.exitSequence(this);
		}
	}


}



class SkipContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VisualiserParser.RULE_skip;
    }


	enterRule(listener) {
	    if(listener instanceof VisualiserListener ) {
	        listener.enterSkip(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VisualiserListener ) {
	        listener.exitSkip(this);
		}
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VisualiserParser.RULE_expr;
    }

	INT() {
	    return this.getToken(VisualiserParser.INT, 0);
	};

	INTID() {
	    return this.getToken(VisualiserParser.INTID, 0);
	};

	operators() {
	    return this.getTypedRuleContext(OperatorsContext,0);
	};

	comparators() {
	    return this.getTypedRuleContext(ComparatorsContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VisualiserListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VisualiserListener ) {
	        listener.exitExpr(this);
		}
	}


}



class ExprboolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VisualiserParser.RULE_exprbool;
    }

	INT() {
	    return this.getToken(VisualiserParser.INT, 0);
	};

	INTID() {
	    return this.getToken(VisualiserParser.INTID, 0);
	};

	operators() {
	    return this.getTypedRuleContext(OperatorsContext,0);
	};

	exprbool() {
	    return this.getTypedRuleContext(ExprboolContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VisualiserListener ) {
	        listener.enterExprbool(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VisualiserListener ) {
	        listener.exitExprbool(this);
		}
	}


}



class OperatorsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VisualiserParser.RULE_operators;
    }

	exprbool = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprboolContext);
	    } else {
	        return this.getTypedRuleContext(ExprboolContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof VisualiserListener ) {
	        listener.enterOperators(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VisualiserListener ) {
	        listener.exitOperators(this);
		}
	}


}



class ComparatorsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VisualiserParser.RULE_comparators;
    }

	exprbool = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprboolContext);
	    } else {
	        return this.getTypedRuleContext(ExprboolContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof VisualiserListener ) {
	        listener.enterComparators(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VisualiserListener ) {
	        listener.exitComparators(this);
		}
	}


}




VisualiserParser.ProgContext = ProgContext; 
VisualiserParser.StatementContext = StatementContext; 
VisualiserParser.AssignmentContext = AssignmentContext; 
VisualiserParser.ConditionContext = ConditionContext; 
VisualiserParser.SequenceContext = SequenceContext; 
VisualiserParser.SkipContext = SkipContext; 
VisualiserParser.ExprContext = ExprContext; 
VisualiserParser.ExprboolContext = ExprboolContext; 
VisualiserParser.OperatorsContext = OperatorsContext; 
VisualiserParser.ComparatorsContext = ComparatorsContext; 
