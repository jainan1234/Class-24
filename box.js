class Box {
    //Creation of objects
    constructor(x,y,width,height){
        var box_options = {
            restitution:0.8,
            friction: 1,
            density: 1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,box_options) 
        this.width = width
        this.height = height
        World.add(world,this.body)
    }
    //how the object should be displayed
    display(){
        //restricts the properties only to this particular object
        push()
        //shift the origin of the canvas
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        fill("white")
        rect(0,0,this.width,this.height) 
        pop()
        
    }
}