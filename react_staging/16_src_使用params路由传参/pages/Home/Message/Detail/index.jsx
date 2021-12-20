// import React, { Component } from 'react'
import React from 'react'
import { useParams } from "react-router-dom";

const DetailData = [
  { id: '01', content: '你好,中国1' },
  { id: '02', content: '你好,中国2' },
  { id: '03', content: '你好,中国3' },
]

// export default class Detail extends Component {



//   render() {

//     console.log(getData())

//     return (
//       <ul>
//         <li>ID:</li>
//         <li>TITLE:</li>
//         <li>CONTENT:</li>
//       </ul>
//     )
//   }
// }


/* 
  如果使用useParams 要用函数组件 
*/




export default function Detail() {

  console.log()

  let { id, title } = useParams()
  let resultData = DetailData.find((detailObj) => {
    return detailObj.id === id
  })

  return (
    <ul>
      <li>ID:{id}</li>
      <li>TITLE:{title}</li>
      <li>CONTENT:{resultData.content}</li>
    </ul>
  )
}
