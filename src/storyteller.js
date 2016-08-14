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