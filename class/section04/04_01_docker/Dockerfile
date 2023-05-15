# 1. 운영체제 및 프로그램 설치 (일일이 입력하는 방식)
# FROM ubuntu:22.04

# RUN sudo apt install nodejs
# RUN sudo npm install -g yarn

# 1. 운영체제 및 프로그램 설치 (리눅스 node npm yarn)
FROM node:14

# 2. 내컴퓨터에 있는 폴더나 파일을 도커 컴퓨터 안으로 복사하기
COPY ./index.js /index.js
# *최적화(docker build) -> 하나의 최적화된 파일(docker Image) == 컴퓨터
# 3. 도커안에서 index.js 실행시키기 CMD: 저장만되었다가 실행시킬때 실행명령어로 쓰임, RUN: 해당라인의 명령어까지 수행 후 저장
CMD node index.js 
