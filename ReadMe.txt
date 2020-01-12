Required Commands:

npm install --save firebase @angular/fire -f

ng g service window

npm install ngx-qrcode2 --save

npm install @angular/http@latest

npm audit fix


First of all, we have to login with Phone Number Authentication. If successfilly logged in, we'll find an input field for text. By filling up it, we can see that a QRCode has been generated. I've used 'NgxQRCodeModule' for generating QRCode. And below of it there is also an upload field for QRCode image. If we upload, it will decode the QRCode and shows 'text-value' of this QRCode. I've used 'QrCodeReader' for it.


Thank you.

