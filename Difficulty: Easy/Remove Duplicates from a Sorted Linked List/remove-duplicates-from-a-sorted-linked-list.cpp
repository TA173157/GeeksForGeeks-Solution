/*
struct Node {
  int data;
  struct Node *next;
  Node(int x) {
    data = x;
    next = NULL;
  }
};*/

class Solution {
  public:
    // Function to remove duplicates from sorted linked list.
    Node* removeDuplicates(Node* head) {

        // code here
Node*temp = head;
Node*temp1;
Node*sec=NULL;
int a=0;
while(temp){
    if(a==temp->data){
        sec->next= temp->next;
        temp1= temp;
        temp= temp->next;
        delete temp1;
        
    }
    else{
        sec= temp;
        a = temp->data;
        temp = temp->next;
    }
}
return head;
    }
};