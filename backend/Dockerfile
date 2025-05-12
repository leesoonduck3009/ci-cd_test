# Base image với Node.js 22.9
FROM node:22.9

# Tạo thư mục làm việc trong container
WORKDIR /usr/src/app

# Copy các file cấu hình để cài đặt dependency trước
COPY package*.json tsconfig.json ./

# Cài các dependency
RUN npm install

# Copy toàn bộ source code
COPY . .

# Biên dịch TypeScript thành JavaScript
RUN npm run build

# Expose cổng (thường là 3000 hoặc theo app bạn định nghĩa)
EXPOSE 3000

# Chạy ứng dụng đã được biên dịch
CMD ["node", "dist/index.js"]
