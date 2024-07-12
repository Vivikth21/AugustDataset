import AWS from 'aws-sdk';

export default async function handler(req, res) {
  console.log('Starting S3 test');

  try {
    // Configure AWS SDK
    AWS.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
    });

    console.log('AWS SDK configured');

    // Create S3 instance
    const s3 = new AWS.S3();

    console.log('S3 instance created');

    // List buckets to test connection
    console.log('Attempting to list buckets');
    const buckets = await s3.listBuckets().promise();
    console.log('Buckets listed successfully');

    // List objects in the specific bucket
    const bucketName = process.env.S3_BUCKET_NAME;
    console.log(`Attempting to list objects in bucket: ${bucketName}`);
    const objects = await s3.listObjectsV2({ Bucket: bucketName }).promise();
    console.log('Objects listed successfully');

    // Return success response
    res.status(200).json({
      message: 'S3 test successful',
      buckets: buckets.Buckets.map(b => b.Name),
      objects: objects.Contents.map(o => o.Key),
    });

  } catch (error) {
    console.error('Error in S3 test:', error);
    res.status(500).json({
      message: 'S3 test failed',
      error: error.message,
      stack: error.stack,
    });
  }
}