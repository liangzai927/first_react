// import React, { Component } from 'react'
import React from 'react'
import { useParams, useLocation } from "react-router-dom";
import qs from 'querystring'

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

  console.log(useLocation())

  //接收 serach 参数 
  let serch = useLocation().search
  // console.log(qs.parse(serch.slice(1)))
  const { id, title } = qs.parse(serch.slice(1))

  // let { id, title } = useParams()
  let resultData = DetailData.find((detailObj) => {
    return detailObj.id === id
  })

  return (
    <ul>
      <li>ID:{id}</li>
      <li>TITLE:{title}</li>
      <li>CONTENT:{resultData.content}</li>
    </ul>
    // <ul>
    //   <li>ID:?</li>
    //   <li>TITLE:?</li>
    //   <li>CONTENT:?</li>
    // </ul>
  )
}
