class Bird {
    //Creation of objects
    constructor(x,y){
        var bird_options = {
            restitution:0.8,
            friction: 1,
            density: 1.0
        }
        this.body = Bodies.rectangle(x,y,50,50,bird_options) 
        this.width = 50
        this.height = 50
        World.add(world,this.body)
    }
    //how the object should be displayed
    display(){
        this.body.position.x = mouseX
        this.body.position.y = mouseY

        //restricts the properties only to this particular object
        push()
        
        //shift the origin of the canvas
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        fill("red")
        rect(0,0,this.width,this.height) 
        pop()
        
    }
}