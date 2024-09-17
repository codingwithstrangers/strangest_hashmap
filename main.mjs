function hashMap() {
  const hashArray = [];
  let capacity = 20; // Max capacity of 20
  const loadFactor = 0.75; // Threshold at which the map resizes
  let entryCount = 0;

  // Function to convert a key into a hashed index using a simple hashing algorithm.
  const hash = function keyToHash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    // Loop through each character and generate hash code
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
    }
    return hashCode;
  };

  // Get the key from a node
  const getKey = function getKeyForNode(node) {
    return node.key;
  };

  // Get the value from a node
  const getValue = function getValueForNode(node) {
    return node.value;
  };

  // Get both key and value from a node
  const getKeyValue = function getKeyValueForNode(node) {
    return [node.key, node.value];
  };

  // Handle collisions via linked lists
  const loopCollision = function loopToFindCollision(node, func) {
    const tempNodeArray = [];
    let currentNode = node;
    tempNodeArray.push(func(currentNode));

    // Loop until we find the end of the linked list
    while (currentNode.nextNode != null) {
      currentNode = currentNode.nextNode;
      tempNodeArray.push(func(currentNode));
    }
    return tempNodeArray;
  };

  // Function to return the number of key-value pairs
  const length = function getNumberOfKeys() {
    return entryCount;
  };

  // Function to clear all key-value pairs
  const clear = function clearAllKeyValues() {
    hashArray.length = 0;
    entryCount = 0;
  };

  // Function to get all keys in the hash map
  const keys = function getAllKeysFromHM() {
    const allKeys = hashArray
      .map((node) => {
        if (!node) {
          return null;
        }
        return loopCollision(node, getKey);
      })
      .flat()
      .filter((node) => node != null);
    return allKeys;
  };

  // Function to get all values in the hash map
  const values = function getAllValuesFromHM() {
    const allValues = hashArray
      .map((node) => {
        if (!node) {
          return null;
        }
        return loopCollision(node, getValue);
      })
      .flat()
      .filter((node) => node != null);
    return allValues;
  };

  // Function to get all entries (key-value pairs) in the hash map
  const entries = function getAllEntriesFromHM() {
    const allEntries = hashArray
      .map((node) => {
        if (!node) {
          return null;
        }
        return loopCollision(node, getKeyValue);
      })
      .flat()
      .filter((node) => node != null);
    return allEntries;
  };

  // Function to search for a key in the hash map
  const searchFor = function searchForKeyInHM(key) {
    const hashedKey = hash(key);

    // Check for out of bounds
    if (hashedKey < 0 || hashedKey >= capacity) {
      throw new Error("You are out of bounds");
    }

    // If no node exists at the hashed index, return null
    if (!hashArray[hashedKey]) {
      return null;
    }

    let currentNode = hashArray[hashedKey];

    // Loop through linked list to find the key
    while (currentNode != null) {
      if (currentNode.key === key) {
        return currentNode; // Return the node if found
      }
      currentNode = currentNode.nextNode;
    }

    return null; // Key not found
  };

  // Function to insert a key-value pair
  const set = function setKeyValue(key, value) {
    if (entryCount >= capacity * loadFactor) {
      throw new Error("Cannot add more elements, the limit has been reached.");
    }

    const hashedKey = hash(key);

    // Check for out of bounds
    if (hashedKey < 0 || hashedKey >= capacity) {
      throw new Error("You are out of bounds");
    }

    // If no node exists at the hashed index, create one
    if (!hashArray[hashedKey]) {
      hashArray[hashedKey] = { key, value, nextNode: null };
      entryCount += 1;
      return;
    }

    let currentNode = hashArray[hashedKey];

    // Check if the key already exists, if so, update the value
    while (currentNode != null) {
      if (currentNode.key === key) {
        currentNode.value = value;
        return;
      }
      currentNode = currentNode.nextNode;
    }

    // Insert new node at the end of the linked list
    currentNode = hashArray[hashedKey];
    while (currentNode.nextNode != null) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = { key, value, nextNode: null };
    entryCount += 1;
  };

  // Function to get the value associated with a key
  const get = function getValue(key) {
    const node = searchFor(key);
    return node ? node.value : null;
  };

  // Function to check if a key exists in the hash map
  const has = function hasKey(key) {
    return searchFor(key) !== null;
  };

  // Function to remove a key-value pair
  const remove = function removeKeyValue(key) {
    const hashedKey = hash(key);

    // Check for out of bounds
    if (hashedKey < 0 || hashedKey >= capacity) {
      throw new Error("You are out of bounds");
    }

    if (!hashArray[hashedKey]) {
      return false;
    }

    let currentNode = hashArray[hashedKey];
    let previousNode = null;

    // Loop through the linked list to find the key
    while (currentNode != null) {
      if (currentNode.key === key) {
        if (previousNode === null) {
          hashArray[hashedKey] = currentNode.nextNode; // Remove the head node
        } else {
          previousNode.nextNode = currentNode.nextNode; // Remove the middle/end node
        }
        entryCount -= 1;
        return true;
      }
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    return false; // Key not found
  };

  // Expose the public methods
  return {
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
  };
}

const test = hashMap();
test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
console.log(test.entries());
console.log(test.remove('banana'));
console.log(test.length());
