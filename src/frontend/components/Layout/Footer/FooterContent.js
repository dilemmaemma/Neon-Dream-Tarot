import { Button, Space, Layout } from 'antd';
import React, {useState} from 'react';

import Contact from './Contact'

function Footer() {
    const [showContact, setShowContact] = useState(false);

    const openContact = () => {
        setShowContact(true);
      };
    
      const closeContact = () => {
        setShowContact(false);
      };

    const { Footer } = Layout;
    const button_links_by_text = {
      'View My Services': `/services`,
      'Contact': `/about#contact`,
      'Terms & Privacy': `/about#terms`,
      'Checkout My Shop!': `http://www.neondreamtarot.myshopify.com`,
    };
    return (
        <div>
            <Footer
            style={{
                backgroundColor: 'black',
                marginLeft: '-7px',
            }}
            >
            <Space direction="horizontal">
                {Object.entries(button_links_by_text).map((text_link_pair, index) => (
                // Wrap the content in parentheses to return an array of React elements
                text_link_pair[0] !== 'Contact' ? (
                    <Button
                    key={index}
                    type="text"
                    size="small"
                    href={text_link_pair[1]}
                    style={{ color: 'white' }}
                    >
                    {text_link_pair[0]}
                    </Button>
                ) : (
                    <p
                        key={index}
                        style={{ color: 'white', cursor: 'pointer' }}
                        onClick={() => openContact()}
                    >
                        Contact
                    </p>
                )
                ))}
            </Space>
            </Footer>

            {/* Conditionally render the Contact component */}
            {showContact && (
                <div
                style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'white',
                    padding: '20px',
                    zIndex: 1000,
                }}
                >
                {/* Content of your Contact component */}
                <Contact />

                {/* Close button or any other mechanism to close the Contact component */}
                <br/>
                <Button 
                    onClick={closeContact} 
                    type='text'
                    size='medium'
                    style={{ color: 'black' }}
                    >
                        Close
                    </Button>
                </div>
            )}
        </div>
      );          
};

export default Footer;