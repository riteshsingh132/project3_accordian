import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';

function Home() {

  const [accord, setAccord] = useState({
    header: "",
    discription: ""
  })

  const [data, setData] = useState([])


const [open,setOpen]=useState(false)
const [show, setShow]=useState("show")

const handleOpen=()=>{
    if(open == true){
     setShow("collapse show")
    }else{
      setShow("collapse")
    }
    setOpen(!open)
}



  const handleChange = (e) => {
    setAccord((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (accord.header && accord.discription != "") {
      setData([...data, accord])

      setAccord({
        header: "",
        discription: ""
      })

    } else {
      alert("Please fill the data before submit")
    }

  }

  return (
    <div>
      <div className='container col-10 border d-flex justify-content-center mt-5'>
        <div className='col-4'>

          <h2>Add Section</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Section Header</Form.Label>
              <Form.Control type="text" name='header' placeholder="Enter Your Section" value={accord.header} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Section Details</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={handleChange} name='discription' value={accord.discription} />
            </Form.Group>
            <div className="d-grid gap-2  mt-4 mb-5">
              <button className="btn btn-primary" type="submit">Button</button>
            </div>
          </Form>
        </div>
        <div className='col-6 ml-5 ' style={{ margin: "0 0 0 50px" }}>

          {data.map((item, d) => {
            console.log(d)
            return <form>


            <div className='card mt-3'>

              <Accordion className='border'>
                <AccordionItem eventKey={d} className=''>
                  <AccordionHeader className='col-sm-12 btn btn-link btn-block text-left'><a>{"Section"} {d + 1}</a></AccordionHeader>

                  <AccordionBody className='col-sm-12'>
                    {item.discription}
                  </AccordionBody>
                </AccordionItem>
              </Accordion>
            </div>

              {/* <div class="card-header" id={d}>

                <h2 class="mb-0">
                  <button onClick={handleOpen} className="btn btn-link btn-block text-left"  type="button" data-toggle="collapse" data-target="#" aria-controls="collapseOne">
                  {"Section"} {d + 1}
                  </button>
                </h2>
              </div>

              <div id={d} className={show} aria-labelledby={d} data-parent="#accordionExample">
                <div class="card-body">
                {item.discription}
                </div>
              </div> */}
            </form>
          })}

        </div>
      </div>
    </div>
  )
}

export default Home