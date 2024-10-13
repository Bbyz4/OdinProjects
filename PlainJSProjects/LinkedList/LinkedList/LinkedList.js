class Node
{
    #value = null;
    #nextNode = null;

    constructor(value, nextNode)
    {
        this.#value = value;
        this.#nextNode = nextNode;
    }

    setNextNode(node)
    {
        this.#nextNode = node;
    }

    getNextNode()
    {
        return this.#nextNode;
    }

    getValue()
    {
        return this.#value;
    }
}

class LinkedList
{
    #firstNode = null;
    #lastNode = null;
    #size = 0;

    constructor()
    {
        this.#firstNode = null;
        this.#lastNode = null;
        this.#size = 0;
    }

    //Functions

    append(value)
    {
        this.insertAt(value, this.#size);
    }

    prepend(value)
    {
        this.insertAt(value, 0);
    }

    size()
    {
        return this.#size;
    }

    head()
    {
        return this.#firstNode;
    }

    tail()
    {
        return this.#lastNode;
    }

    at(index)
    {
        if(index<0 || index>=this.#size)
        {
            return null;
        }
        let temp = this.#firstNode;
        while(index--)
        {
            temp = temp.getNextNode();
        }
        return temp;
    }

    pop()
    {
        this.removeAt(this.#size-1);
    }

    contains(value)
    {
        return this.find(value)!=null;
    }

    find(value)
    {
        let temp = this.#firstNode;
        let i = 0;
        while(temp!=null)
        {
            if(temp.getValue()==value)
            {
                return i;
            }
            temp = temp.getNextNode();
            i++;
        }
        return null;
    }

    toString()
    {
        let output = "";
        let temp = this.#firstNode;
        while(temp!=null)
        {
            output = output + "( " + temp.getValue().toString() + " ) -> ";
            temp = temp.getNextNode();
        }
        output += "null";
        return output;
    }

    //if index<0, inserts at the beginning; if index>=size, inserts at the end
    insertAt(value, index) 
    {
        if(this.#size==0)
        {
            this.#lastNode = new Node(value, null);
            this.#firstNode = this.#lastNode;
        }
        else 
        {
            if(index<=0)
            {
                let temp = new Node(value, this.#firstNode);
                this.#firstNode = temp;
            }
            else if(index>=this.#size)
            {
                this.#lastNode.setNextNode(new Node(value, null));
                this.#lastNode = this.#lastNode.getNextNode();
            }
            else
            {
                let temp = this.#firstNode;
                index--;
                while(index-- && temp!=null)
                {
                    temp = temp.getNextNode();
                } 
                let insertedNode = new Node(value, temp.getNextNode());
                temp.setNextNode(insertedNode);
            }
        }
        this.#size++;
    }

    //if index<0, removes at the beginning; if index>=size, removes at the end
    removeAt(index)
    {
        if(this.#firstNode==null)
        {
            return;
        }

        if(index<=0)
        {
            this.#firstNode = this.#firstNode.getNextNode()
        }
        else if(index >=this.#size)
        {
            this.#lastNode.setNextNode(null);

        }
        else
        {
            let temp = this.at(index-1);
            temp.setNextNode(temp.getNextNode().getNextNode());
            if(index==this.#size-1)
            {
                this.#lastNode = temp;
            }
        }

        this.#size--;
        if(this.#size==0)
        {
            this.#firstNode = null;
            this.#lastNode = null;
        }
    }
};

module.exports = LinkedList; //tests