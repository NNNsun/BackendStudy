import { S3Client } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { createPresignedPost } from '@aws-sdk/s3-presigned-post';
import { FileUpload } from 'graphql-upload';

interface IFilesServiceUpload {
  files: FileUpload;
}

@Injectable()
export class FilesService {
  async upload({ files }: IFilesServiceUpload): Promise<string[]> {
    console.log(files);
    // 파일을 클라우드 스토리지에 저장하는 로직
    // 1-1) 스토리지 셋팅
    const storage = new S3Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY,
        secretAccessKey: process.env.S3_SECRET_KEY,
      },
    });
    const waitedFiles = [];
    waitedFiles[0] = await files[0];
    waitedFiles[1] = await files[1];
    // 1-2) 스토리지에 파일올리기
    const imageFile = createPresignedPost(storage, {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: files.filename,
      // Conditions: [
      //   ['starts-with', '$Content-Type', 'image/'],
      //   ['content-length-range', 0, 10485760], // 10 MiB
      // ],
    });
    waitedFiles[0]
      .createReadStream()
      .pipe(imageFile)
      .on('finish', () => {
        console.log('성공');
      })
      .on('error', () => {
        console.log('실패');
      });
    console.log('파일 전송이 완료되었습니다.');
    return ['끝!', '끝!'];
  }
}
