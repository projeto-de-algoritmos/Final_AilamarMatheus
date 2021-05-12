class Node {
    constructor(props){
        this._edges = [];
        this._label = props.label;
        this._coordinates = props.coordinates;
    }
}

module.exports = Node;