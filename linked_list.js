/*
use this as a reference from the linked list 
*/
import { Linkedlist } from "../linkedlist.mjs";
// var assert = require('assert');
import assert from "assert";

describe("Linkedlist", function () {
  describe("Returnlinkedlistnumber()", function () {
    it("should return 0 if linked list is empty", function () {
      // given: a new empty linkelist
      const new_linkedlist = new Linkedlist();
      // when: Returnlinkedlistnumber() is run
      const count = new_linkedlist.length();
      // then:alert to give total number in linkedlist which should be 0
      //   assert.equal([1, 2, 3].indexOf(4), -1);
      assert.strictEqual(count, 0);
    });

    describe("findthehead()", function () {
      it("look in a linked list and find the first node also know as the head", function () {
        // given: a new empty linked list
        const new_linkedlist = new Linkedlist();

        // Add a node to the list
        new_linkedlist.add("first node data");

        // when: calling gethead() it should find the head node
        const head_node = new_linkedlist.gethead();

        // then: assert the head node is not null
        assert.notStrictEqual(head_node, null);

        // Since there is only one node, the head and the tail should be the same
        const tail_node = new_linkedlist.gettail();
        assert.strictEqual(
          head_node,
          tail_node,
          "Head and tail should be the same when there's only one node"
        );

        // Add another node to test for head and tail distinction
        new_linkedlist.add("second node data");

        // Now the head and tail should be different
        assert.notStrictEqual(
          new_linkedlist.gethead(),
          new_linkedlist.gettail(),
          "Head and tail should be different when there are multiple nodes"
        );
      });
    });

    describe("nodesbefore5()", function () {
      it("look for in the linked list and if the linked list has a total of less than 5 nodes excluding the head and tail", function () {
        // making new link
        const list = new Linkedlist();

        list.add("first node"); //this is the head
        list.add("second node"); //this is the node
        list.add("third node");
        list.add("fourth node");
        list.add("fifth node");
        list.add("sixth node");
        list.add("seventh node"); //this is the tail

        // then the list should reverse everything once more than 5
        // when find the head and the tail
        const head_node = list.gethead();
        const tail_node = list.gettail();

        // then the list needs to assert the place are reversed
        // assert.strictEqual(head)

        // });
        // the tail node cant be the head in the test
        assert.notStrictEqual(
          head_node,
          tail_node,
          "Head and tail should be different after reversal"
        );

        // the head node cant be the tail test for this
        assert.notStrictEqual(head_node, null);
      });
    });
    describe("Linkedlist", function () {
      describe("Removenode()", function () {
        it("should remove the node at the second node", function () {
          // given: 3 node new linkedlist
          const list = new Linkedlist();
          list.add("first node"); //this is the head
          list.add("second node"); //this is the node
          list.add("third node"); //this is the tail

          // when: Remove2ndnode() is run
          list.remove2ndnode();

          // then: the tail should be come the srcond node and remain the tail
          const head = list.gethead();
          const new2ndnode = head.next; //this should have been the 3rd node 
          const tail = list.gettail();

          // check assertions 
          //check for the head node
          assert.notStrictEqual(head, null)
          //check to make sure 2nd node isnt head
          assert.notStrictEqual(new2ndnode.data, "second node")
          // check for the tail          
          assert.strictEqual(tail.data, 'third node')
          //check to make sure 3rd node is new second node
          assert.strictEqual(new2ndnode.data,"third node or removed because node is gone");
          //check to make sure node cound is 2
          assert.strictEqual(list.length(),2)

        });
      });
    });
  });
});
