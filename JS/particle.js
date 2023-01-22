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
        if(this.size>0&&this.scale>0){
            this.layer.translate(this.position.x,this.position.y)
            this.layer.rotate(this.direction)
            this.layer.scale(this.size*this.scale)
            this.layer.noStroke()
            switch(this.type){
                case 0: case 1:
                    this.layer.fill(this.color[0],this.color[1],this.color[2],this.fade)
                    this.layer.ellipse(0,0,10,10)
                break
            }
            this.layer.scale(1/this.size/this.scale)
            this.layer.rotate(-this.direction)
            this.layer.translate(-this.position.x,-this.position.y)
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
            case 1:
                this.position.x+=sin(this.direction)*5
                this.position.y-=cos(this.direction)*5
                this.scale-=0.05
                this.fade=min(1,this.fade+0.25)
                if(this.scale<=0){
                    this.remove=true
                }
            break
        }
        super.update()
    }
}