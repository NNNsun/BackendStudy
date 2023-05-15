export const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: '나의 API 설명서',
      version: '1.0.0',
    },
  },
  apis: ['./swagger/*.swagger.js'], // 스웨거 경로 설정
};