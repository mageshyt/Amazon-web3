import React from 'react'
import { Select, Modal, Button, Input } from 'antd'
import { useMoralis } from 'react-moralis'
const style = {
  wrapper: 'h-[350px]  w-[300px] border shadow-xl  rounded-2xl',
  bookName: 'text-xl  text-red-500',
}
const PurchaseModal = ({ price, name, image }) => {
  const [visible, setVisible] = React.useState(false)
  const [delivery, setDelivery] = React.useState('')

  const { Moralis, account, chainId } = useMoralis()
  //! to handel Purchase
  const handelPurchase = async () => {
    // Get The Price of MATIC

    const options = {
      address: '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0',
      chain: 'eth',
    }
    const priceMatic = await Moralis.Web3API.token.getTokenPrice(options)
    const ProductPrice = (price / priceMatic.usdPrice) * 0.01
    console.log({ ProductPrice })

    // send the purchase to the contract owner
    const options1 = {
      type: 'native',
      amount: Moralis.Units.ETH(ProductPrice),
      receiver: '0x9a9e6793880041ca39122C97260fBb70B7C254D8',
    }
    let result = await Moralis.transfer(options1)

    //Save Transaction Details to DB
    const Transaction = Moralis.Object.extend('Transaction') //! creating Transaction object
    const transaction = new Transaction() //! Making new Transaction object

    transaction.set('Customer', account)
    transaction.set('Delivery', delivery)
    transaction.set('Product', name)

    transaction.save()
    setVisible(false)
  }
  return (
    <div className={style.wrapper}>
      <div className="vertical mt-4 space-y-4 p-4">
        <span className={style.bookName}>${price}</span>
        <span className="text-sm text-gray-400">
          no Import Fees & Free Shipping Included
        </span>
        {/* in stock */}
        <span className="text-2xl text-green-600">in stock</span>

        {/* Quantity */}
        <SelectQuantity setVisible={setVisible} />
      </div>
      {/* Modal */}
      <ModalBox
        visible={visible}
        purchase={handelPurchase}
        onCancel={() => setVisible(false)}
        name={name}
        price={price}
        image={image}
        setDelivery={setDelivery}
      />
    </div>
  )
}

const SelectQuantity = ({ setVisible }) => {
  return (
    <>
      <h3>Quantity</h3>
      <Select defaultValue={1} style={{ width: '100%' }}>
        <Option value={1}>1</Option>
        <Option value={2}>2</Option>
        <Option value={3}>3</Option>
        <Option value={4}>4</Option>
        <Option value={5}>5</Option>
      </Select>
      {/* Buy btn */}
      <button
        onClick={() => setVisible(true)}
        className="mt-4 rounded-lg bg-red-500 p-2 text-white"
      >
        Buy now
      </button>
    </>
  )
}

const ModalBox = ({
  visible,
  onCancel,
  purchase,
  image,
  name,
  price,
  setDelivery,
}) => {
  return (
    <>
      <Modal
        title="Purchase Product"
        visible={visible}
        onOk={purchase}
        onCancel={onCancel}
      >
        <div className="flex">
          <div>
            <img
              src={image}
              alt="product_image"
              className="h-[200px] w-[400px] object-contain"
            />
          </div>
          <div className="vertical">
            <span className="text-lg ">{name}</span>
            <span className="text-xl">${price}</span>

            <span className="mt-4 mb-2">Delivery Address</span>
            <Input
              placeholder="Enter your delivery address"
              onChange={(e) => setDelivery(e.target.value)}
            />
          </div>
        </div>
      </Modal>
    </>
  )
}
export default PurchaseModal
