import boto3
from botocore.exceptions import NoCredentialsError

s3_client = boto3.client('s3')

bucket_name = 'your-bucket-name'
object_name = 'your-object-key'
expiration = 3600  # 1 hour; adjust as needed

try:
    pre_signed_url = s3_client.generate_presigned_url('get_object',
                                                      Params={'Bucket': bucket_name, 'Key': object_name},
                                                      ExpiresIn=expiration)
    print("Pre-Signed URL:", pre_signed_url)
except NoCredentialsError:
    print("Credentials not available")