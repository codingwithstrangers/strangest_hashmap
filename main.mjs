// det we need a limit of 20

function hashMap() {
  const hashArray = [];
  let capacity = 20;
  // the way we will mark threshold at which has map resizes
  const loadFactor = 0.75;
  let entryCount = 0;

  // Function to convert a key into a hashed
  //index using a simple hashing algorithm.
  const hash = function keyToHash(key) {
    let hashCode = 0;

    // use prime number to seperate evenly \
    const primeNumber = 31;

    // need to loop through each character and
    //generate hash code
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
    }
    // this should correspond to the key.
    return hashCode;
  };
  // we need a function to remove the key or the value
  // or both from the node in the hashmap
  const getKey = function getKeyForNode(node) {
    return node.key;
  };
  const getValue = function getValueForNode(node) {
    return node.value;
  };
  // how we get them both
  const getKeyValue = function getKeyValueForNode(node) {
    return [node.key, node.value];
  };

  // make a function to catch collisions in linkedlist
  const loopCollision = function loopToFindCollision(node, func) {
    const tempNodeArray = [];
    let currentNode = node;
    tempNodeArray.push(func(currentNode));

    //find the end of the linked list if next node is null, we need to loop
    while (currentNode.nextNode != mull) {
      currentNode = currentNode.nextNode;
      tempNodeArray.push(func(currentNode));
    }
    return tempNodeArray;
  };
  //function to return number of key-value
  const length = function geTheNumberOfKeys() {
    return entryCount;
  };

  //function to clear keyvalue number
  const clear = function emptyAlllKeyValues() {
    hashArray.length = 0;
    entryCount = 0;
  };

  //function to get all keys in hashmap (this is differnet than array)
  const keys = function getAllKeysFromHM() {
    const allKeys = hashArray
      .map((node) => {
        if (!node) {
          return null;
        }
        return loopCollision(node, getKey);
      })
      .flat((node) => node != null);
    return allKeys;
  };

  //do the same thing but now for values

  // Function to get all values in the hash map.
  const values = function getAllValuesFromArray() {
    const allValues = hashArray
      .map((node) => {
        if (!node) {
          return null;
        }
        return loopIndex(node, getValue); // Collect all values at each index (handles collisions).
      })
      .flat()
      .filter((node) => node != null);

    return allValues;
  };

  //make a version for keys and values together
  // Function to get all entries (key-value pairs) in the hash map.
  const entries = function getAllentryCountInArray() {
    const allEntries = hashArray
      .map((node) => {
        if (!node) {
          return null;
        }
        return loopIndex(node, getKeyValue); // Collect all entries (key, value) at each index.
      })
      .flat()
      .filter((node) => node != null);

    return allEntries;
  };

  //make function to finde key and node if matching
  const searchFor = function searchForKeyInNode(key) {
    const hashedKey = hash(key);
    //check for out of bound nodes
    if (hashedKey < 0 || hashedKey >= capacity) {
      throw new Error("You are out of bounds");
    }

    // if no node return null
    if (!hashArray[hashedKey]) return null;
  };

  let currentNode = hashArray[hashedKey];
  // search and  recover what is found if something is there?
  while (currentNode != null) {
    if (currentNode.key === key) {
      break;
    }
    currentNode = currentNode.nextNode;
  }
}

//
