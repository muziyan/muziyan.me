const createEl = (name) => document.createElementNS('http://www.w3.org/2000/svg',name)

const setAttrs = (el,options) => {
  Object.entries(options).forEach(([key,val]) => {
    el.setAttribute(key,val)
  })
  return el
}


const animation = (path) =>  {
  const use = document.createElementNS('http://www.w3.org/2000/svg','use')

  use.setAttribute('href','#leaf')
  use.setAttribute('width','20')
  use.setAttribute('height','20')
  // use.setAttribute('opacity','0.5')

  const animation  = document.createElementNS('http://www.w3.org/2000/svg','animateMotion')
  animation.setAttribute('dur','500s')
  animation.setAttribute('repeatCount','indefinite')
  animation.setAttribute('path',path)

  use.append(animation)


  return use
}

const symbol = () => {
  const symbol = document.createElementNS('http://www.w3.org/2000/svg','symbol')
  symbol.setAttribute('viewBox','0 0 32 32')
  symbol.setAttribute('id','leaf')

  const g = setAttrs(createEl('g'),{
    fill: 'currentColor'
  })

  const path = setAttrs(createEl('path'),{
    d: 'M20.19 1.5c.541 0 1.03.445.99 1.034C20.892 7.783 16.318 12 10.76 12H6.72c-.086.007-.172.01-.26.01H4.5c-.28 0-.5-.23-.5-.5s.22-.49.5-.49h1.13v-.831c0-4.777 4.07-8.64 8.886-8.68h.004l5.67-.009ZM8.933 11h1.829c5.052 0 9.152-3.824 9.419-8.5l-5.655.01h-.002c-4.304.036-7.893 3.489-7.893 7.679V11h.132c.37-.05.721-.19 1.028-.41l8.75-6.24a.497.497 0 0 1 .78.41c0 .16-.07.31-.21.41L8.932 11Z'
  })
  const pathTwo = setAttrs(createEl('path'),{
    d: 'M28.506 7.01H27.05c-7.262 0-13.05 6.28-13.11 13.652l.055 8.578v.007v-.003c.003.934.766 1.806 1.802 1.734C23.773 30.531 30 23.501 30 15.01V8.964c.014-.15.02-.302.02-.454L30 4.76a.749.749 0 1 0-1.5 0l.006 2.25Zm-9.875 17.77a.76.76 0 0 0 1.05-.17L28 12.943v2.067c0 7.43-5.343 13.406-12.005 13.95l-.054-8.289C15.995 14.286 21 9.01 27.049 9.01H28v1.314a2.77 2.77 0 0 1-.13.196l-9.42 13.21c-.24.34-.16.81.18 1.05Zm-17.13-7.408c-.027-.489.379-.862.84-.862l3.902.01c3.376.02 6.258 2.671 6.258 5.979v.511a.51.51 0 0 1 .5.46c.01.29-.21.53-.5.53H8.82c-3.901 0-7.114-3.011-7.32-6.628Zm10 5.61v-.483c0-2.7-2.38-4.962-5.263-4.98l-3.724-.009C2.791 20.485 5.494 23 8.82 23h.584L5.69 20.35a.495.495 0 0 1-.11-.69c.01 0 .01-.01.01-.01c.16-.22.46-.27.68-.11l4.26 3.04c.292.21.622.346.97.402'
  })

  g.append(path)
  g.append(pathTwo)

  symbol.append(g)


  return symbol
}

const path = () => {
  const numPoints = 50; // Number of random points
  const {width,height} = window.document.body.getBoundingClientRect()

  let pathData = `M${Math.random() * width},0 `; // Initialize with the starting point

  let [prevX,preyY] = [0,0]
  for (let i = 0; i < numPoints; i++) {
    pathData += `  ${Math.ceil(Math.random() * width)},${Math.random() * height} `; // Add line segment to pathData
  }

  pathData += '  0,0 Z'

  return pathData
}


window.onload = () => {
  const el = document.querySelector('#bg-animation')

  el.appendChild(symbol())
  new Array(10).fill(0).forEach(() => {
    el.appendChild(animation(path()))
  })
  window.document.body.appendChild(el)
}
