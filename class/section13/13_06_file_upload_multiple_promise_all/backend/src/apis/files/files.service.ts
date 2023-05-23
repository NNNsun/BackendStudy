import { S3Client } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { createPresignedPost } from '@aws-sdk/s3-presigned-post';
import { FileUpload } from 'graphql-upload';

interface IFilesServiceUpload {
  files: FileUpload[];
}

@Injectable()
export class FilesService {
  async upload({ files }: IFilesServiceUpload): Promise<string[]> {
    const waitedFiles = await Promise.all(files);
    const storage = new S3Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY,
        secretAccessKey: process.env.S3_SECRET_KEY,
      },
    });

    const results = await Promise.all(
      waitedFiles.map((el) => {
        return new Promise<string>((resolve, reject) => {
          const imageFile = createPresignedPost(storage, {
            Bucket: process.env.S3_BUCKET_NAME,
            Key: el.filename,
          });
          el.createReadStream()
            .pipe(imageFile)
            .on('finish', () => resolve(el.filename))
            .on('error', () => reject('실패'));
        });
      }),
    );

    console.log('파일 전송이 완료되었습니다.');
    return results;
  }
}
