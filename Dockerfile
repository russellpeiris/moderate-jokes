FROM node:18

WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

ENV NODE_ENV=production

# Build the TypeScript code
RUN npm run build

# Expose the port the app runs on
EXPOSE 4002

# Define the command to run the app
CMD ["npm", "start"]