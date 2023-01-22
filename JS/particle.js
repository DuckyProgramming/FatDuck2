class particle extends entity{
    constructor(layer,x,y,type,color,size,direction){
        super(layer,x,y,type,3)
        this.color=color
        this.size=size
        this.direction=direction
        switch(this.type){
            case 0:
                this.fade=1
                this.scale=0
            break
            case 1:
                this.fade=0
                this.scale=1
            break
        }
    }
    display(){
        switch(this.type){
            case 0: case 1:
                this.layer.fill(this.color[0],this.color[1],this.color[2],this.fade)
                this.layer.noStroke()
                this.layer.ellipse(this.position.x,this.position.y,this.size*this.scale,this.size*this.scale)
            break
        }
    }
    update(){
        switch(this.type){
            case 0:
                this.scale+=10
                if(this.fade<=0){
                    this.remove=true
                }
            break
        }
        super.update()
    }
}