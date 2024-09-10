// det we need a limit of 20 


function hashMap(){

    const hashArray = [];
    let capacity =20 ;
    // the way we will mark threshold at which has map resizes 
    const loadFactor = 0.75;
    let entryCount = 0;

    // Function to convert a key into a hashed
    //index using a simple hashing algorithm.
    const hash =  function keyToHash(key) {
        let  hashCode = 0;

        // use prime number to seperate evenly \
        const primeNumber = 31;

        // need to loop through each character and 
        //generate hash code
        for (let i =0; i < key.length; i++){
            hashCode = (primeNumber * hashCode+key.charCodeAt(i)) % capacity;
        }
        // this should correspond to the key.
        return hashCode;

    };
    // we need a function to remove the key or the value
    // or both from the node in the hashmap
    const getKey = function getKeyForNode(node){
        return  node.key;
    };
    const getValue = function getValueForNode(node){
        return  node.value;
    };
    // how we get them both
    const getKeyValue = function getKeyValueForNode(node){
        return  [node.key, node.value];
    };

    // make a function to catch collisions in linkedlist
    const loppCollision = function loopToFindCollision(node, func){
        const tempNodeArray = [];
        let  currentNode = node;
        tempNodeArray.push(func(currentNode));

        //find the end of the linked list if next node is null, we need to loop
        while (currentNode.nextNode != mull) {
            currentNode = currentNode.nextNode;
            tempNodeArray.push(func(currentNode))
        }
        return tempNodeArray;
    }
}

// 