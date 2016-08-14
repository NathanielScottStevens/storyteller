class Die {
    constructor(agent, cause){
        this._agent = agent;
        this._cause = cause;
    }

    toString() {
        return `${this._agent} was killed by ${this._cause}`;
    }
}

class Go {
    constructor(agent, from, to){
        this._agent = agent;
        this._from = from;
        this._to = to;
    }

    toString() {
        return `${this._agent} went from ${this._from} to ${this._to}`;
    }
}

class Find {
    constructor(agent, item) {
        this._agent = agent;
        this._item = item;
    }

    toString() {
        return `${this._agent} found a ${this._item}`;
    }
}

class Lose {
    constructor(agent, item) {
        this._agent = agent;
        this._item = item;
    }

    toString() {
        return `${this._agent} lost a ${this._item}`;
    }
}

class Buy {
    constructor(agent, item) {
        this._agent = agent;
        this._item = item;
    }

    toString() {
        return `${this._agent} bought a ${this._item}`;
    }
}

class Sell {
    constructor(agent, item) {
        this._agent = agent;
        this._item = item;
    }

    toString() {
        return `${this._agent} sold a ${this._item}`;
    }
}

class Steal {
    constructor(agent, item, source) {
        this._agent = agent;
        this._item = item;
        this._source = source;
    }

    toString() {
        return `${this._agent} stole a ${this._item} from ${this._source}`;
    }
}

class Meet {
    constructor(agent, other) {
        this._agent = agent;
        this._other = other;
    }

    toString() {
        return `${this._agent} met ${this._other}`;
    }
}

function inciting(){
    return "An inciting incidence occurs.";
}

function obstacle(){
    return "An obstacle presents itself.";
}

function success(){
    return "The obstacle is overcome.";
}

function failure(){
    return "The obstacle is not overcome.";
}

function resolution(){
    return "The inciting event is resolved.";
}

function generate(){
    console.log(inciting());
    console.log(obstacle());
    console.log(success());
    console.log(failure());
    console.log(resolution());
}

generate();