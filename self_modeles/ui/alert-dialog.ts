// export interface title { name: string}

export default function(title:string){
  let el = document.createElement('div')
  document.body.appendChild(el)
  let style = `
    background:rgba(0,0,0,.5);
    height:100%;
    width:100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  `
  el.setAttribute('style',style)
  setTimeout(() => {
    el.remove()
  }, 1000);
  el.innerText = title
}