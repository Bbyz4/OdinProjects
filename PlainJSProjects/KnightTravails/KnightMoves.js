class ChessboardTile
{
    position;
    neighbours;
    distance;
    prevTile;

    constructor(position)
    {
        this.position = position;
        this.neighbours = [];
        this.distance = -1;
        this.prevTile = null;

        let knightMoves = [[-1,-2],[-1,2],[1,-2],[1,2],[-2,-1],[-2,1],[2,-1],[2,1]];
        let x = position[0];
        let y = position[1];

        knightMoves.forEach(elem => {
            if(this.isValid([x+elem[0],y+elem[1]]))
            {
                this.neighbours.push([x+elem[0],y+elem[1]]);
            }
        })
    }

    isValid(position)
    {
        return position[0]>=0 && position[0]<=7 && position[1]>=0 && position[1]<=7;
    }
}

class ChessboardGraph
{
    tiles;

    constructor()
    {
        this.tiles = Array.from({length: 8}, () => []);

        for(let i=0; i<=7; i++)
        {
            for(let j=0; j<=7; j++)
            {
                this.tiles[i].push(new ChessboardTile([i,j]));
            }
        }
    }

    isValid(position)
    {
        return position[0]>=0 && position[0]<=7 && position[1]>=0 && position[1]<=7;
    }

    findShortestPath(start, end)
    {
        if(start==end)
        {
            return [start];
        }

        this.tiles[start[0]][start[1]].distance = 0;
        let Q = [];
        Q.push(start); //queue of positions
        let found = false;

        while(Q.length!=0 && !found)
        {
            let tempPos = Q.shift();
            let temp = this.tiles[tempPos[0]][tempPos[1]];
            temp.neighbours.forEach(neighbour => {

                if(this.tiles[neighbour[0]][neighbour[1]].distance==-1)
                {
                    this.tiles[neighbour[0]][neighbour[1]].distance=temp.distance+1;
                    this.tiles[neighbour[0]][neighbour[1]].prevTile=tempPos;

                    if(neighbour==end)
                    {
                        found=true;
                    }
                    Q.push(neighbour);
                }

            });
        }

        let ans = [];
        let s = end;
        while(s!=start)
        {
            ans.unshift(s);
            s = this.tiles[s[0]][s[1]].prevTile;
        }
        ans.unshift(start);
        return ans;
    }
}

function knightMoves(start, end)
{
    let graph = new ChessboardGraph();
    return graph.findShortestPath(start,end);
}

module.exports = knightMoves;