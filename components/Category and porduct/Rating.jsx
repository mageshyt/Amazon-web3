import React from 'antd'
import { Rate, Space, Radio } from 'antd'

const ratings = [5, 4, 3, 2, 1]

const Rating = ({ rating, setRating }) => {
  return (
    <div>
      {/* title */}
      <span>Customer Reviews</span>
      {/* starts and rating */}
      <div>
        <Radio.Group value={rating} onChange={(e) => setRating(e.target.value)}>
          <Space direction="vertical">
            {ratings.map((rate, index) => {
              return (
                <Radio key={index} value={rate}>
                  <Rate defaultValue={rate} disabled={true} />
                </Radio>
              )
            })}
          </Space>
        </Radio.Group>
      </div>
      <br />
    </div>
  )
}

export default Rating
