# 使用 Node.js 14 作为基础镜像
FROM node:17

# 设置工作目录
WORKDIR /app

RUN npm install -g pnpm

# 复制项目文件到工作目录
COPY . .

# 暴露应用程序端口
EXPOSE 3000

# 启动应用程序
CMD ["pnpm", "start"]
