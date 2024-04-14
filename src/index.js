
import antlr4 from "../antlr4/dist/antlr4.web.mjs"
import VisualiserListener from "./VisualiserListener.js";
import VisualiserLexer from "./VisualiserLexer.js";
import VisualiserParser from "./VisualiserParser.js";

class CustomVisualiserListener extends VisualiserListener {
    constructor() {
        super();
        this.executionContext = {};
        this.states = [];
        this.statesLenght =[];
        this.statesIndex =0;
        this.treeSnapshots = [];
        this.treeStates = [];
        this.currentSnapshot = [];
        this.treeStateIndex = 0;
        this.currentIndex = 0;
    }

    enterEveryRule(ctx) {
        // You can add more logic here to process the node
    }

    enterProg(ctx) {
        // Custom logic for entering a program
    }

    exitProg(ctx) {
        // Custom logic for exiting a program
    }

    enterStatement(ctx){
        if(ctx.parentCtx.exception === 0){
            ctx.exception=0;
            return;
        }

    }

    exitStatement(ctx) {
        if(ctx.parentCtx.exception === 0){
            ctx.exception=0;
            return;
        };

    }

    enterAssignment(ctx) {
        if(ctx.parentCtx.exception === 0){
            ctx.exception=0;
            return;
        }
        let variableName = ctx.INTID().getText();
        let expression = ctx.exprbool().getText();
        let value;

        if((ctx.exprbool().children.at(0).invokingState) === 56){
            value = parseInt(expression, 10);
        }
        else if((ctx.exprbool().children.at(0).invokingState) === 57){
            value = this.executionContext[expression];
        }
        else if((ctx.exprbool().children.at(0).invokingState) === 58){
            value=this.evaluateExpression(ctx.exprbool());
        }

        this.executionContext[variableName] = value;


        this.recordState();
        this.statesLenght.push(this.statesIndex)

        this.addSnapshotFromNode(ctx);
        this.finalizeSnapshot()

        this.statesIndex++
        this.treeStateIndex++

    }

    exitAssignment(ctx) {
        if(ctx.parentCtx.exception === 0){
            ctx.exception=0;
            return;
        }
    }

    enterCondition(ctx) {
        if(ctx.parentCtx.exception === 0){
            ctx.exception=0;
            return;
        }
        this.recordState();
        this.statesLenght.push(this.statesIndex)

        this.addSnapshotFromNode(ctx);
        this.finalizeSnapshot()

        const leftExprValue = this.evaluateExpression(ctx.children.at(1).children.at(1));
        const rightExprValue = this.evaluateExpression(ctx.children.at(1).children.at(3));

        const comparator = ctx.children.at(1).children.at(2).getText();

        let conditionResult = false;
        switch (comparator) {
            case '<':
                conditionResult = leftExprValue < rightExprValue;
                break;
            case '<=':
                conditionResult = leftExprValue <= rightExprValue;
                break;
            case '>':
                conditionResult = leftExprValue > rightExprValue;
                break;
            case '>=':
                conditionResult = leftExprValue >= rightExprValue;
                break;
            case '==':
                conditionResult = leftExprValue === rightExprValue;
                break;
            case '!=':
                conditionResult = leftExprValue !== rightExprValue;
                break;
            default:
                throw new Error(`Unsupported comparator: ${comparator}`);
        }

        if (conditionResult) {
            ctx.children.at(5).exception=0;
        } else {
            ctx.children.at(3).exception=0;
        }


    }

    exitCondition(ctx) {
        if(ctx.parentCtx.exception === 0){
            ctx.exception=0;
            return;
        }
        // Custom logic for exiting a condition
    }

    enterSequence(ctx) {
        if(ctx.parentCtx.exception === 0){
            ctx.exception=0;
            return;
        }
        this.recordState();
        this.statesLenght.push(this.statesIndex)

        this.addSnapshotFromNode(ctx);
        this.finalizeSnapshot()
        // Custom logic for entering a sequence
    }

    exitSequence(ctx) {
        if(ctx.parentCtx.exception === 0){
            ctx.exception=0;
            return;
        }
        // Custom logic for exiting a sequence
    }

    enterSkip(ctx) {
        if(ctx.parentCtx.exception === 0){
            ctx.exception=0;
            return;
        }
        this.recordState();
        this.statesLenght.push(this.statesIndex)

        this.addSnapshotFromNode(ctx);
        this.finalizeSnapshot();
        // Custom logic for entering a skip
    }

    exitSkip(ctx) {
        if(ctx.parentCtx.exception === 0){
            ctx.exception=0;
            return;
        }
    }

    enterExpr(ctx) {
        if(ctx.parentCtx.exception === 0){
            ctx.exception=0;
            return;
        }
    }

    exitExpr(ctx) {
        if(ctx.parentCtx.exception === 0){
            ctx.exception=0;
            return;
        }
    }

    enterExprbool(ctx) {
        if(ctx.parentCtx.exception === 0){
            ctx.exception=0;
            return;
        }
    }

    exitExprbool(ctx) {
        if(ctx.parentCtx.exception === 0){
            ctx.exception=0;
            return;
        }
    }

    enterOperators(ctx) {
        if(ctx.parentCtx.exception === 0){
            ctx.exception=0;
            return;
        }
    }

    exitOperators(ctx) {
        if(ctx.parentCtx.exception === 0){
            ctx.exception=0;
            return;
        }
    }

    enterComparators(ctx) {
        if(ctx.parentCtx.exception === 0){
            ctx.exception=0;
            return;
        }
        this.recordState();
        this.statesLenght.push(this.statesIndex)

        this.addSnapshotFromNode(ctx);
        this.finalizeSnapshot();
    }

    exitComparators(ctx) {
        if(ctx.parentCtx.exception === 0){
            ctx.exception=0;
            return;
        }
    }

    evaluateExpression(exprNode) {
        if (!exprNode) {
            return 0;
        }

        if (exprNode instanceof antlr4.tree.TerminalNode) {
            const text = exprNode.getText();
            if (!isNaN(parseInt(text, 10))) {
                return parseInt(text, 10);
            }
        }

        if (exprNode.symbol && exprNode.symbol.type === VisualiserParser.INTID) {
            const variableName = exprNode.getText();
            const value = this.executionContext[variableName];
            if (value !== undefined) {
                return value;
            } else {
                document.getElementById('output').style.color = 'red';
                document.getElementById('output').innerHTML+=`<div>Undefined variable name: '${variableName}'</div>`;
                throw new Error(`Undefined variable name: '${variableName}'`);
            }
        }

        if (exprNode.constructor.name === "OperatorsContext") {
            const left = this.evaluateExpression(exprNode.children.at(1));
            const right = this.evaluateExpression(exprNode.children.at(3));
            const operator = exprNode.children.at(2).getText();

            switch (operator) {
                case '+':
                    return left + right;
                case '-':
                    return left - right;
                case '*':
                    return left * right;
                case '/':
                    return Math.floor(left/right);
                default:
                    throw new Error(`Unsupported operator '${operator}'`);
            }
        }

        if (exprNode.constructor.name === "ExprboolContext") {
            return this.evaluateExpression(exprNode.children.at(0));
        }

        throw new Error("Unhandled expression type");
    }

    applyState(stateIndex)  {
        if (stateIndex >= 0 && stateIndex < this.states.length) {
            this.executionContext = {...this.states[stateIndex]};
            this.currentStateIndex = stateIndex;
            this.updateVariableOutput()
        }

    }

    navigate(direction) {
        if (direction === 'next' && this.currentIndex < this.treeSnapshots.length - 1) {
            this.currentIndex++;
            this.updateOutput()
        } else if (direction === 'prev' && this.currentIndex > 0) {
            const treeOutputElement = document.getElementById('output');
            if (treeOutputElement.lastElementChild) {
                treeOutputElement.removeChild(treeOutputElement.lastElementChild);
            }
            this.currentIndex--;
        }
    }

    recordState() {
        this.states.push({...this.executionContext});
    }

    updateVariableOutput() {
        const variableOutputElement = document.getElementById('variableOutput');

        variableOutputElement.innerHTML = `<h3>Current Variables and their Values:</h3>`
        let content = Object.keys(this.executionContext).map(key => `${key} ↦ ${this.executionContext[key]}, `).join(' ');
        content = content.slice(0, -2);
        variableOutputElement.innerHTML += `<div>s${this.statesLenght[this.currentStateIndex]} = [${content}]</div>`
    }

    updateOutput() {
        const treeOutputElement = document.getElementById('output');

        if (this.treeSnapshots.length > 0 && this.currentIndex >= 0 && this.currentIndex < this.treeSnapshots.length) {
            let snapshotContent = `<div>${this.treeSnapshots[this.currentIndex]}s${this.statesLenght[this.currentStateIndex]} =</div>`;
            treeOutputElement.innerHTML += snapshotContent;  // Append new snapshot content
        }
    }

    generateSourceCodeFromNode(ctx) {
        if (!ctx) return "";

        let sourceCode = "";

        if (ctx.constructor.name === "SequenceContext") {
            const statement1 = this.generateSourceCodeFromNode(ctx.children[1]);
            const statement2 = this.generateSourceCodeFromNode(ctx.children[3]);
            return `(Sds⟦${statement2}⟧ ᴑ Sds⟦${statement1}⟧)`;
        }

        if (ctx.constructor.name === "ConditionContext") {
            const condition = this.generateSourceCodeFromNode(ctx.children[1]);
            const thenStatement = this.generateSourceCodeFromNode(ctx.children[3]);
            const elseStatement = this.generateSourceCodeFromNode(ctx.children[5]);
            return `cond(ß⟦${condition}⟧, Sds⟦${thenStatement}⟧, Sds⟦${elseStatement}⟧)`;
        }

        if (ctx.constructor.name === "AssignmentContext") {
            const variable = this.generateSourceCodeFromNode(ctx.children[0]);
            const value = this.generateSourceCodeFromNode(ctx.children[2]);
            return `⟦${variable} ↦ ${value}⟧`;
        }

        if (ctx.symbol !== undefined) {
            return ctx.getText();
        }

        if (ctx.children) {
            ctx.children.forEach((child, index) => {
                let childCode = this.generateSourceCodeFromNode(child);
                if (index < ctx.children.length - 1 && ![';', ','].includes(childCode.trim())) {
                    sourceCode += childCode + " ";
                } else {
                    sourceCode += childCode;
                }
            });
        }
        return sourceCode.trim();

    }

    addSnapshotFromNode(ctx) {
        if (ctx) {
            this.currentSnapshot.push(this.generateSourceCodeFromNode(ctx));
            this.treeStates.push(this.treeStateIndex);
        }
    }

    finalizeSnapshot() {
        if (this.currentSnapshot.length > 0) {
            this.treeSnapshots.push([...this.currentSnapshot]);
            this.currentSnapshot = [];
        }
    }
}

class CustomErrorListener extends antlr4.error.ErrorListener {
    constructor() {
        super();
        this.errorFound=0;
    }
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        const outputElement = document.getElementById('output');
        outputElement.innerHTML = `Error at line ${line}:${column} - ${msg}`;
        outputElement.style.color = 'red';
        this.errorFound=1;
    }
}

window.onload = function (){
    const outputElement = document.getElementById('output');
    let parseButton = document.getElementById("parseBtn");
    let nextButton = document.getElementById("nextBtn");
    let previousButton = document.getElementById("prevBtn");
    let listener = new CustomVisualiserListener();

    parseButton.addEventListener('click', () => {
        listener.executionContext = {};
        listener.states = [];
        listener.treeSnapshots = [];
        listener.treeStates = [];
        listener.currentSnapshot = [];
        listener.treeStateIndex = 0;
        listener.currentIndex = 0;
        listener.currentStateIndex =0;

        outputElement.style.color = 'black';
        let input = document.getElementById('inputText').value;

        let chars = new antlr4.InputStream(input);
        let lexer = new VisualiserLexer(chars);
        let tokens = new antlr4.CommonTokenStream(lexer);
        let parser = new VisualiserParser(tokens);

        document.getElementById('output').innerHTML = '';
        let error = new CustomErrorListener();
        parser.removeErrorListeners();
        parser.addErrorListener(error);


        let tree = parser.prog();

        if(error.errorFound==0) {
            antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);


            listener.applyState(listener.currentStateIndex);
            listener.updateOutput()
        }
    });

    nextButton.addEventListener('click', function() {
        listener.applyState(listener.currentStateIndex + 1);
        listener.navigate('next')
    });

    previousButton.addEventListener('click', function() {
        listener.applyState(listener.currentStateIndex - 1);
        listener.navigate('prev')
    });

}






