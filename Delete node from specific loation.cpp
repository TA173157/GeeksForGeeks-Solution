/*
class Node {
public:
    int data;
    Node* next;

    Node(int data) {
        this->data = data;
        this->next = nullptr;
    }
};
*/
class Solution {
  public:
    Node* deleteNode(Node* head, int x) {
        // code here
        if(x==1){
            Node* temp = head;
            head =head->next;
            delete temp;
            return head;
        }
        
        x--;
        Node * temp = head;
        Node * prev = NULL;
        while(x--){
            prev= temp;
            temp= temp->next;
        }
        prev->next= temp->next;
        delete temp;
        
        return head;
        
        
    }
};
