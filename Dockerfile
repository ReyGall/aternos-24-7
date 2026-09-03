FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Открываем порт, который бот использует для веб-страницы (Render-скрипта)
EXPOSE 3000

CMD ["node", "index.js"]
