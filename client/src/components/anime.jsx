import anime from 'animejs'
import React from 'react'

const DropGrid = () =>{
 return (
    <div className='relative grid h-screen bg-transparent px-8 py-8 z-8'>
        <DotGrid />
    </div>
 )
}
const GRID_HEIGHT = 15
const GRID_WIDTH =34
const DotGrid = () =>{
    const handleClick = (e) =>{
        anime ({
            targets: '.dot',
            scale:[
                { value:1.35, easing: "easeOutSine", duration:250},
                { value:1, easing: "easeInOutQuad", duration:500},
            ],
            translateY:[
                { value:-15, easing: "easeOutSine", duration:250},
                { value:0, easing: "easeInOutQuad", duration:500},
            ],
            opacity:[
                { value:1, easing: "easeOutSine", duration:250},
                { value:0.5, easing: "easeInOutQuad", duration:500},
            ],
            delay:anime.stagger(100, {
                grid:[GRID_WIDTH,GRID_HEIGHT],
                from:e.target.dataset.index,
            })
        })

    }
   const dots = []
   let index = 0

   for (let i = 0; i < GRID_HEIGHT; i++){
    for (let j=0 ;j<GRID_WIDTH; j++) {
        dots.push(
                <div className='group cursor-crosshair rounded-full p-3.5 transition-colors hover:bg-slate-800'
                onClick={handleClick}
                data-index = {index}
                key={`${i}-${j}`}
                >
                    <div className='dot h-2 w-2 rounded-full bg-gradient-to-b from-slate-900 to-slate-800 opacity-400 group-hover:from-green-400 group-hover:to-slate-600'
                    data-index={index} />
                 

                </div>
            );
            index++;
    }
   }
   return (
    <div
    style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)`}}
    className='grid w-fit'
    >
        {dots.map((dot)=>dot)}
    </div>
   )
 
    
}

export default DropGrid