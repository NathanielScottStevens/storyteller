let VertexType = {
    INCITING: "INCITING",
    OBSTACLE: "OBSTACLE",
    RESOLUTION: "RESOLUTION"
}

class Protaganist {
    constructor(storyObject) {
        this.storyObject = storyObject;
        this.node = null;
    }

    addStoryObject(o) {
        this.storyObject.push(o);
    }

    logStory(o) {
        this.storyObject.log(o);
    }

    setStart(node) {
        this.node = node;
    }

    walk() {
        while (this.node) {
            this.logStory(this.node);
            this.node = this.node.getNext();
        }
    }
}

class StoryObject {
    constructor(inciting, obstacle, resolution){
        this.inciting = inciting;
        this.obstacle = obstacle;
        this.resolution = resolution;
    }

    log(vertex) {
        switch (vertex.type) {
            case VertexType.INCITING:
                console.log(this.inciting);
                break;

            case VertexType.OBSTACLE:
                console.log(this.obstacle);
                break;

            case VertexType.RESOLUTION:
                console.log(this.resolution);
                break;

            default:
            //lol nope
        }
    }
}

class Graph {
    constructor(start, vertices){
        this.start = start;
        this.vertices = vertices;
    }
}

class Vertex {
    constructor(type, data) {
        this.type = type;
        this.data = data;
        this.neighbors = [];
    }

    addNeighbor(vertex) {
        this.neighbors.push(vertex);
    }

    getNext() {
        return this.neighbors[0];
    }
}

class Story {

    constructor() {
        this.protagonist = new Protaganist(new StoryObject("OH", "AWW MAN", "WOO"));
        this.graph = new Graph(this.simpleStory());

        this.protagonist.setStart(this.graph.start);
        this.protagonist.walk()
    }

    simpleStory() {
        let v1 = new Vertex(VertexType.INCITING, "foo");
        let v2 = new Vertex(VertexType.OBSTACLE, "bar");
        let v3 = new Vertex(VertexType.RESOLUTION, "baz");

        v1.addNeighbor(v2);
        v2.addNeighbor(v3);

        return v1;
    }
}

let story = new Story();


