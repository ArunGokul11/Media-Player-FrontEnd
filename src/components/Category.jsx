import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { deleteCategory, getAllCategory, getVideoDetails, updateCategory, uploadAllCategory } from '../Services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VideoCard from './VideoCard';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

function Category() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [allCategory, setAllCategory] = useState([])
  const [deletecategoryStatus,setDeleteCategoryStatus]=useState(false)
  const [uploadcategoryStatus,setUploadCategoryStatus]=useState(false)
  const [Category, setCategory] = useState({
    id: "",
    name: "",
    allVideos:[]
  })

  const uploadCategory = async () => {
    const { id, name } = Category;
    if (!id || !name) {
      toast.warning("please fill the form completely")
    }
    else {
      const response = await uploadAllCategory(Category);
      console.log(response);
      if (response.status === 201) {
        toast.success(`${response.data.name} is succussfully uploaded`)
        setUploadCategoryStatus(true)
        handleClose();
      }
    }
  }
  const getAllCategoryFromDB = async () => {
    const result = await getAllCategory();
    const { data } = result;
    console.log(result);
    setAllCategory(data)
  }
useEffect(()=>{
  getAllCategoryFromDB();
  setDeleteCategoryStatus(false)
  setUploadCategoryStatus(false)
},[deletecategoryStatus,uploadcategoryStatus])


  const deleteCategoryItem= async(id)=>{
    const response=await deleteCategory(id);
    setDeleteCategoryStatus(true)
  }

  const dragOver = (e)=>{
    e.preventDefault();
    console.log("drag over===");
  }
const videoDrop =async (e,id) =>{
  console.log(`video card need to be placed in card with id ${id}`);
 const VideoId= e.dataTransfer.getData('VideoId');
 console.log(`video with id ${VideoId} need to placed in category wit id ${id}`);
 const response = await getVideoDetails(VideoId);
 const {data}=response
 console.log("video details");
 console.log(data);
 const selectedCategory=allCategory?.find((item)=>item.id==id);
 console.log("seleted category",selectedCategory);
 selectedCategory.allVideos.push(data);
 console.log("===selected category with video details==");
 console.log(selectedCategory);
 await updateCategory(id,selectedCategory)
 getAllCategoryFromDB();
}

  return (
    <div>
      <div>
        <button className='btn btn-warning' onClick={handleShow}>Add New Category</button>
      </div>
      {
          allCategory.length >0?
          allCategory.map((Category)=>(
            <div className='d-grid ms-3' droppable onDragOver={(e)=>dragOver(e)}
            onDrop={(e)=>videoDrop(e,Category.id)}
            >
        <div className='m-2 border border-secondary rounded p-3'>
          <div className='d-flex justify-content-between align-items-center'>
            <h6>{Category.name}</h6>
            <Button variant="secondary" className='ms-3 py-1 text-bg-warning' onClick={()=>deleteCategoryItem(Category.id)}><i class="fa-solid fa-trash fa-l"></i></Button>
          </div>
          <Row>
            <Col sm={12}>
              {
                Category.allVideos?.length>0?
                Category.allVideos.map(video=>(<VideoCard displayVideo={video}/>))
                :
                <p>No item</p>
              }
            </Col>
          </Row>
        </div>
      </div>
          ))
          :
          <p>nothing to display</p>
      }
      
      
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: '23px' }}><i class="fa-solid fa-pencil text-warning me-2"></i>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ fontFamily: "-moz-initial" }}>Please fill the following details</p>
          <Form className='border border-secondary p-3 rounded'>
            <Form.Group className="mb-3 " >
              <Form.Control type="text" placeholder="Enter Category Id" onChange={(e) => setCategory({ ...Category, id: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Enter Category Name" onChange={(e) => setCategory({ ...Category, name: e.target.value })} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={uploadCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}></ToastContainer>
    </div>
  )
}

export default Category