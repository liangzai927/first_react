import React, { Component } from 'react'
import { useParams, useLocation } from "react-router-dom";
import qs from 'querystring'

const DetailData = [
  { id: '01', content: '你好,中国1' },
  { id: '02', content: '你好,中国2' },
  { id: '03', content: '你好,中国3' },
]

class MyDetail extends Component {


  render() {

    const { locationData } = this.props
    console.log(locationData)
    const { id, title } = locationData.state ? locationData.state : qs.parse(locationData.search.slice(1))
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
      //   <li>ID:??</li>
      //   <li>TITLE:??</li>
      //   <li>CONTENT:??</li>
      // </ul>
    )
  }
}


/* 
  如果使用useParams 要用函数组件 
*/

export default function Detail(props) {

  const paramsData = useParams()
  const locationData = useLocation()

  return <MyDetail {...props} paramsData={paramsData} locationData={locationData} />
}
