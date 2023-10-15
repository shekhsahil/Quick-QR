import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function BasicExample() {
  const [textAreaValue, setTextAreaValue] = useState("");
  const [qrCodeImage, setQrCodeImage] = useState(
    "https://media.istockphoto.com/id/1358621997/vector/qr-code-smartphone-scanner-linear-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=ePiWZHIbseW9GwmM498rRKC_Dvk8IsKv41nqnC8iZhQ="
  );
  const [variant, setvariant] = useState("warning");
  const [message, setmessage] = useState(
    "Enter data to Generate a new Qr code"
  );
  const handleRefreshClick = () => {
    window.location.reload();
  };

  const [title, setitle] = useState("");
  useEffect(() => {
    if (textAreaValue.trim() !== "") {
      const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
        textAreaValue
      )}&size=200x200`;

      axios
        .get(apiUrl, {
          responseType: "arraybuffer",
        })
        .then((response) => {
          const imageBlob = new Blob([response.data], { type: "image/png" });
          const imageUrl = URL.createObjectURL(imageBlob);
          setQrCodeImage(imageUrl);
          setvariant("success");
          setmessage("QR Code Generated");
          setitle("Your QR Code");
        })
        .catch((error) => {
          console.error("Error fetching QR code:", error);
          setvariant("danger");
          setmessage(
            "Failed to Generate QR Code. Check your internet connection or tap clear and try again"
          );
        });
    } else {
      setvariant("warning");
      setmessage("Enter data to Generate a new Qr code");
      setQrCodeImage(
        "https://media.istockphoto.com/id/1358621997/vector/qr-code-smartphone-scanner-linear-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=ePiWZHIbseW9GwmM498rRKC_Dvk8IsKv41nqnC8iZhQ="
      );
      // console.log("Text area value is empty. Cannot generate QR code.");
      setitle("");
    }
  }, [textAreaValue, qrCodeImage]);

  const handleSaveQRCode = () => {
    if (qrCodeImage) {
      const link = document.createElement("a");
      link.href = qrCodeImage;
      link.download = "qrcode.png";
      link.click();
    }
    if (
      qrCodeImage ===
      "https://media.istockphoto.com/id/1358621997/vector/qr-code-smartphone-scanner-linear-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=ePiWZHIbseW9GwmM498rRKC_Dvk8IsKv41nqnC8iZhQ="
    )
      window.location.reload();
    else {
      console.log("QR code image is not available.");
    }
  };
  return (
    <>
      <Alert variant={variant}>{message}</Alert>
      <Card style={{ width: "18rem", padding: "10px" }}>
        <Card.Img variant="top" src={qrCodeImage} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <Form.Label>Enter Text/ URL to Generate QR Code</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              value={textAreaValue}
              placeholder="example : xyz123@"
              onChange={(e) => setTextAreaValue(e.target.value)}
            />
          </Card.Text>
        </Card.Body>
        <br />
        <Button variant="success" onClick={handleSaveQRCode}>
          Save QR Code
        </Button>{" "}
        <br />
        <Button variant="danger" onClick={handleRefreshClick}>
          Clear
        </Button>
      </Card>
    </>
  );
}

export default BasicExample;
