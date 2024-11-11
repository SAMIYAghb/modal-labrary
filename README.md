# Modal Labrary

A simple, customizable modal component for React.

## Installation

Install the package via NPM:

```bash
npm install modal-labrary


# Usage

1-Import the Component and CSS:
import Modal from "modal-labrary";
import 'modal-labrary/lib/Modal.css';

2-Use the Component in Your Application:
You can now use the Modal component with customizable properties, such as title, content, and buttonText.

import React, { useState } from "react";
import Modal from "your-library-name";
import "your-library-name/dist/modal.css";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      <h1>Welcome to My Application</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        title="Modal Title" 
        content="This is the content of the modal." 
        buttonText="Close"
      />
    </div>
  );
};

export default App;


# Props
Prop Name    Type	    Description
isOpen	     boolean	Controls whether the modal is open or closed

onClose	     function 	Callback function to close the modal

title	     string	    The title text displayed at the top of the modal

content	     string	    The content text displayed inside the modal

buttonText 	 string	    The text displayed on the close button


# Customization:
You can customize the modal's appearance by overriding the styles in your own CSS file:
.modal-overlay {
  background-color: rgba(0, 0, 0, 0.5); /* Customize background */
}

.modal-content {
  max-width: 600px; /* Customize max width */
}

.close-button {
  background-color: #ff0000; /* Customize button color */
}


# Exemple:
To see a working example of the modal component, refer to the usage section above.