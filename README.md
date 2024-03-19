# Sample Whatsapp Chatbot for Clarity Tech

This project is a sample WhatsApp chatbot developed during a training session for Clarity Tech. It utilizes the Cloud API along with OpenAI API to generate responses and Redis for storing chat histories. Below you will find instructions on how to set up and run this project.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- You have a Node.js environment with npm installed.
- You have access to the Meta for Developers console to obtain necessary credentials.
- You have Redis installed and running on your local machine or have access to a Redis cloud instance.

## Installation

Follow these steps to get your development environment set up:

1. Clone the repository to your local machine:
   ```
   git clone https://github.com/your-repository/sample-whatsapp-chatbot.git
   ```
2. Navigate to the project directory:
   ```
   cd sample-whatsapp-chatbot
   ```
3. Install the project dependencies:
   ```
   npm install
   ```

## Configuration

1. Rename the `.env.sample` file to `.env`:
   ```
   mv .env.sample .env
   ```
2. Open the `.env` file in your favorite text editor and fill in the credentials:
   - `PORT`: The port number where your server will listen for requests.
   - `WEBHOOK_VERIFY_TOKEN`: A verification token for validating requests from WhatsApp. Obtain this from the Meta for Developers console.
   - `GRAPH_API_TOKEN`: Your Facebook Graph API token. Also obtained from the Meta for Developers console.
   - `WABA_ID`: The WhatsApp Business Account ID.
   - `PHONE_NUMBER_ID`: The ID of the phone number associated with your WhatsApp Business Account.
   - `OPENAI_API_KEY`: Your OpenAI API key for generating chat responses.

Ensure you replace the placeholder values with actual credentials obtained from the Meta for Developers console and your OpenAI account.

## Running the Project

To run the project, execute the following command in the terminal:
```
npm start
```






