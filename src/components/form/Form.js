import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const itemsList = ['milk', 'banana', 'cereal', 'apples', 'orange', 'eggs', 'fish'];

const FormRev = () => {
  const [listName, setListName] = useState('');
  const [type, setType] = useState('');
  const [items, setItems] = useState([]);
  const [added, setAdded] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    let timer;
    if (added) {
      timer = setTimeout(() => {
        setAdded(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [added]);

  useEffect(() => {
    let timer;
    if (saved) {
      timer = setTimeout(() => {
        setSaved(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [saved]);

  const handleAddItem = () => {
    if (type && itemsList.includes(type)) {
      setItems((prevItems) => [
        ...prevItems,
        { name: type, quantity: 0 },
      ]);
      setAdded(true);
      setType('');
    }
  };

  const handleDeleteItem = (index) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  };

  const handleSave = () => {
    console.log('Save:', items);
    setSaved(true);
  };

  const handleCancel = () => {
    console.log('Cancel');
  };

  const handleQuantityChange = (index, value) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index].quantity += value;
      return updatedItems;
    });
  };

  return (
    <Container className="form-container">
      <Form>
        <Row>
          <Col className='title-container'>
            <div className="title-fancy">
              <svg viewBox="0 0 1320 300">
                <text x="50%" y="50%" dy=".35em" textAnchor="middle" className="text-animation">
                  My Shopping List
                </text>
              </svg>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>List Name (Search Only) <span>*</span></h2>
            <InputGroup size="lg" className="mb-3">
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                value={listName}
                onChange={(e) => setListName(e.target.value)}
              />
            </InputGroup>
          </Col>
          <Col>
            <h2>Item Name <span>*</span></h2>
            <InputGroup size="lg" className="mb-3">
              <Form.Select
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="" disabled>Select an item</option>
                {itemsList.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </Form.Select>
            </InputGroup>
          </Col>
        </Row>
        <div className='wrapper'>
          <button className="button-add --shine" type="button" onClick={handleAddItem}>Add Item</button>
        </div>
        <Row>
          <Col className='title-list'>
            <div className="title-header">
              <h2>Item Name</h2>
            </div>
            <div className="title-quantity">
              <h2>Quantity</h2>
            </div>
          </Col>
          <div className="demo" style={{ display: added ? 'block' : 'none' }}>
            <div className="or or--x" aria-role="presentation">Added</div>
          </div>
        </Row>
        {items.map((item, index) => (
  <Row key={index}>
    <Col sm={7}>
      <Form.Control size="lg" disabled defaultValue={item.name} />
    </Col>
            <Col sm={3} className='input-block'>
              <div className="ccontainer-inputs">
                <div className="input-row">
                  <div className="input">
                    <button className="minus" aria-label="Decrease by one" type="button" onClick={() => handleQuantityChange(index, -1)} disabled={item.quantity === 0}>
                      <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="1" x2="16" y2="1" stroke="#0064FE" strokeWidth="2" className="icon" />
                      </svg>
                    </button>
                    <div className="number dim">{item.quantity}</div>
                    <button className="plus" aria-label="Increase by one" type="button" onClick={() => handleQuantityChange(index, 1)}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
                        <line x1="8" y1="4.37114e-08" x2="8" y2="16" stroke="#0064FE" strokeWidth="2" />
                        <line y1="8" x2="16" y2="8" stroke="#0064FE" strokeWidth="2" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={2}>
              <button className="noselect button" type="button" onClick={() => handleDeleteItem(index)}>
                <span className='text'>Delete</span>
                <span className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                  </svg>
                </span>
              </button>
            </Col>
          </Row>
        ))}
        <div className='wrapper footer'>
          <button className="button-add --shine --save" type="button" onClick={handleSave}>Save</button>
          <button className="button-add --shine --cancel" type="button" onClick={handleCancel}>Cancel</button>
          {saved && <div className='popup'><h2>Shopping List Saved!</h2></div>}
        </div>
      </Form>
    </Container>
  );
};

export default FormRev;
