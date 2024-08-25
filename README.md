# CRM Burritos

This project is a simple CRM (Customer Relationship Management) application for managing clients in a burrito sales business. It is built using AngularJS (v1.8.x) for the frontend and PocketBase for the backend.

## Architecture

### Overview

- **Frontend**: AngularJS (v1.8.x) application to provide a dynamic user interface.
- **Backend**: PocketBase, a lightweight backend solution for managing data.

### Components

#### Frontend (AngularJS)

- **Controllers**: Manage the business logic and interaction between the view and the service.
- **Services**: Handle communication with the backend.
- **Views**: Provide the user interface for interacting with the application.

#### Backend (PocketBase)

- **Collections**: Store data for clients and orders.
- **API**: Provides endpoints for CRUD operations.

## Project Structure
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

- **`crm-burritos/`**
  - **`index.html`**: Main HTML file, entry point of the application
  - **`app.js`**: AngularJS application module and routing configuration
  - **`controllers/`**: Contains AngularJS controllers
    - **`clienteController.js`**: Controller for handling client data
  - **`services/`**: Contains AngularJS services
    - **`pocketbaseService.js`**: Service for interacting with PocketBase
  - **`views/`**: Contains HTML templates for different views
    - **`add-client.html`**: Form for adding a new client
    - **`list-clients.html`**: List of existing clients
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Getting Started
1. Setup PocketBase
Download PocketBase: Get it from PocketBase's official website.

Run PocketBase: Start the server with the command:
bash ---->
$./pocketbase serve
Create Collections:

#### Clients:
Fields: name, email, phone, address, created_at
Orders (optional for future expansion):
Fields: client_id, burrito_type, quantity, total_price, order_date
2. Set Up the AngularJS Frontend
Install Dependencies: You don’t need additional packages for this simple setup, but ensure AngularJS is loaded via CDN in index.html.

#### Configure the Application:

- app.js: Defines the AngularJS module and routing.
pocketbaseService.js: Contains methods for interacting with the PocketBase API.
clienteController.js: Manages data operations and binds data to the views.
Create Views:

- add-client.html: Form to input new client details.
list-clients.html: Displays a list of clients retrieved from the backend.

3. Running the Application
Serve the Application: Use a simple HTTP server to serve your static files. For example, using http-server:

bash ---->
$npx http-server
Access the Application: Open your browser and go to http://localhost:8080 (or the port provided by your HTTP server).

#### Features
- Add Client: Allows users to enter and save client information.
List Clients: Displays a list of all clients retrieved from the backend.
Example Usage
Adding a Client:

- Navigate to the "Add Client" page (/add-client).
Fill in the client details and submit the form.
Viewing Clients:

- Navigate to the "List Clients" page (/list-clients).
View the list of clients added previously.

#### Enhancements
- Validation: Add form validation for better data integrity.
Error Handling: Improve error handling and user feedback.
Order Management: Extend the application to handle orders and integrate with the client data.
License
This project is licensed under the MIT License. See the LICENSE file for details.

#### Acknowledgements
AngularJS: For providing a robust framework for building single-page applications.
PocketBase: For offering a lightweight backend solution.