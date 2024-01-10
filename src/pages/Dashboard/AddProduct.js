import React, { useState } from 'react'
import { Button, Col, Divider, Form, Image, Input, Progress, Row, Typography, message } from 'antd'
import { setDoc, doc } from "firebase/firestore";
import { firestore, storage } from '../../config/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useAuthContext } from '../../context/AuthContext';

const { Title } = Typography

const initialState = { name: "", author: "", price: "", description: "" }

export default function AddProduct() {

  const { user } = useAuthContext()
  const [state, setState] = useState(initialState)
  const [file, setFile] = useState(null)
  const [progress, setProgress] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()

    let { name, author, price, description } = state

    if (!name) { return message.error("Please enter name") }
    if (!price) { return message.error("Please enter price") }

    const product = {
      name, author, price, description,
      dateCreated: new Date().getTime(),
      id: Math.random().toString(36).slice(2),
      file: "",
      createdBy: {
        fullName: user.fullName,
        email: user.email,
        uid: user.uid,
      }
    }

    setIsProcessing(true)

    if (file) {
      uploadFile(product)
    } else {
      createDocument(product)
    }
  }

  const createDocument = async (product) => {
    try {
      await setDoc(doc(firestore, "products", product.id), product);
      message.success("A new product added successfully")
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setIsProcessing(false)
  }

  const uploadFile = (product) => {

    const fileName = product.id
    var fileExtension = file.name.split('.').pop();

    const storageRef = ref(storage, `images/${fileName}.${fileExtension}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(Math.floor(progress))
      },
      (error) => {
        message.error("Something went wrong while uploading file")
        // Handle unsuccessful uploads
        setIsProcessing(false)
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          let data = { ...product, file: downloadURL }
          createDocument(data)
        });
      }
    );
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card p-3 p-md-4 mt-4 mb-5">
              <Title level={2} className='m-0 text-center'>Add Product</Title>

              <Divider />

              <Form layout="vertical">
                <Row gutter={16}>
                  <Col xs={24} lg={12}>
                    <Form.Item label="Name">
                      <Input placeholder='Product Name' name='Name' onChange={handleChange} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} lg={12}>
                    <Form.Item label="Author">
                      <Input placeholder='Author Name' name='author' onChange={handleChange} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} lg={12}>
                    <Form.Item label="Price">
                      <Input placeholder='Price' name='price' onChange={handleChange} />
                    </Form.Item>
                  </Col>
                  <Col sm={12} lg={8}>
                    <Form.Item label="Image">
                      <Input type='file' placeholder='Upload picture' onChange={e => { setFile(e.target.files[0]) }} />
                    </Form.Item>
                    {isProcessing && file && <Progress percent={progress} showInfo={false} />}
                  </Col>
                  <Col sm={12} lg={4}>
                    <Form.Item label="Preview">
                      {file && <Image src={URL.createObjectURL(file)} style={{ width: 50, height: 50 }} />}
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item label="Description">
                      <Input.TextArea placeholder='Description' name='description' onChange={handleChange} />
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={{ span: 12, offset: 6 }} lg={{ span: 8, offset: 8 }} >
                    <Button type='primary' htmlType='submit' className='w-100' loading={isProcessing} onClick={handleSubmit}>Add Product</Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
