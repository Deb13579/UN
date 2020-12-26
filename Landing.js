class Landing{
    constructor(x,y,width,height,color){
       var rrrr = {
           isStatic : true
       }
       this.body = Bodies.rectangle(x,y,width,height, rrrr)
       this.height = height
       this.width = width
       this.color = color
       World.add(world,this.body)
    }
   display(){
       push()
       rectMode(CENTER)
       var pos = this.body.position
       fill(this.color) 
       rect(pos.x, pos.y, this.width, this.height)
       pop()
   }
   }