import AWS from 'aws-sdk';

export default async function handler(req, res) {
  const { messageId } = req.query;

  AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
  });

  const s3 = new AWS.S3();

  const checkAndGetFile = async (filePath) => {
    const params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: filePath,
    };

    try {
      const data = await s3.getObject(params).promise();
      return data;
    } catch (error) {
      if (error.code === 'NoSuchKey') {
        return null;
      }
      throw error;
    }
  };

  try {
    // Try to get the image first
    let data = await checkAndGetFile(`images/${messageId}.jpg`);
    let contentType = 'image/jpeg';

    // If image not found, try to get the PDF
    if (!data) {
      data = await checkAndGetFile(`pdfs/${messageId}.pdf`);
      contentType = 'application/pdf';
    }

    if (!data) {
      return res.status(404).json({ error: 'File not found' });
    }

    // Set the appropriate content type
    res.setHeader('Content-Type', contentType);

    // Send the file data
    res.send(data.Body);
  } catch (error) {
    console.error('Error fetching file from S3:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}