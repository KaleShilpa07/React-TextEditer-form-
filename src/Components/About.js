import React from "react";
// import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
// class PieRechartComponent extends React.Component {
//    COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];
//    pieData = [
//       {
//          name: "professional",
//          value: 54.85
//       },
//       {
//          name: "friendly",
//          value: 54.85
//       },
//       {
//          name: "supporting",
//          value: 54.85
//       },
//       {
//          name: "Ennovations",
//          value: 54.85
//       },
//       {
//          name: "Environment",
//          value: 54.85
//       }
//    ];
//    CustomTooltip = ({ active, payload, label }) => {
//       if (active) {
//          return (
//          <div
//             className="custom-tooltip"
//             style={{
//                backgroundColor: "#ffff",
//                padding: "5px",
//                border: "1px solid #cccc"
//             }}
//          >
//             <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
//          </div>
//       );
//    }
//    return null;
// };
// render() {
//    return (
//       <PieChart width={730} height={300}>
//       <Pie
//          data={this.pieData}
//          color="#000000"
//          dataKey="value"
//          nameKey="name"
//          cx="50%"
//          cy="50%"
//          outerRadius={120}
//          fill="#8884d8"
//       >
//          {this.pieData.map((entry, index) => (
//             <Cell
//                key={`cell-${index}`}
//                fill={this.COLORS[index % this.COLORS.length]}
//             />
//          ))}
//       </Pie>
//       <Tooltip content={<this.CustomTooltip />} />
//       <Legend />
//       </PieChart>
//       );
//    }
// }
// export default PieRechartComponent;


export default function About(props) {
  let myStyle={
    color:props.mode==='dark'?'black':'light',
    backgroundColor:props.mode==='dark'?'lightblue':'#80808029',
    border:'2px solid',
    borderColor:props.mode==='dark'?'lightblue':'#80808029'
    
    }
  return (
   <div className="container" style={{color:props.mode==='dark'?'black':'light'}}>
      <h1>About</h1>
   <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item" >
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.
      Placeholder content for this accordion, which is intended to demonstrate the  class. This is the second item's accordion body. Let's imagine this being filled with some actual content.
      Placeholder content for this accordion, which is intended to demonstrate the  class. This is the second item's accordion body. Let's imagine this being filled with some actual content.
      Placeholder content for this accordion, which is intended to demonstrate the  class. This is the second item's accordion body. Let's imagine this being filled with some actual content.
   </div></div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"style={myStyle}
      >Placeholder content for this accordion, which is intended to demonstrate the  This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.Placeholder content for this accordion, which is intended to demonstrate the class. 
      This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world applicationPlaceholder content for this accordion, which is intended to demonstrate the class.
       This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world applicationPlaceholder content for this accordion, which is intended to demonstrate the class.
        This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application</div>
    </div>
  </div>
</div></div>
  )
}
