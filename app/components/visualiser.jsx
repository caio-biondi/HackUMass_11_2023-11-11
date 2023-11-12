import { generateDivs } from "../allocator";

const divs = [<div className={"h-[10%] bg-red-500 border-1"}></div>, <div className={"h-[20%] bg-red-500 border-1"}></div>, <div className={"h-[60%] bg-red-500 border-1"}></div>,<div className={"h-[10%] bg-gray-500 border-1"}></div>]

export function Visualiser() {

  // const objTo = document.getElementById('container');
  // const divTest = document.createElement('div')
  // divTest.innerHTML = 'new div'
  // objTo.appendChild(divTest);

  return (

    <div className="block mt-40 h-96 w-80 gap-0 bg-violet-700">
        {/* <div className=" bg-gray-500 w-[10%]"> </div>  */}

        {/* {generateDivs().map(e => {console.log(e.props); return e;})} */}

        {/* {generateDivs().map(e => {console.log(e); return <div className={`h-[${e}%] w-80 bg-red-500 border-1`}></div>})} */}
        {generateDivs()}
        {/* {divs} */}



    </div>
  );
}

