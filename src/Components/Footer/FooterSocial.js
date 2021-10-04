import React from 'react';
import { Card, Button } from 'react-bootstrap';

const FooterSocial = () => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://10minuteschool.com/assets/images/logo-white.png" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
          সমস্যার ক্ষেত্রে: ০৯৬১-২০০-১০১০ (সকাল ১০টা - রাত ১০টা) অথবা মেসেজ করুন 10MSHelp to ২৬৯৬৯ (২৪x৭)
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
};

export default FooterSocial;