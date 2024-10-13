class Node
{
    data;
    left;
    right;

    constructor(data, left, right)
    {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class Tree
{
    #root;

    constructor(array)
    {
        this.#root = buildTree(array);
    }

    getRoot()
    {
        return this.#root;
    }

    insert(value)
    {
        if(this.#root==null)
        {
            this([value]);
            return;
        }

        let temp = this.#root;
        while(1)
        {
            let a = temp.data;
            if(a==value)
            {
                return;
            }
            else if(a<value)
            {
                if(temp.right == null)
                {
                    temp.right = new Node(value,null,null);
                    return;
                }
                else
                {
                    temp = temp.right;
                }
            }
            else
            {
                if(temp.left == null)
                {
                    temp.left = new Node(value,null,null);
                    return;
                }
                else
                {
                    temp = temp.left;
                }
            }
        }
    }

    deleteItem(value)
    {
        if(this.#root==null)
        {
            return;
        }

        let temp = this.#root;
        let tempParent = null;
        let lastStepRight = null;
        while(1)
        {
            let a = temp.data;
            if(a==value)
            {
                if(temp.left==null && temp.right==null)
                {
                    if(tempParent!=null)
                    {
                        if(lastStepRight)
                        {
                            tempParent.right = null;
                        }
                        else
                        {
                            tempParent.left = null;
                        }
                    }
                    else
                    {
                        this.#root = null;
                    }              
                }
                else if(temp.left==null || temp.right==null)
                {
                    let onlyChild = temp.left==null ? temp.left : temp.right;
                    if(tempParent!=null)
                    {
                        if(lastStepRight)
                        {
                            tempParent.right = onlyChild;
                        }
                        else
                        {
                            tempParent.left = onlyChild;
                        }
                    }
                    else
                    {
                        this.#root = onlyChild;
                    }
                }
                else
                {
                    let rightmost = temp.left;
                    while(rightmost.right!=null)
                    {
                        rightmost = rightmost.right;
                    }
                    let x = rightmost.data;
                    this.deleteItem(x);
                    temp.data = x;
                }
                return;
            }
            else if(a<value)
            {
                if(temp.right == null)
                {
                    return;
                }
                else
                {
                    tempParent = temp;
                    lastStepRight = true;
                    temp = temp.right;
                }
            }
            else
            {
                if(temp.left == null)
                {
                    return;
                }
                else
                {
                    tempParent = temp;
                    lastStepRight = false;
                    temp = temp.left;
                }
            }
        }
    }


    find(value)
    {
        if(this.#root==null)
        {
            return null;
        }

        let temp = this.#root;
        while(temp!=null && temp.data != value)
        {
            if(temp.data < value)
            {
                temp = temp.right
            }
            else
            {
                temp = temp.left
            }
        }

        return temp;
    }

    levelOrder(callback)
    {
        if(callback==null)
        {
            throw new Error('A callback function is required');
        }

        if(this.#root==null)
        {
            return;
        }

        let Q = [];
        Q.push(this.#root);

        while(Q.length>0)
        {
            let temp = Q[0];
            Q.shift();
            callback(temp);

            if(temp.left!=null)
            {
                Q.push(temp.left);
            }
            if(temp.right!=null)
            {
                Q.push(temp.right);
            }
        }
    }

    #traversal(node, callback, mode) //mode: <0-pre, =0-in, >0-post
    {
        if(mode<0){callback(node)};

        if(node.left!=null){this.#traversal(node.left, callback, mode)};

        if(mode==0){callback(node)};

        if(node.right!=null){this.#traversal(node.right, callback, mode)};

        if(mode>0){callback(node)};
    }

    preOrder(callback)
    {
        if(callback==null)
        {
            throw new Error('A callback function is required');
        }
        else
        {
            this.#traversal(this.#root, callback, -1);
        }
    }

    inOrder(callback)
    {
        if(callback==null)
        {
            throw new Error('A callback function is required');
        }
        else
        {
            this.#traversal(this.#root, callback, 0);
        }
    }

    postOrder(callback)
    {
        if(callback==null)
        {
            throw new Error('A callback function is required');
        }
        else
        {
            this.#traversal(this.#root, callback, 1);
        }
    }

    //suboptimal for now
    height(node)
    {
        if(node==null)
        {
            return 0;
        }
        if(this.find(node.data)==null)
        {
            return -1;
        }
        else
        {
            return Math.max(this.height(node.left),this.height(node.right))+1;
        }
    }

    depth(node)
    {
        if(node==null)
        {
            return 0;
        }
        if(this.find(node.data)==null)
        {
            return -1;
        }
        let i = 0;
        let temp = this.#root;
        while(temp!=node)
        {
            if(temp.data < node.data)
            {
                temp = temp.right;
            }
            else
            {
                temp = temp.left;
            }
            i++;
        }
        
        return i;
    }

    isBalanced()
    {
        return this.#isBalanced(this.#root);
    }
    
    //suboptimal for now
    #isBalanced(node)
    {
        if(node == null)
        {
            return true;
        }

        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);

        return (
            Math.abs(leftHeight - rightHeight) <= 1 &&
            this.#isBalanced(node.left) &&
            this.#isBalanced(node.right)
        );
    }

    rebalance()
    {
        let values = [];
        this.inOrder(node => values.push(node.data));
        this.#root = buildTree(values);
    }
}

function buildTree(array)
{
    if(array.length==0)
    {
        return null;
    }

    let sortedArray = [...new Set(array)].sort((a, b) => a - b);



    let s = Math.floor(sortedArray.length / 2);
    let len = sortedArray.length;
    const rootNode = new Node(
        sortedArray[s], 
        buildTree(sortedArray.slice(0, s)), 
        buildTree(sortedArray.slice(s + 1, len))
    );

    return rootNode;
}

module.exports = Tree; //testing
