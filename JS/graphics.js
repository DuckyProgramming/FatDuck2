function setupGraphics(){
	angleMode(DEGREES)
	textAlign(CENTER,CENTER)
	rectMode(CENTER)
	colorMode(RGB,255,255,255,1)
	graphics.main=createGraphics(900,600)
	setupLayer(graphics.main)
	graphics.backgrounds=[]
	for(let a=0;a<10;a++){
		graphics.backgrounds.push(createGraphics(900,600))
		setupLayer(graphics.backgrounds[a])
	}
	graphics.minor=[160,160]
	for(let a=0,la=graphics.minor.length;a<la;a++){
		graphics.minor[a]=createGraphics(graphics.minor[a],graphics.minor[a])
		setupLayer(graphics.minor[a])
	}
    graphics.minor[0].translate(80,80)
    graphics.minor[0].strokeWeight(0.6)
    graphics.minor[0].strokeJoin(ROUND)
    for(let a=0,la=100;a<la;a++){
        graphics.minor[0].fill(241+9*a/la,170+52*a/la,189+37*a/la)
        graphics.minor[0].stroke(241+9*a/la,170+52*a/la,189+37*a/la)
        for(let b=0;b<5;b++){
            if(a<la/2){
                graphics.minor[0].beginShape()
                graphics.minor[0].vertex(0,0)
                graphics.minor[0].bezierVertex(-30*(1-a/la*2),-20,-40*(1-a/la*2),-50,-4,-70)
                graphics.minor[0].vertex(-10*(1-(a+1)/la*2),-64)
                graphics.minor[0].endShape()
            }
            graphics.minor[0].rotate(-72)
            graphics.minor[0].beginShape()
            graphics.minor[0].vertex(0,0)
            graphics.minor[0].bezierVertex(30,-20,40,-50,4,-70)
            if(a>=la/2){
                graphics.minor[0].vertex(10*(-1+a/la*2),-64)
                graphics.minor[0].bezierVertex(40*(-1+a/la*2),-50,30*(-1+a/la*2),-20,0,0)
            }else{
                graphics.minor[0].vertex(0,-64)
            }
            graphics.minor[0].endShape(CLOSE)
        }
    }
    graphics.minor[0].fill(240,207,211)
    for(let a=0;a<5;a++){
        graphics.minor[0].rotate(60)
        graphics.minor[0].quad(0,-4,4,-16,0,-24,-4,-16)
        graphics.minor[0].rotate(12)
    }
    graphics.minor[0].fill(254,228,232)
    graphics.minor[0].ellipse(0,0,12,12)
    graphics.minor[1].translate(80,80)
    graphics.minor[1].strokeWeight(0.6)
    graphics.minor[1].strokeJoin(ROUND)
    for(let a=0,la=100;a<la;a++){
        graphics.minor[1].fill(136+59*a/la,61+7*a/la,92-5*a/la)
        graphics.minor[1].stroke(136+59*a/la,61+7*a/la,92-5*a/la)
        for(let b=0;b<5;b++){
            if(a<la/2){
                graphics.minor[1].beginShape()
                graphics.minor[1].vertex(0,0)
                graphics.minor[1].bezierVertex(-21*(1-a/la*2),-20,-28*(1-a/la*2),-50,-3,-70)
                graphics.minor[1].vertex(-7*(1-(a+1)/la*2),-64)
                graphics.minor[1].endShape()
            }
            graphics.minor[1].rotate(-72)
            graphics.minor[1].beginShape()
            graphics.minor[1].vertex(0,0)
            graphics.minor[1].bezierVertex(21,-20,28,-50,3,-70)
            if(a>=la/2){
                graphics.minor[1].vertex(7*(-1+a/la*2),-64)
                graphics.minor[1].bezierVertex(7*(-1+a/la*2),-50,28*(-1+a/la*2),-14,0,0)
            }else{
                graphics.minor[1].vertex(0,-64)
            }
            graphics.minor[1].endShape(CLOSE)
        }
    }
    graphics.minor[1].fill(124,41,51)
    for(let a=0;a<5;a++){
        graphics.minor[1].rotate(60)
        graphics.minor[1].quad(0,-4,3,-16,0,-24,-3,-16)
        graphics.minor[1].rotate(12)
    }
    graphics.minor[1].fill(211,153,120)
    graphics.minor[1].ellipse(0,0,12,12)
}