import React from 'react'
import Card from './Card'

const Section2 = () => {
 const imageArr = [
        {logo: 'https://images.unsplash.com/photo-1788204763404-839d16b5e156?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8'},
        {logo: 'https://images.unsplash.com/photo-1627135345338-a2024b1aea9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym95c3xlbnwwfHwwfHx8MA%3D%3D'},
        {logo: 'https://images.unsplash.com/photo-1596392927852-2a18c336fb78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym95c3xlbnwwfHwwfHx8MA%3D%3D'}
    ]
    return (
        <div className="flex flex-1 gap-10">
          {imageArr.map((item, index) => (
            <Card
              val={index}
              logo={item.logo}
            />
          ))}
        </div>
      )
    
}

export default Section2
