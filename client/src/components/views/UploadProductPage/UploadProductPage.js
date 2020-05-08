import React, {useState} from 'react'
import {Typography, Button, Form, message, Input, Icon} from 'antd'


const {Title} = Typography;
const {TextArea} = Input;

const Continents = [
    {key: 1, value: "Africa"},
    {key: 2, value: "Canada"},
    {key: 3, value: "Asia"},
    {key: 4, value: "USA"},
    {key: 5, value: "Australia"},
]


function UploadProductPage() {

    const [titleValue, setTitleValue] = useState("");
    const [descriptionValue, setDescription] = useState("");
    const [priceValue, setPriceValue] = useState(0);
    const [continentValue, setContinentValue] = useState(1)


    const onTitleChange = e => {
        setTitleValue(e.currentTarget.value)
    }

    const onDescriptionChange = e => {
        setDescription(e.currentTarget.value)
    }

    const onPriceChange = e => {
        setPriceValue(e.currentTarget.value)
    }

    const onContinentsSelectChange = e => {
        setContinentValue(e.currentTarget.value)
    }

    return (
        <div>
            <div>
                <Title level={2}>Upload Product Here</Title>
            </div>

            <Form onSubmit>

                <label>Title</label>
                <Input
                 onChange={onTitleChange}
                 value={titleValue}
                />

                <label>Description</label>
                <TextArea
                 onChange={onDescriptionChange}
                 value={descriptionValue}
                />

                <label>Price($)</label>
                <Input
                 onChange={onPriceChange}
                 value={priceValue}
                 type="number"
                />

                <select onChange={onContinentsSelectChange}>
                    {Continents.map(item => (
                        <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                </select>

                <Button
                onClick
                >
                    Submit
                </Button>
                   
            </Form>
        </div>
    )
}

export default UploadProductPage
