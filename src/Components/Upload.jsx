import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function App() {
  const [qrCodeData, setQrCodeData] = useState("");
  const [variant, setvariant] = useState("warning");
  const [message, setmessage] = useState("Upload QR code to extract data");

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("https://api.qrserver.com/v1/read-qr-code/", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      const extractedData = decodeURIComponent(data[0].symbol[0].data);
      setQrCodeData(extractedData);
      if (extractedData === "null") {
        setvariant("danger");
        setmessage("Please upload a valid Qr code");
      } else {
        setvariant("success");
        setmessage("Data extracted");
      }
    } catch (error) {
      console.error("Error:", error);
      setvariant("danger");
      setmessage(
        "Failed to extract data. Check your internet connection or tap clear and try again"
      );
    }
  };
  const handleRefreshClick = () => {
    window.location.reload();
  };
  return (
    <>
      <Alert variant={variant} style={{marginBottom:'10vh'}}>{message}</Alert>
      <Card style={{ width: 'fitContent' ,height:"fitContent" ,marginBottom:'30vh',marginLeft:"20px",marginRight:"20px"}}>
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
        <Card.Text>
        <div className="App">
        {/* <Button variant="success"> */}

        <input type="file" accept="image/*" onChange={handleFileChange} />

        {/* </Button> */}
        <br />
        <br />
       
      </div>
        </Card.Text>
    
         {qrCodeData && (
          <div>
            <Alert variant="info">
              <p>Extracted QR Code Data  ⬇️ <br/> 
              <hr />
                 {qrCodeData}</p>
                 {/* <hr /> */}
                 {/* <p>You can copy text manually</p> */}
            </Alert>
          </div>
        )}
         <Button variant="danger" onClick={handleRefreshClick}>
          Clear
        </Button>
      </Card.Body>
    </Card>
    </>
  );
}

export default App;
